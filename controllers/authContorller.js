const db = require('../db')
const bcrypt = require('bcrypt-nodejs')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

const getToken = userId => {
  return jwt.sign({ sub: userId }, process.env.SECRET_KEY, {
    expiresIn: '2 days'
  })
}

exports.validateSignup = (req, res, next) => {
  req.sanitizeBody('username')
  req.checkBody('username', 'Username required').notEmpty()
  req.checkBody('email', 'Email is not valid').isEmail()
  req.sanitizeBody('email').normalizeEmail({
    gmail_remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  })
  req.checkBody('password', 'Password cannot be blank').notEmpty()

  const errors = req.validationErrors()

  if (errors) {
    const errs = errors.map(err => ({ [err.param]: err.msg }))

    return res.status(422).send(errs)
  }

  next()
}

exports.signUp = async (req, res) => {
  const { username, email, password } = req.body

  // see if a user already exist
  const existingUser = await db('users')
    .select('*')
    .where('email', email)
    .first()

  // if there is a user, return back an error
  if (existingUser) {
    return res.status(422).send({ message: 'email in use' })
  }

  // there is no validation errors, no existing user - create a new one!
  try {
    const user = await db('users').insert({
      username,
      email,
      avatar: `http://gravatar.com/avatar/${md5(email)}?d=identicon`,
      password: bcrypt.hashSync(password) // ALWAYS hash password before inserting
    })
    // generate token and send them back
    const token = getToken(user[0])

    return res.status(201).send({ token })
  } catch (err) {
    return res.status(500).send(err)
  }
}

exports.signIn = (req, res) => {
  // everything is okay - send token!
  const token = getToken(req.user.id)

  res.send({ token })
}

exports.getCurrentUser = (req, res) => {
  res.send(_.pick(req.user, ['id', 'username', 'email', 'created_at']))
}
