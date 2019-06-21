import React, { Component } from 'react';
import styled from 'styled-components';

import PlayerSlider from './PlayerSlider';

const PlayerControlsWrapper = styled.div`
  width: 40%;
  max-width: 722px;
`;
const PlayerControlsActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PlayerBtns = styled.div`
  display: flex;
  width: 195px;
  justify-content: space-between;
  align-items: center;

  button {
    outline: none;
  }

  button i:hover {
    color: ${props => props.theme.white};
  }
`;

const PlayerButton = styled.button`
  color: ${props => props.color || props.theme.lightWhite};
  background-color: transparent;
  border: none;
  vertical-align: middle;

  &:disabled {
    color: ${props => props.theme.lightBlack};
  }
`;

class PlayerControls extends Component {
  constructor(props) {
    super(props);

    this.progressRef = React.createRef();
  }

  render = () => {
    const {
      audioRef,
      isPlaying,
      repeatMode,
      shuffleMode,
      currentIndex,
      onClickPlaySong,
      onClickPauseSong,
      onClickNextSong,
      onClickPrevSong,
      onClickToggleRepeatMode,
      onClickToggleShuffle
    } = this.props;

    return (
      <PlayerControlsWrapper>
        <PlayerControlsActions>
          <PlayerBtns>
            <PlayerButton
              title="Shuffle"
              color={shuffleMode ? 'green' : null}
              onClick={onClickToggleShuffle}
            >
              <i className="material-icons md-20">shuffle</i>
            </PlayerButton>
            <PlayerButton
              disabled={currentIndex === 0}
              title="Previous"
              onClick={onClickPrevSong}
            >
              <i className="material-icons md-20">skip_previous</i>
            </PlayerButton>
            <PlayerButton
              title={isPlaying ? 'Pause' : 'Play'}
              onClick={isPlaying ? onClickPauseSong : onClickPlaySong}
            >
              <i className="material-icons md-48">
                {isPlaying ? 'pause_circle_outline' : 'play_circle_outline'}
              </i>
            </PlayerButton>
            <PlayerButton title="Next" onClick={onClickNextSong}>
              <i className="material-icons md-20">skip_next</i>
            </PlayerButton>
            <PlayerButton
              color={repeatMode ? 'green' : null}
              title="Enable Repeat"
              onClick={onClickToggleRepeatMode}
            >
              <i className="material-icons md-20">repeat</i>
            </PlayerButton>
          </PlayerBtns>
          <PlayerSlider audioRef={audioRef} />
        </PlayerControlsActions>
      </PlayerControlsWrapper>
    );
  };
}

export default PlayerControls;
