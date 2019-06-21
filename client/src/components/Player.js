import React, { Component } from 'react';
import styled from 'styled-components';

import NowPlaying from './player/NowPlaying';
import PlayerControls from './player/PlayerControls';
import VolumeControl from './player/VolumeControl';

const PlayerWrapper = styled.div`
  user-select: none;
  z-index: 10;
  width: 100%;
  position: fixed;
  bottom: 0;
  min-width: 620px;
  background-color: ${props => props.theme.dark};
  color: ${props => props.theme.white};

  a:hover {
    text-decoration: underline;
  }
`;
const PlayerMain = styled.div`
  height: 90px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class Player extends Component {
  constructor(props) {
    super(props);

    this.playerRef = React.createRef();
  }

  componentDidMount = () => {
    this.prevetDefaultEvents();
  };

  prevetDefaultEvents = () => {
    const events = ['mousedown', 'touchstart', 'mousemove', 'touchmove'];

    events.forEach(e =>
      this.playerRef.current.addEventListener(e, ev => ev.preventDefault())
    );
  };

  render = () => {
    const {
      audioRef,
      currentIndex,
      isPlaying,
      repeatMode,
      shuffleMode,
      currentSong,
      onClickPlaySong,
      onClickPauseSong,
      onClickNextSong,
      onClickPrevSong,
      onClickToggleRepeatMode,
      onClickToggleShuffle
    } = this.props;

    return (
      <PlayerWrapper ref={this.playerRef}>
        <PlayerMain>
          <NowPlaying currentSong={currentSong} />
          <PlayerControls
            audioRef={audioRef}
            currentIndex={currentIndex}
            isPlaying={isPlaying}
            repeatMode={repeatMode}
            shuffleMode={shuffleMode}
            onClickPlaySong={onClickPlaySong}
            onClickPauseSong={onClickPauseSong}
            onClickNextSong={onClickNextSong}
            onClickPrevSong={onClickPrevSong}
            onClickToggleRepeatMode={onClickToggleRepeatMode}
            onClickToggleShuffle={onClickToggleShuffle}
          />
          <VolumeControl audioRef={audioRef} />
        </PlayerMain>
      </PlayerWrapper>
    );
  };
}

export default Player;
