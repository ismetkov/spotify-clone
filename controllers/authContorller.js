import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import pick from 'lodash/pick';
import { randomBytes } from 'crypto';
import { promisify } from 'util';
import { SECRET_KEY, TOKEN_EXPIRY_TIME, FRONT_END_URL } from 'babel-dotenv';
import { mailTransport, mailTemplate } from '../handlers/mail';
import Auth from '../services/Auth';

const randomBytesPromiseified = promisify(randomBytes);

const getToken = userId => {
  return jwt.sign({ sub: userId }, SECRET_KEY, {
    expiresIn: '2 days'
  });
};

export const validateSignup = (req, res, next) => {
  req.sanitizeBody('username');
  req.checkBody('username', 'Username required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    gmail_remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password cannot be blank').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    const errs = errors.map(err => ({ [err.param]: err.msg }));

    return res.status(422).send(errs);
  }

  next();
};

export const signUp = async (req, res) => {
  // see if a user already exist
  const existingUser = await Auth.getExistingUser(req.body);

  // if there is a user, return back an error
  if (existingUser) return res.status(422).send({ message: 'email in use' });

  // there is no validation errors, no existing user - create a new one!
  try {
    await Auth.createAccount(req.body);

    const newUser = await Auth.getExistingUser(req.body);
    const userInfo = pick(newUser, ['id', 'username', 'email', 'avatar']);
    const token = getToken(userInfo);

    return res.status(201).send({ token });
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const signIn = (req, res) => {
  // everything is okay - send token!
  const user = pick(req.user, ['id', 'username', 'email', 'avatar']);
  const token = getToken(user);

  res.send({ token });
};

export const fbSignIn = (req, res) => {
  const token = getToken(req.user.id);

  res.redirect(`${FRONT_END_URL}/fbsuccess/${token}`);
};

export const getCurrentUser = (req, res) =>
  res.send(pick(req.user, ['id', 'username', 'email', 'created_at']));

export const requestReset = async (req, res) => {
  // make sure that user exists
  const user = await Auth.getExistingUser(req.body);

  if (!user)
    return res
      .status(404)
      .send(`No account found for ${req.body.email || 'that'} email`);

  const promiseifiedBytes = await randomBytesPromiseified(20);

  // set a reset token and expiry on that user
  await Auth.setUserToken(req.body, TOKEN_EXPIRY_TIME, promiseifiedBytes);

  const userWithToken = await Auth.getExistingUser(req.body);
  const resetURL = `${FRONT_END_URL}/account/reset/${
    userWithToken.reset_token
  }`;

  // email them with reset token
  await mailTransport.sendMail({
    from: 'noreply@spotify-dev.com',
    to: user.email,
    subject: 'Your Password Reset Token',
    html: mailTemplate(`Your Password Reset Token is here:
      \n\n
      <a href="${resetURL}">Click Here to Reset</a>`)
  });

  res.send({ message: 'Success!' });
};

export const resetPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;

  // check if the passwords match and its not empty
  if (password == null || confirmPassword == null)
    return res.status(422).send('Passwords cannot be blank');

  if (password !== confirmPassword)
    return res.status(422).send("Passwords don't match");

  // check if the token is valid and has not expired
  const user = await Auth.userValidityToken(
    req.params.token,
    TOKEN_EXPIRY_TIME
  );

  if (!user) return res.status(404).send('Token expired or is invalid.');

  // hash their password
  const newPassword = bcrypt.hashSync(password);

  // save the new password and remove old token from account
  await Auth.updateAccountPassword(user, newPassword);

  // generate jwt and return back
  res.send({ token: getToken(user.id) });
};
