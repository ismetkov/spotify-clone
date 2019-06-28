import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { endpoint } from '../../helpers/config';

import {
  ArtistAvatarWrapper,
  ArtistIconAction,
  ArtistAvatar
} from '../styles/AlbumStyles';

export const ArtistAlbumList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 40px;
`;

const AlbumTitle = styled.p`
  color: ${props => props.theme.white};
  text-align: center;
  padding-top: 10px;
`;

function ArtistAlbums({
  albums,
  onClickSetArtistAlbumSongs,
  onClickPauseArtistAlbumSongs,
  isPlaying,
  currentlyPlayingAlbumId
}) {
  return (
    <ArtistAlbumList>
      {albums.length > 0 &&
        albums.map(album => (
          <ArtistAvatarWrapper key={album.id}>
            <Link to={`/album/${album.id}`}>
              <ArtistAvatar
                isPlaying={isPlaying && album.id === currentlyPlayingAlbumId}
                src={`${endpoint}${album.artwork_path}`}
              />
            </Link>
            <ArtistIconAction
              isPlaying={isPlaying && album.id === currentlyPlayingAlbumId}
              className="material-icons md-60"
              onClick={() =>
                isPlaying && album.id === currentlyPlayingAlbumId
                  ? onClickPauseArtistAlbumSongs()
                  : onClickSetArtistAlbumSongs(album.id)
              }
            >
              {isPlaying && album.id === currentlyPlayingAlbumId
                ? 'pause'
                : 'play_arrow'}
            </ArtistIconAction>

            <Link to={`/album/${album.id}`}>
              <AlbumTitle>{album.title}</AlbumTitle>
            </Link>
          </ArtistAvatarWrapper>
        ))}
    </ArtistAlbumList>
  );
}

export default ArtistAlbums;
