import { call, put, takeLatest } from 'redux-saga/effects';

import PlayerService from '../helpers/services/playerApi';
import {
  REQUEST_PLAYLIST,
  GET_PLAYLIST_SUCCESS,
  GET_PLAYLIST_ERROR,
  REQUEST_UPDATE_SONG_PLAYS,
  REQUEST_UPDATE_SONG_PLAYS_SUCCESS,
  REQUEST_UPDATE_SONG_PLAYS_ERROR,
  REQUEST_ALBUMS,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
  REQUEST_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_ERROR,
  REQUEST_ARTIST,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_ERROR,
  REQUEST_ARTIST_ALBUM,
  GET_ARTIST_ALBUM_SUCCESS,
  GET_ARTIST_ALBUM_ERROR
} from '../actions/types';

function* getPlaylist() {
  try {
    const res = yield call(PlayerService.getPlaylist);

    yield put({ type: GET_PLAYLIST_SUCCESS, payload: res.data });
  } catch (err) {
    yield put({
      type: GET_PLAYLIST_ERROR,
      payload: 'probelm with fetching playlist'
    });
  }
}

function* updateSongPlays(action) {
  try {
    yield call(PlayerService.updatePlays, action.payload);
    yield put({ type: REQUEST_UPDATE_SONG_PLAYS_SUCCESS });
  } catch (err) {
    yield put({
      type: REQUEST_UPDATE_SONG_PLAYS_ERROR,
      payload: 'problem with update plays'
    });
  }
}

function* requestAlbums() {
  try {
    const res = yield call(PlayerService.getAlbums);

    yield put({ type: GET_ALBUMS_SUCCESS, payload: res.data });
  } catch (err) {
    yield put({
      type: GET_ALBUMS_ERROR,
      payload: 'getting albums fail'
    });
  }
}

function* requestAlbum(action) {
  try {
    const res = yield call(PlayerService.getAlbum, action.payload);

    yield put({ type: GET_ALBUM_SUCCESS, payload: res.data });
  } catch (err) {
    yield put({
      type: GET_ALBUM_ERROR,
      payload: 'getting album fail'
    });
  }
}

function* requestArtist(action) {
  try {
    const res = yield call(PlayerService.getArtist, action.payload);

    yield put({ type: GET_ARTIST_SUCCESS, payload: res.data });
  } catch (err) {
    yield put({
      type: GET_ARTIST_ERROR,
      payload: 'getting artist fail'
    });
  }
}

function* requestArtistAlbum(action) {
  try {
    const res = yield call(PlayerService.getArtistAlbum, action.payload);

    yield put({
      type: GET_ARTIST_ALBUM_SUCCESS,
      payload: { album: res.data, id: action.payload }
    });
  } catch (err) {
    yield put({
      type: GET_ARTIST_ALBUM_ERROR,
      payload: 'getting artist album fail'
    });
  }
}

export default function* saga() {
  yield takeLatest(REQUEST_PLAYLIST, getPlaylist);
  yield takeLatest(REQUEST_UPDATE_SONG_PLAYS, updateSongPlays);
  yield takeLatest(REQUEST_ALBUMS, requestAlbums);
  yield takeLatest(REQUEST_ALBUM, requestAlbum);
  yield takeLatest(REQUEST_ARTIST, requestArtist);
  yield takeLatest(REQUEST_ARTIST_ALBUM, requestArtistAlbum);
}
