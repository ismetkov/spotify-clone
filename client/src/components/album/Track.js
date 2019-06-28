import React from 'react';
import { Link } from 'react-router-dom';

import {
  TrackWrapper,
  TrackItem,
  TrackLeftPart,
  TrackRightPart,
  TrackTitle,
  AuthorName,
  IconWrapper
} from '../styles/TrackStyles';

export default ({
  index,
  track,
  onPlaylistSetNew,
  isPlaying,
  currentIndex,
  onClickPlayTrack,
  onClickPauseTrack
}) => (
  <TrackWrapper isPlaying={isPlaying && track.id === currentIndex}>
    <TrackItem>
      <TrackLeftPart>
        <IconWrapper>
          <i
            onClick={() => {
              onPlaylistSetNew(index);

              isPlaying && currentIndex === track.id
                ? onClickPauseTrack()
                : onClickPlayTrack();
            }}
            className="material-icons md-20 track__arrow"
          >
            {isPlaying && currentIndex === track.id ? 'pause' : 'play_arrow'}
          </i>
          <i className="material-icons md-20 track__note">
            {isPlaying && track.id === currentIndex ? 'pause' : 'music_note'}
          </i>
        </IconWrapper>
        <div>
          <TrackTitle
            onDoubleClick={() => {
              onPlaylistSetNew(index);

              isPlaying && currentIndex === track.id
                ? onClickPauseTrack()
                : onClickPlayTrack();
            }}
          >
            {track.title}
          </TrackTitle>
          <Link to={`/artist/2`}>
            <AuthorName>{track.name}</AuthorName>
          </Link>
        </div>
      </TrackLeftPart>
      <TrackRightPart>
        <i className="material-icons md-20 track-more-info">more_horiz</i>
        <p>{track.duration}</p>
      </TrackRightPart>
    </TrackItem>
  </TrackWrapper>
);
