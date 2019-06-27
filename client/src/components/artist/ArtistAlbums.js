import React from 'react';
import styled from 'styled-components';

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
`;

const AlbumTitle = styled.div`
  text-align: center;
  padding-top: 10px;
`;

function ArtistAlbums() {
  return (
    <ArtistAlbumList>
      <ArtistAvatarWrapper>
        <ArtistAvatar />
        <ArtistIconAction className="material-icons md-60">
          play_arrow
        </ArtistIconAction>
        <AlbumTitle>Kygo Live</AlbumTitle>
      </ArtistAvatarWrapper>
    </ArtistAlbumList>
  );
}

export default ArtistAlbums;
