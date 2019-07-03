import express from 'express';
import passport from 'passport';
const router = express.Router();
import { getPlaylist } from '../controllers/playlistController';
import { getSongById, updateSongPlays } from '../controllers/songController';
import { getAlbumById, getAlbums } from '../controllers/albumController';
import {
  getArtistById,
  getArtistAlbumById,
  getSongsByArtistId
} from '../controllers/artistController';
import {
  validateSignup,
  signUp,
  signIn,
  getCurrentUser,
  requestReset,
  resetPassword,
  fbSignIn
} from '../controllers/authContorller';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const facebookSignin = passport.authenticate('facebook', { session: false });

// playlist
router.get('/api/playlist', getPlaylist);

// songs
router.get('/api/songs/:song_id', getSongById);
router.put('/api/songs/:song_id/plays', updateSongPlays);

// albums
router.get('/api/albums', getAlbums);
router.get('/api/albums/:album_id', getAlbumById);

// aritsts
router.get('/api/artists/:artist_id', getArtistById);
router.get('/api/artists/albums/:album_id', getArtistAlbumById);

// auth
router.post('/api/auth/signup', validateSignup, signUp);
router.post('/api/auth/signin', requireSignin, signIn);
router.get('/api/auth/me', requireAuth, getCurrentUser);
router.get('/api/auth/facebook', facebookSignin);
router.get('/api/auth/facebook/callback', facebookSignin, fbSignIn);
router.post('/api/account/request_reset', requestReset);
router.post('/api/account/reset/:token', resetPassword);

export default router;
