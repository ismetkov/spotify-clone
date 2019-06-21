import { GET_ALBUMS_SUCCESS, GET_ALBUM_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  albums: [],
  album: {}
};

function musicReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALBUMS_SUCCESS:
      return { ...state, albums: action.payload };

    case GET_ALBUM_SUCCESS:
      return { ...state, album: action.payload };

    default:
      return state;
  }
}

export default musicReducer;
