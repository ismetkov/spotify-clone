import React, { Component } from 'react';
import styled from 'styled-components';

import formatTime from '../../helpers/formatTime';

import {
  PlayerPlaybackProgress,
  PlayerPlaybackProgressBg,
  PlayerPlaybackProgressBgCharge
} from '../styles/ProgressBar';

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
const PlayerPlaybackBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PlayerPlaybackTime = styled.div`
  font-size: 12px;
  line-height: 16px;
  min-width: 40px;
  text-align: center;
`;

class PlayerControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progressBar: {
        mouseDown: false
      }
    };

    this.progressRef = React.createRef();
  }

  componentDidMount = () => {
    this.getTotalTimeSong();
    this.getCurrentTimeSong();
    this.setMouseDownDefault();
  };

  setTimeSong = seconds => {
    const { audioRef } = this.props;

    audioRef.current.currentTime = seconds;
  };

  getTotalTimeSong = () => {
    const { audioRef } = this.props;

    audioRef.current.addEventListener('canplay', () => {
      const remaining = formatTime(audioRef.current.duration);

      this.setState(prevState => ({
        progressBar: {
          ...prevState.progressBar,
          remaining
        }
      }));
    });
  };

  getCurrentTimeSong = () => {
    const { audioRef } = this.props;

    audioRef.current.addEventListener('timeupdate', () => {
      if (audioRef.current.duration) {
        this.setState(prevState => ({
          progressBar: {
            ...prevState.progressBar,
            current: formatTime(audioRef.current.currentTime),
            percentage:
              (audioRef.current.currentTime / audioRef.current.duration) * 100
          }
        }));
      }
    });
  };

  getPlayerPercentage = e =>
    (e.nativeEvent.offsetX / this.progressRef.current.offsetWidth) * 100;

  onClickChangeProgressBar = e => {
    const { audioRef } = this.props;
    const percentage = this.getPlayerPercentage(e);
    const seconds = audioRef.current.duration * (percentage / 100);

    this.setTimeSong(seconds);
  };

  onMouseMoveChangeProgressBar = e => {
    const { audioRef } = this.props;
    const { progressBar } = this.state;

    if (progressBar.mouseDown) {
      const percentage = this.getPlayerPercentage(e);
      const seconds = audioRef.current.duration * (percentage / 100);

      this.setTimeSong(seconds);
    }
  };

  toggleMouseDownProgressBar = () =>
    this.setState(prevState => ({
      progressBar: {
        ...prevState.progressBar,
        mouseDown: !prevState.progressBar.mouseDown
      }
    }));

  setMouseDownDefault = () =>
    document.addEventListener('mouseup', () =>
      this.setState(prevState => ({
        progressBar: { ...prevState.progressBar, mouseDown: false }
      }))
    );

  render = () => {
    const {
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
    const { progressBar } = this.state;

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
          <PlayerPlaybackBar>
            <PlayerPlaybackTime>
              {progressBar.current || '0:00'}
            </PlayerPlaybackTime>
            <PlayerPlaybackProgress
              ref={this.progressRef}
              onClick={this.onClickChangeProgressBar}
              onMouseMove={this.onMouseMoveChangeProgressBar}
              onMouseDown={this.toggleMouseDownProgressBar}
              onMouseUp={this.toggleMouseDownProgressBar}
            >
              <PlayerPlaybackProgressBg>
                <PlayerPlaybackProgressBgCharge
                  progress={progressBar.percentage}
                />
              </PlayerPlaybackProgressBg>
            </PlayerPlaybackProgress>
            <PlayerPlaybackTime>
              {progressBar.remaining || '0:00'}
            </PlayerPlaybackTime>
          </PlayerPlaybackBar>
        </PlayerControlsActions>
      </PlayerControlsWrapper>
    );
  };
}

export default PlayerControls;
