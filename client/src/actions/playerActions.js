import {
  REQUEST_PLAYLIST,
  TOGGLE_PLAYING,
  TOGGLE_REPEAT_MODE,
  INCREMENT_CURRENT_INDEX,
  DECREMENT_CURRENT_INDEX,
  REQUEST_UPDATE_SONG_PLAYS,
  TOGGLE_SHUFFLE_MODE,
  SET_RANDOM_INDEX,
  SET_NEW_PLAYLIST,
  SET_PLAYING_STATE,
  SET_ARTIST_SONGS_PLAYLIST,
  SET_NEW_ALBUM_PLAYLIST
} from './types';

export const getPlaylist = () => ({
  type: REQUEST_PLAYLIST
});

export const togglePlaying = () => ({
  type: TOGGLE_PLAYING
});

export const setPlayingState = isPlaying => ({
  type: SET_PLAYING_STATE,
  payload: isPlaying
});

export const toggleRepeatMode = () => ({
  type: TOGGLE_REPEAT_MODE
});

export const incrementCurrentIndex = () => ({
  type: INCREMENT_CURRENT_INDEX
});

export const decrementCurrentIndex = () => ({
  type: DECREMENT_CURRENT_INDEX
});

export const updateSongPlays = songId => ({
  type: REQUEST_UPDATE_SONG_PLAYS,
  payload: songId
});

export const toggleShuffleMode = () => ({
  type: TOGGLE_SHUFFLE_MODE
});

export const shuffleIndexPlaylist = () => ({
  type: SET_RANDOM_INDEX
});

export const setNewPlaylist = (newPlaylist, songIndex, albumId) => ({
  type: SET_NEW_PLAYLIST,
  payload: { newPlaylist, songIndex, albumId }
});

export const setNewAlbum = newPlaylist => ({
  type: SET_NEW_ALBUM_PLAYLIST,
  payload: newPlaylist
});

export const setArtistSongsPlaylist = (songs, songIndex) => ({
  type: SET_ARTIST_SONGS_PLAYLIST,
  payload: { songs, songIndex }
});
