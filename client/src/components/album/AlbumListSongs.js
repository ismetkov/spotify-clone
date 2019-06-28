import React from 'react';
import styled from 'styled-components';

import Track from './Track';

const AlbumListSongsWrapper = styled.div`
  flex: 4;
`;
const TrackList = styled.ul`
  padding-left: 20px;
  margin: 0%;
`;

export default ({
  audioRef,
  albumSongs,
  onPlaylistSetNew,
  isPlaying,
  currentIndex,
  onClickPlayTrack,
  onClickPauseTrack
}) => {
  return (
    <AlbumListSongsWrapper>
      <TrackList>
        {albumSongs &&
          albumSongs.map((track, index) => {
            return (
              <Track
                audioRef={audioRef}
                isPlaying={isPlaying}
                currentIndex={currentIndex}
                key={track.id}
                index={index}
                track={track}
                onPlaylistSetNew={onPlaylistSetNew}
                onClickPlayTrack={onClickPlayTrack}
                onClickPauseTrack={onClickPauseTrack}
              />
            );
          })}
      </TrackList>
    </AlbumListSongsWrapper>
  );
};
