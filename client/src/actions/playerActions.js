import {
  REQUEST_PLAYLIST,
  TOGGLE_PLAYING,
  TOGGLE_REPEAT_MODE,
  INCREMENT_CURRENT_INDEX,
  DECREMENT_CURRENT_INDEX,
  REQUEST_UPDATE_SONG_PLAYS,
  TOGGLE_SHUFFLE_MODE,
  SET_RANDOM_INDEX
} from './types'

export const getPlaylist = () => ({
  type: REQUEST_PLAYLIST
})

export const togglePlaying = () => ({
  type: TOGGLE_PLAYING
})

export const toggleRepeatMode = () => ({
  type: TOGGLE_REPEAT_MODE
})

export const incrementCurrentIndex = () => ({
  type: INCREMENT_CURRENT_INDEX
})

export const decrementCurrentIndex = () => ({
  type: DECREMENT_CURRENT_INDEX
})

export const updateSongPlays = songId => ({
  type: REQUEST_UPDATE_SONG_PLAYS,
  payload: songId
})

export const toggleShuffleMode = () => ({
  type: TOGGLE_SHUFFLE_MODE
})

export const shuffleIndexPlaylist = () => ({
  type: SET_RANDOM_INDEX
})
