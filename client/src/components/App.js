import React from 'react';
import { connect } from 'react-redux';

import {
  logout,
  getPlaylist,
  togglePlaying,
  toggleRepeatMode,
  incrementCurrentIndex,
  decrementCurrentIndex,
  updateSongPlays,
  toggleShuffleMode,
  shuffleIndexPlaylist
} from '../actions';

import { getCurrentSong } from '../selectors/playerSelector';
import { endpoint } from '../helpers/config';

import Page from './Page';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Player from './Player';

import UserPageWrapper from './styles/UserPageWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.audioRef = React.createRef();
  }

  componentDidMount = () => {
    this.setPlaylist();
    this.onEndCallNextSong();
    this.setupBeforeUnloadListener();
  };

  setupBeforeUnloadListener = () => {
    window.addEventListener('beforeunload', () => {
      const { player } = this.props;

      localStorage.setItem(
        'player',
        JSON.stringify({ ...player, isPlaying: false })
      );
    });
  };

  onClickLogout = () => {
    const { logout } = this.props;

    logout();
  };

  setPlaylist = () => {
    const { getPlaylist } = this.props;

    getPlaylist();
  };

  onClickPlaySong = () => {
    const { togglePlaying, updateSongPlays, player } = this.props;

    if (player.isPlaying) {
      togglePlaying();
    }

    this.audioRef.current.autoplay = true;

    if (this.audioRef.current.currentTime === 0) {
      updateSongPlays(this.props.currentSong.id);
    }

    this.audioRef.current.play();
    togglePlaying();
  };

  onClickPauseSong = () => {
    const { togglePlaying } = this.props;

    this.audioRef.current.pause();
    togglePlaying();
  };

  onClickNextSong = () => {
    const {
      incrementCurrentIndex,
      togglePlaying,
      player,
      shuffleIndexPlaylist
    } = this.props;

    if (player.shuffleMode) {
      shuffleIndexPlaylist();
      this.audioRef.current.autoplay = true;
      this.onClickPlaySong();

      return;
    }

    if (player.repeatMode) {
      this.setTimeSong(0);
      this.onClickPlaySong();

      return;
    }

    this.audioRef.current.autoplay = true;
    incrementCurrentIndex();

    if (!player.isPlaying) {
      togglePlaying();
    }
  };

  onClickPrevSong = () => {
    const { player } = this.props;

    if (this.audioRef.current.currentTime >= 3 || player.currentIndex === 0) {
      this.setTimeSong(0);

      return;
    }

    this.props.decrementCurrentIndex();
  };

  setTimeSong = seconds => (this.audioRef.current.currentTime = seconds);

  onEndCallNextSong = () => {
    const { togglePlaying } = this.props;

    this.audioRef.current.addEventListener('ended', () => {
      togglePlaying();
      this.onClickNextSong();
    });
  };

  onClickToggleShuffle = () => {
    this.props.toggleShuffleMode();
  };

  render() {
    const { currentSong, player, toggleRepeatMode } = this.props;

    return (
      <Page>
        <UserPageWrapper>
          <Sidebar logout={this.onClickLogout} />
          <MainContent />
          <audio ref={this.audioRef} src={endpoint + currentSong.path} />
          <Player
            audioRef={this.audioRef}
            currentSong={currentSong}
            isPlaying={player.isPlaying}
            currentIndex={player.currentIndex}
            repeatMode={player.repeatMode}
            shuffleMode={player.shuffleMode}
            onClickPlaySong={this.onClickPlaySong}
            onClickPauseSong={this.onClickPauseSong}
            onClickNextSong={this.onClickNextSong}
            onClickPrevSong={this.onClickPrevSong}
            onClickToggleRepeatMode={toggleRepeatMode}
            onClickToggleShuffle={this.onClickToggleShuffle}
          />
        </UserPageWrapper>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getPlaylist: () => dispatch(getPlaylist()),
  togglePlaying: () => dispatch(togglePlaying()),
  toggleRepeatMode: () => dispatch(toggleRepeatMode()),
  incrementCurrentIndex: () => dispatch(incrementCurrentIndex()),
  decrementCurrentIndex: () => dispatch(decrementCurrentIndex()),
  updateSongPlays: songId => dispatch(updateSongPlays(songId)),
  toggleShuffleMode: () => dispatch(toggleShuffleMode()),
  shuffleIndexPlaylist: () => dispatch(shuffleIndexPlaylist())
});

const mapStateToProps = state => ({
  player: state.player,
  currentSong: getCurrentSong(state.player)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
