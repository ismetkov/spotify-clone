import React from 'react';
import styled from 'styled-components';

import { endpoint } from '../../helpers/config';

import Button from '../styles/Button';

const AlbumWrapper = styled.div`
  flex: 1.1;
  text-align: center;
`;

const AlbumTitle = styled.h2`
  font-size: 2.8rem;
  margin: 0;
  margin-top: 5px;
`;
const ArtistName = styled.p`
  color: ${props => props.theme.lightWhite};
`;
const AlbumCount = styled.p`
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 3px;
  padding-top: 4px;
  color: ${props => props.theme.white};
`;

const ArtistIconAction = styled.i`
  cursor: pointer;
  opacity: ${props => (props.isPlaying ? 1 : 0)};
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 35.5px);
  border: 1px solid ${props => props.theme.white};
  padding: 10px;
  user-select: none;
  border-radius: 50%;
`;

const ArtistAvatarWrapper = styled.div`
  box-shadow: 0px 0px 25px ${props => props.theme.lightBlack};
  width: 100%;
  min-width: 157px;
  position: relative;
  background: ${props => props.theme.black};

  &:hover ${ArtistIconAction} {
    opacity: 1;
  }
`;

const ArtistAvatar = styled.div`
  padding-top: 100%;
  position: relative;
  opacity: ${props => (props.isPlaying ? 0.4 : 1)};
  background: url(${props => props.src}) no-repeat;
  background-size: cover;

  &:hover {
    opacity: 0.4;
  }

  &:hover ${ArtistIconAction} {
    opacity: 1;
  }
`;

export default ({
  albumInfo,
  isPlaying,
  currentlyPlayingAlbumId,
  onPlaylistPauseClick,
  onPlaylistPlayClick
}) => {
  return (
    <AlbumWrapper>
      {albumInfo && (
        <div>
          <ArtistAvatarWrapper
            onClick={() =>
              isPlaying && albumInfo.id === currentlyPlayingAlbumId
                ? onPlaylistPauseClick()
                : onPlaylistPlayClick()
            }
          >
            <ArtistAvatar
              isPlaying={isPlaying && albumInfo.id === currentlyPlayingAlbumId}
              src={`${endpoint}${albumInfo.artwork_path}`}
            />
            <ArtistIconAction
              isPlaying={isPlaying && albumInfo.id === currentlyPlayingAlbumId}
              className="material-icons md-60"
            >
              {isPlaying && albumInfo.id === currentlyPlayingAlbumId
                ? 'pause'
                : 'play_arrow'}
            </ArtistIconAction>
          </ArtistAvatarWrapper>
          <AlbumTitle>{albumInfo.title}</AlbumTitle>
          <ArtistName>{albumInfo.artist && albumInfo.artist.name}</ArtistName>
          <Button
            half
            color="white"
            bgColor="green"
            borderColor="green"
            onClick={() =>
              isPlaying && albumInfo.id === currentlyPlayingAlbumId
                ? onPlaylistPauseClick()
                : onPlaylistPlayClick()
            }
          >
            {isPlaying && albumInfo.id === currentlyPlayingAlbumId
              ? 'Pause'
              : 'Play'}
          </Button>
          <AlbumCount>
            {albumInfo.total_number} SONG{albumInfo.total_number > 1 && 'S'}
          </AlbumCount>
        </div>
      )}
    </AlbumWrapper>
  );
};
