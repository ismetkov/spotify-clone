const express = require('express')
const passport = require('passport')
const router = express.Router()
const authController = require('../controllers/authContorller')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })
const facebookSignin = passport.authenticate('facebook', { session: false })

// auth
router.post(
  '/api/auth/signup',
  authController.validateSignup,
  authController.signUp
)
router.post('/api/auth/signin', requireSignin, authController.signIn)
router.get('/api/auth/me', requireAuth, authController.getCurrentUser)
router.get('/api/auth/facebook', facebookSignin)
router.get('/api/auth/facebook/callback', facebookSignin, authController.signIn)

module.exports = router
