import express from 'express'
import passport from 'passport'
const router = express.Router()
import {
  validateSignup,
  signUp,
  signIn,
  getCurrentUser,
  requestReset,
  resetPassword,
  fbSignIn
} from '../controllers/authContorller'

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })
const facebookSignin = passport.authenticate('facebook', { session: false })

// auth
router.post('/api/auth/signup', validateSignup, signUp)
router.post('/api/auth/signin', requireSignin, signIn)
router.get('/api/auth/me', requireAuth, getCurrentUser)
router.get('/api/auth/facebook', facebookSignin)
router.get('/api/auth/facebook/callback', facebookSignin, fbSignIn)
router.post('/api/account/request_reset', requestReset)
router.post('/api/account/reset/:token', resetPassword)

export default router
