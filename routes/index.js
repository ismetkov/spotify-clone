const express = require('express')
const passport = require('passport')
const router = express.Router()
const passportService = require('../handlers/passport')
const authController = require('../controllers/authContorller')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

// auth
router.post(
  '/api/auth/signup',
  authController.validateSignup,
  authController.signUp
)
router.post('/api/auth/signin', requireSignin, authController.signIn)
router.get('/api/auth/me', requireAuth, authController.getCurrentUser)

module.exports = router
