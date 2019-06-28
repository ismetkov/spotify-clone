import React from 'react';
import styled from 'styled-components';

import Page from '../Page';
import ArtistDetail from '../../containers/ArtistDetail';

const ArtistWrapper = styled.section`
  position: relative;
`;

function Artist(props) {
  return (
    <Page>
      <ArtistWrapper>
        <ArtistDetail
          isPlaying={props.isPlaying}
          artistId={props.match.params.id}
          onClickPlayTrack={props.onClickPlayTrack}
          onClickPauseTrack={props.onClickPauseTrack}
          onClickSetArtistAlbumSongs={props.onClickSetArtistAlbumSongs}
          onClickPauseArtistAlbumSongs={props.onClickPauseArtistAlbumSongs}
        />
      </ArtistWrapper>
    </Page>
  );
}

export default Artist;
