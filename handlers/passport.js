const passport = require('passport')
const bcrypt = require('bcrypt-nodejs')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')
const db = require('../db')

// Create local strategy
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, async function(
  email,
  password,
  done
) {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false
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
  secretOrKey: process.env.SECRET_KEY
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

// tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)
