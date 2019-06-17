import { createSelector } from 'reselect';

const getCurrentPlaylist = state => state.currentPlaylist;
const getCurrentIndex = state => state.currentIndex;

export const getCurrentSong = createSelector(
  getCurrentPlaylist,
  getCurrentIndex,
  (currentPlaylist, currentIndex) => {
    if (currentPlaylist.length === 0) {
      return {};
    }

    return currentPlaylist[currentIndex];
  }
);
