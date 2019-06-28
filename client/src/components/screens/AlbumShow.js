import React from 'react';
import styled from 'styled-components';

import Page from '../Page';
import AlbumDetail from '../../containers/AlbumDetail';

const AlbumWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0px 40px 0px 80px;
`;

function AlbumShow(props) {
  return (
    <Page>
      <AlbumWrapper>
        <AlbumDetail
          audioRef={props.audioRef}
          albumId={props.match.params.id}
          onClickPlayTrack={props.onClickPlayTrack}
          onClickPauseTrack={props.onClickPauseTrack}
          onClickPlaySong={props.onClickPlaySong}
          onClickPauseSong={props.onClickPauseSong}
        />
      </AlbumWrapper>
    </Page>
  );
}

export default AlbumShow;
