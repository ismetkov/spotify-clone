import {
  GET_PLAYLIST_SUCCESS,
  TOGGLE_PLAYING,
  INCREMENT_CURRENT_INDEX,
  DECREMENT_CURRENT_INDEX
} from '../actions/types'

const INITIAL_STATE = {
  currentPlaylist: [],
  currentIndex: 0,
  isPlaying: false
}

function playerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PLAYLIST_SUCCESS:
      return { ...state, currentPlaylist: action.payload }

    case TOGGLE_PLAYING:
      return { ...state, isPlaying: !state.isPlaying }

    case INCREMENT_CURRENT_INDEX:
      if (state.currentIndex === state.currentPlaylist.length - 1) {
        return { ...state, currentIndex: 0 }
      }

      return { ...state, currentIndex: state.currentIndex + 1 }

    case DECREMENT_CURRENT_INDEX:
      if (state.currentIndex === 0) {
        return { ...state, currentIndex: 0 }
      }

      return { ...state, currentIndex: state.currentIndex - 1 }

    default:
      return state
  }
}

export default playerReducer
