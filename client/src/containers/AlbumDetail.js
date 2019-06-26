import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import pick from 'lodash/pick';

import { fetchAlbum, setNewPlaylist } from '../actions';

import AlbumInfo from '../components/album/AlbumInfo';
import AlbumListSongs from '../components/album/AlbumListSongs';

const AlbumDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 20px;
`;

class AlbumDetail extends Component {
  componentDidMount = () => {
    const { fetchAlbum, albumId } = this.props;

    fetchAlbum(albumId);
  };

  onClickSetPlaylist = songIndex => {
    const { music, setNewPlaylist } = this.props;
    const albumId = music.album.id;

    setNewPlaylist(music.album.songs, songIndex, albumId);
  };

  onPlaylistPlayClick = () => {
    const { player, music, setNewPlaylist, onClickPlaySong } = this.props;
    const albumId = music.album.id;

    setNewPlaylist(
      music.album.songs,
      (player.currentlyPlayingAlbumId === albumId ? player.currentIndex : 0) ||
        0,
      albumId
    );
    onClickPlaySong();
  };

  onPlaylistPauseClick = () => {
    const { onClickPauseSong } = this.props;

    onClickPauseSong();
  };

  render = () => {
    const {
      audioRef,
      music,
      player,
      onClickPlayTrack,
      onClickPauseTrack
    } = this.props;
    const albumInfo = pick(music.album, [
      'id',
      'title',
      'artwork_path',
      'total_number',
      'artist'
    ]);

    return (
      <AlbumDetailWrapper>
        <AlbumInfo
          albumInfo={albumInfo}
          isPlaying={player.isPlaying}
          currentlyPlayingAlbumId={player.currentlyPlayingAlbumId}
          onPlaylistPlayClick={this.onPlaylistPlayClick}
          onPlaylistPauseClick={this.onPlaylistPauseClick}
        />
        <AlbumListSongs
          audioRef={audioRef}
          isPlaying={player.isPlaying}
          currentIndex={player.currentPlaylist[player.currentIndex].id}
          onClickSetPlaylist={this.onClickSetPlaylist}
          albumSongs={music.album.songs}
          onClickPlayTrack={onClickPlayTrack}
          onClickPauseTrack={onClickPauseTrack}
        />
      </AlbumDetailWrapper>
    );
  };
}

const mapStateToProps = ({ player, music }) => ({ player, music });

const mapDispatchToProps = dispatch => ({
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
  setNewPlaylist: (newPlaylist, songIndex, albumId) =>
    dispatch(setNewPlaylist(newPlaylist, songIndex, albumId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetail);
