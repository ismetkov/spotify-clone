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

function ArtistTracks() {
  return (
    <TrackList>
      <TrackWrapper>
        <TrackItem>
          <TrackLeftPart>
            <IconWrapper>
              <i className="material-icons md-20 track__arrow">play_arrow</i>
              <i className="material-icons md-20 track__note">music_note</i>
            </IconWrapper>
            <TrackAvatar />
            <div>
              <TrackTitle>Firestone</TrackTitle>
            </div>
          </TrackLeftPart>
          <TrackRightPart>
            <i className="material-icons md-20 track-more-info">more_horiz</i>
            <p>3:02</p>
          </TrackRightPart>
        </TrackItem>
      </TrackWrapper>
    </TrackList>
  );
}

export default ArtistTracks;
