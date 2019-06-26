import React from 'react';
import { connect } from 'react-redux';

import {
  getPlaylist,
  togglePlaying,
  toggleRepeatMode,
  incrementCurrentIndex,
  decrementCurrentIndex,
  updateSongPlays,
  toggleShuffleMode,
  shuffleIndexPlaylist,
  setPlayingState
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

  setPlaylist = () => {
    const { getPlaylist } = this.props;

    getPlaylist();
  };

  onClickPlaySong = () => {
    const audioRef = this.audioRef.current;
    const { togglePlaying, updateSongPlays, player, currentSong } = this.props;

    if (player.isPlaying) {
      togglePlaying();
    }

    audioRef.autoplay = true;

    if (audioRef.currentTime === 0) {
      updateSongPlays(currentSong.id);
    }

    audioRef.play();
    togglePlaying();
  };

  onClickPauseSong = () => {
    const audioRef = this.audioRef.current;
    const { togglePlaying } = this.props;

    audioRef.pause();
    togglePlaying();
  };

  onClickNextSong = () => {
    const audioRef = this.audioRef.current;
    const {
      incrementCurrentIndex,
      togglePlaying,
      player,
      shuffleIndexPlaylist
    } = this.props;

    if (player.shuffleMode) {
      shuffleIndexPlaylist();
      audioRef.autoplay = true;
      this.onClickPlaySong();

      return;
    }

    if (player.repeatMode) {
      this.setTimeSong(0);
      this.onClickPlaySong();

      return;
    }

    audioRef.autoplay = true;
    incrementCurrentIndex();

    if (!player.isPlaying) {
      togglePlaying();
    }
  };

  onClickPrevSong = () => {
    const audioRef = this.audioRef.current;
    const { player, decrementCurrentIndex, togglePlaying } = this.props;

    if (audioRef.currentTime >= 3 || player.currentIndex === 0) {
      this.setTimeSong(0);

      return;
    }

    decrementCurrentIndex();

    if (!player.isPlaying) {
      togglePlaying();
    }
  };

  onClickPlayTrack = () => {
    const audioRef = this.audioRef.current;
    const { updateSongPlays, currentSong, setPlayingState } = this.props;

    setPlayingState(true);
    audioRef.autoplay = true;

    if (audioRef.currentTime === 0) {
      updateSongPlays(currentSong.id);
    }

    audioRef.play();
  };

  onClickPauseTrack = () => {
    const audioRef = this.audioRef.current;
    const { setPlayingState } = this.props;

    setPlayingState(false);
    audioRef.pause();
  };

  setTimeSong = seconds => (this.audioRef.current.currentTime = seconds);

  onEndCallNextSong = () => {
    const audioRef = this.audioRef.current;
    const { togglePlaying } = this.props;

    audioRef.addEventListener('ended', () => {
      togglePlaying();
      this.onClickNextSong();
    });
  };

  onClickToggleShuffle = () => {
    const { toggleShuffleMode } = this.props;

    toggleShuffleMode();
  };

  render() {
    const { currentSong, player, toggleRepeatMode } = this.props;

    return (
      <Page>
        <UserPageWrapper>
          <Sidebar />
          <MainContent
            audioRef={this.audioRef}
            onClickPlayTrack={this.onClickPlayTrack}
            onClickPauseTrack={this.onClickPauseTrack}
            onClickPlaySong={this.onClickPlaySong}
            onClickPauseSong={this.onClickPauseSong}
          />
          <audio ref={this.audioRef} src={`${endpoint}${currentSong.path}`} />
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
  getPlaylist: () => dispatch(getPlaylist()),
  togglePlaying: () => dispatch(togglePlaying()),
  toggleRepeatMode: () => dispatch(toggleRepeatMode()),
  incrementCurrentIndex: () => dispatch(incrementCurrentIndex()),
  decrementCurrentIndex: () => dispatch(decrementCurrentIndex()),
  setPlayingState: isPlaying => dispatch(setPlayingState(isPlaying)),
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
