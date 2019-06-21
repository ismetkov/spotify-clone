import React from 'react';
import styled from 'styled-components';

const TrackWrapper = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 7px 10px;
  box-sizing: border-box;
  user-select: none;

  background: ${props => (props.isPlaying ? props.theme.blackDark : null)};

  &:hover {
    background: ${props => props.theme.blackDark};
  }

  &:hover .track__note {
    display: none;
  }

  &:hover .track__arrow {
    display: block;
    padding-bottom: 10px;
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TrackItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover .track-more-info {
    display: block;
  }
`;

const TrackLeftPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrackRightPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .track-more-info {
    display: none;
  }
`;
const TrackTitle = styled.p`
  margin: 6px 0;
  font-size: 16px;
  font-weight: 500;
`;
const AuthorName = styled.p`
  color: ${props => props.theme.lightWhite};
  letter-spacing: 0.04rem;
  margin-top: -9px;
  font-size: 14px;
`;

const IconWrapper = styled.div`
  padding-right: 15px;

  .track__arrow {
    display: none;
  }
`;

export default ({
  index,
  track,
  onClickSetPlaylist,
  isPlaying,
  currentIndex,
  onClickPlayTrack,
  onClickPauseTrack
}) => (
  <TrackWrapper
    onDoubleClick={() => {
      onClickSetPlaylist(index);

      isPlaying && currentIndex === track.id
        ? onClickPauseTrack()
        : onClickPlayTrack();
    }}
    isPlaying={isPlaying && track.id === currentIndex}
  >
    <TrackItem>
      <TrackLeftPart>
        <IconWrapper>
          <i
            onClick={() => {
              onClickSetPlaylist(index);

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
          <TrackTitle>{track.title}</TrackTitle>
          <AuthorName>{track.name}</AuthorName>
        </div>
      </TrackLeftPart>
      <TrackRightPart>
        <i className="material-icons md-20 track-more-info">more_horiz</i>
        <p>{track.duration}</p>
      </TrackRightPart>
    </TrackItem>
  </TrackWrapper>
);
