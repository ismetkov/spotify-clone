import {
  GET_PLAYLIST_SUCCESS,
  TOGGLE_PLAYING,
  TOGGLE_REPEAT_MODE,
  INCREMENT_CURRENT_INDEX,
  DECREMENT_CURRENT_INDEX,
  TOGGLE_SHUFFLE_MODE,
  SET_RANDOM_INDEX
} from '../actions/types';

const PREV_STATE = JSON.parse(localStorage.getItem('player'));

const INITIAL_STATE = PREV_STATE || {
  currentPlaylist: [],
  currentIndex: 0,
  isPlaying: false,
  repeatMode: false,
  shuffleMode: false
};

function playerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PLAYLIST_SUCCESS:
      return { ...state, currentPlaylist: action.payload };

    case TOGGLE_PLAYING:
      return { ...state, isPlaying: !state.isPlaying };

    case TOGGLE_REPEAT_MODE:
      return { ...state, repeatMode: !state.repeatMode };

    case TOGGLE_SHUFFLE_MODE:
      return { ...state, shuffleMode: !state.shuffleMode };

    case INCREMENT_CURRENT_INDEX:
      if (state.currentIndex === state.currentPlaylist.length - 1) {
        return { ...state, currentIndex: 0 };
      }

      return { ...state, currentIndex: state.currentIndex + 1 };

    case DECREMENT_CURRENT_INDEX:
      if (state.currentIndex === 0) {
        return { ...state, currentIndex: 0 };
      }

      return { ...state, currentIndex: state.currentIndex - 1 };

    case SET_RANDOM_INDEX:
      return {
        ...state,
        currentIndex: Math.floor(Math.random() * state.currentPlaylist.length)
      };

    default:
      return state;
  }
}

export default playerReducer;
