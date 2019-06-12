import { call, put, takeLatest } from 'redux-saga/effects'

import PlayerService from '../helpers/services/playerApi'
import {
  REQUEST_PLAYLIST,
  GET_PLAYLIST_SUCCESS,
  GET_PLAYLIST_ERROR,
  REQUEST_UPDATE_SONG_PLAYS,
  REQUEST_UPDATE_SONG_PLAYS_SUCCESS,
  REQUEST_UPDATE_SONG_PLAYS_ERROR
} from '../actions/types'

function* getPlaylist() {
  try {
    const res = yield call(PlayerService.getPlaylist)

    yield put({ type: GET_PLAYLIST_SUCCESS, payload: res.data })
  } catch (err) {
    yield put({
      type: GET_PLAYLIST_ERROR,
      payload: 'probelm with fetching playlist'
    })
  }
}

function* updateSongPlays(action) {
  try {
    yield call(PlayerService.updatePlays, action.payload)
    yield put({ type: REQUEST_UPDATE_SONG_PLAYS_SUCCESS })
  } catch (err) {
    yield put({
      type: REQUEST_UPDATE_SONG_PLAYS_ERROR,
      payload: 'problem with update plays'
    })
  }
}

export default function* saga() {
  yield takeLatest(REQUEST_PLAYLIST, getPlaylist)
  yield takeLatest(REQUEST_UPDATE_SONG_PLAYS, updateSongPlays)
}
