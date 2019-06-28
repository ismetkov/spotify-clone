import React from 'react';
import styled from 'styled-components';

import {
  TrackWrapper,
  TrackItem,
  TrackLeftPart,
  TrackRightPart,
  TrackTitle,
  IconWrapper,
  TrackAvatar
} from '../styles/TrackStyles';

const TrackList = styled.ul`
  padding-left: 20px;
  margin: 0%;
`;

function ArtistTracks({
  songs,
  onClickSetPlaylist,
  isPlaying,
  onClickPauseTrack,
  onClickPlayTrack,
  currentIndex
}) {
  return (
    <TrackList>
      {songs.length > 0 &&
        songs.map((song, index) => (
          <TrackWrapper key={song.id}>
            <TrackItem>
              <TrackLeftPart>
                <IconWrapper>
                  <i
                    onClick={() => {
                      onClickSetPlaylist(index);

                      isPlaying && currentIndex === song.id
                        ? onClickPauseTrack()
                        : onClickPlayTrack();
                    }}
                    className="material-icons md-20 track__arrow"
                  >
                    {isPlaying && currentIndex === song.id
                      ? 'pause'
                      : 'play_arrow'}
                  </i>
                  <i className="material-icons md-20 track__note">
                    {isPlaying && song.id === currentIndex
                      ? 'pause'
                      : 'music_note'}
                  </i>
                </IconWrapper>
                <TrackAvatar />
                <div>
                  <TrackTitle onClick={() => alert('ok')}>
                    {song.title}
                  </TrackTitle>
                </div>
              </TrackLeftPart>
              <TrackRightPart>
                <i className="material-icons md-20 track-more-info">
                  more_horiz
                </i>
                <p>{song.duration}</p>
              </TrackRightPart>
            </TrackItem>
          </TrackWrapper>
        ))}
    </TrackList>
  );
}

export default ArtistTracks;
