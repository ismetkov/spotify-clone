import React from 'react';

import Page from '../Page';
import AlbumDetail from '../../containers/AlbumDetail';

function AlbumShow(props) {
  return (
    <Page>
      <AlbumDetail
        audioRef={props.audioRef}
        albumId={props.match.params.id}
        onClickPlayTrack={props.onClickPlayTrack}
        onClickPauseTrack={props.onClickPauseTrack}
        onClickPlaySong={props.onClickPlaySong}
        onClickPauseSong={props.onClickPauseSong}
      />
    </Page>
  );
}

export default AlbumShow;
