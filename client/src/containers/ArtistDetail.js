import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchArtist, setArtistSongsPlaylist } from '../actions';
import ArtistTracks from '../components/artist/ArtistTracks';
import ArtistAlbums from '../components/artist/ArtistAlbums';

import Button from '../components/styles/Button';
import SectionTitle from '../components/styles/SectionTitle';

const ArtistHeader = styled.header`
  height: 500px;
  padding-left: 260px;
  margin-left: -260px;
  text-align: center;
  position: relative;
  padding-top: 120px;
  align-items: center;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: center;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: inset -90px -111px 168px 0px #000;
  }
`;

const ArtistListenersCount = styled.span`
  letter-spacing: 0.5rem;
`;

const ArtistName = styled.h1`
  display: block;
  font-size: 7rem;
  color: white;
  margin-bottom: 0;
  z-index: 3;
  letter-spacing: 0.3rem;
`;

const ArtistContent = styled.div`
  background-color: black;
  min-height: 100vh;
  padding-left: 80px;
  padding-right: 80px;
`;

class ArtistDetail extends Component {
  componentDidMount = () => {
    const { fetchArtist, artistId } = this.props;

    fetchArtist(artistId);
  };

  onClickSetPlaylist = songIndex => {
    const { setArtistSongsPlaylist, music } = this.props;
    const artistSongs = music.artistInfo.songs;

    setArtistSongsPlaylist(artistSongs, songIndex);
  };

  render = () => {
    const {
      music: { artistInfo },
      player,
      onClickPlayTrack,
      onClickPauseTrack,
      isPlaying,
      onClickSetArtistAlbumSongs,
      onClickPauseArtistAlbumSongs
    } = this.props;

    if (!artistInfo.songs) {
      return null;
    }

    return (
      <>
        <ArtistHeader src={artistInfo.artist.artistCover}>
          <ArtistListenersCount>
            {artistInfo.artist_plays || 0} PLAYS
          </ArtistListenersCount>
          <ArtistName>{artistInfo.artist.name}</ArtistName>
          <Button half color="white" bgColor="green" borderColor="green">
            PLAY
          </Button>
        </ArtistHeader>
        <ArtistContent>
          <SectionTitle>Popular</SectionTitle>
          <ArtistTracks
            songs={artistInfo.songs}
            onClickSetPlaylist={this.onClickSetPlaylist}
            onClickPlayTrack={onClickPlayTrack}
            onClickPauseTrack={onClickPauseTrack}
            currentIndex={player.currentPlaylist[player.currentIndex].id}
            isPlaying={isPlaying}
          />
          <SectionTitle>Albums</SectionTitle>
          <ArtistAlbums
            isPlaying={player.isPlaying}
            currentlyPlayingAlbumId={player.currentlyPlayingAlbumId}
            albums={artistInfo.albums}
            onClickSetArtistAlbumSongs={onClickSetArtistAlbumSongs}
            onClickPauseArtistAlbumSongs={onClickPauseArtistAlbumSongs}
          />
        </ArtistContent>
      </>
    );
  };
}

const mapStateToProps = ({ player, music }) => ({ player, music });

const mapDispatchToProps = dispatch => ({
  fetchArtist: artistId => dispatch(fetchArtist(artistId)),
  setArtistSongsPlaylist: (songs, songIndex) =>
    dispatch(setArtistSongsPlaylist(songs, songIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistDetail);
