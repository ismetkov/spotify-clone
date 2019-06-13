import {
  REQUEST_PLAYLIST,
  TOGGLE_PLAYING,
  INCREMENT_CURRENT_INDEX,
  DECREMENT_CURRENT_INDEX,
  REQUEST_UPDATE_SONG_PLAYS
} from './types'

export const getPlaylist = () => ({
  type: REQUEST_PLAYLIST
})

export const togglePlaying = () => ({
  type: TOGGLE_PLAYING
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
