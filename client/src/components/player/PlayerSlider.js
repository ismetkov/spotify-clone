import React, { Component } from 'react';
import styled from 'styled-components';

import formatTime from '../../helpers/formatTime';

import {
  PlayerPlaybackProgress,
  PlayerPlaybackProgressBg,
  PlayerPlaybackProgressBgCharge,
  PlayerPlaybackProgressKnob
} from '../styles/ProgressBar';

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

class PlayerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingTime: 0,
      currentTime: 0,
      percentageTime: 0,
      isDragging: false
    };

    this.playerRef = React.createRef();
  }

  componentDidMount = () => {
    this.getTotalTimeSong();
    this.getCurrentTimeSong();
  };

  componentWillUnmount = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  };

  getTotalTimeSong = () => {
    const { audioRef } = this.props;

    audioRef.current.addEventListener('canplay', () => {
      const remainingTime = formatTime(audioRef.current.duration);

      this.setState({
        remainingTime
      });
    });
  };

  getCurrentTimeSong = () => {
    const { audioRef } = this.props;

    audioRef.current.addEventListener('timeupdate', () => {
      if (audioRef.current.duration) {
        this.setState(prevState => ({
          ...prevState,
          currentTime: formatTime(audioRef.current.currentTime),
          percentageTime:
            (audioRef.current.currentTime / audioRef.current.duration) * 100
        }));
      }
    });
  };

  handleMouseDown = e => {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    const { audioRef } = this.props;
    const percentageTime = this.getPlayerPercentage(e);

    this.setState(
      prevState => ({
        ...prevState,
        isDragging: true,
        percentageTime
      }),
      () => {
        const seconds = audioRef.current.duration * (percentageTime / 100);

        this.setTimeSong(seconds);
      }
    );
  };

  handleMouseMove = e => {
    const { isDragging } = this.state;

    if (!isDragging) {
      return;
    }

    const { audioRef } = this.props;
    const percentageTime = this.getPlayerPercentage(e);

    this.setState(
      prevState => ({ ...prevState, percentageTime }),
      () => {
        const seconds = audioRef.current.duration * (percentageTime / 100);
        this.setTimeSong(seconds);
      }
    );
  };

  handleMouseUp = e => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.setState(prevState => ({ ...prevState, isDragging: false }));
  };

  getPlayerPercentage = e => {
    const rect = this.playerRef.current.getBoundingClientRect();
    const result =
      ((e.pageX - rect.x) * 100) / this.playerRef.current.offsetWidth;

    if (result < 0) {
      return 0;
    } else if (result > 100) {
      return 100;
    } else {
      return result;
    }
  };

  setTimeSong = seconds => {
    const { audioRef } = this.props;

    audioRef.current.currentTime = seconds || 0;
  };

  render = () => {
    const {
      currentTime,
      remainingTime,
      percentageTime,
      isDragging
    } = this.state;

    return (
      <PlayerPlaybackBar>
        <PlayerPlaybackTime>{currentTime || '0:00'}</PlayerPlaybackTime>
        <PlayerPlaybackProgress
          ref={this.playerRef}
          onMouseDown={this.handleMouseDown}
        >
          <PlayerPlaybackProgressBg>
            <PlayerPlaybackProgressBgCharge
              isDragging={isDragging}
              progress={percentageTime}
            />
            <PlayerPlaybackProgressKnob
              isDragging={isDragging}
              progress={percentageTime}
            />
          </PlayerPlaybackProgressBg>
        </PlayerPlaybackProgress>
        <PlayerPlaybackTime>{remainingTime || '0:00'}</PlayerPlaybackTime>
      </PlayerPlaybackBar>
    );
  };
}

export default PlayerSlider;
