import passport from 'passport'
import bcrypt from 'bcrypt-nodejs'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import LocalStrategy from 'passport-local'
import { Strategy as FacebookStrategy } from 'passport-facebook'

import db from '../db'
import {
  SECRET_KEY,
  FB_CLIENT_ID,
  FB_CLIENT_SECRET,
  FACEBOOK_AUTH_CALLBACK_URL
} from 'babel-dotenv'

// Create local strategy
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, async function(
  email,
  password,
  done
) {
  try {
    const user = await db('users')
      .select('*')
      .where('email', email)
      .first()

    if (!user) return done(null, false)

    // compare if the password in db is equal to client passport
    const isMatch = bcrypt.compareSync(password, user.password)

    if (!isMatch) return done(null, false)

    return done(null, user)
  } catch (err) {
    return done(err)
  }
})

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: SECRET_KEY
}

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, async function(payload, done) {
  // see if a user exists in db
  try {
    const user = await db('users')
      .select('*')
      .where('id', payload.sub)
      .first()

    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  } catch (err) {
    return done(err, false)
  }
})

// facebook strategy
const fbOptions = {
  clientID: FB_CLIENT_ID,
  clientSecret: FB_CLIENT_SECRET,
  callbackURL: `${FACEBOOK_AUTH_CALLBACK_URL}/api/auth/facebook/callback`,
  profileFields: ['id', 'displayName', 'email']
}

const facebookLogin = new FacebookStrategy(fbOptions, async function(
  accessToken,
  refreshToken,
  profile,
  done
) {
  const { id, name, email } = profile._json
  const existingUser = await db('users')
    .select('*')
    .where('facebook_id', id)
    .first()

  if (existingUser) {
    return done(null, existingUser)
  }

  const user = await db('users').insert({
    username: name,
    facebook_id: id,
    email
  })

  done(null, user)
})

// tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)
passport.use(facebookLogin)
