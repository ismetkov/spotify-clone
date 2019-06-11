import React, { Component } from 'react'
import styled from 'styled-components'

import {
  PlayerPlaybackProgress,
  PlayerPlaybackProgressBg,
  PlayerPlaybackProgressBgCharge
} from '../styles/ProgressBar'

const PlayerControlsWrapper = styled.div`
  width: 40%;
  max-width: 722px;
`
const PlayerControlsActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
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
`

const PlayerButton = styled.button`
  color: ${props => props.theme.lightWhite};
  background-color: transparent;
  border: none;
  vertical-align: middle;
`
const PlayerPlaybackBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const PlayerPlaybackTime = styled.div`
  font-size: 11px;
  line-height: 16px;
  min-width: 40px;
  text-align: center;
`

class PlayerControls extends Component {
  render() {
    return (
      <PlayerControlsWrapper>
        <PlayerControlsActions>
          <PlayerBtns>
            <PlayerButton title="Shuffle">
              <i className="material-icons md-20">shuffle</i>
            </PlayerButton>
            <PlayerButton title="Previous">
              <i className="material-icons md-20">skip_previous</i>
            </PlayerButton>
            <PlayerButton title="Pause">
              <i className="material-icons md-48">play_circle_outline</i>
            </PlayerButton>
            <PlayerButton title="Next">
              <i className="material-icons md-20">skip_next</i>
            </PlayerButton>
            <PlayerButton title="Enable Repeat">
              <i className="material-icons md-20">repeat</i>
            </PlayerButton>
          </PlayerBtns>
          <PlayerPlaybackBar>
            <PlayerPlaybackTime>0:00</PlayerPlaybackTime>
            <PlayerPlaybackProgress>
              <PlayerPlaybackProgressBg>
                <PlayerPlaybackProgressBgCharge progress={'7'} />
              </PlayerPlaybackProgressBg>
            </PlayerPlaybackProgress>
            <PlayerPlaybackTime>0:00</PlayerPlaybackTime>
          </PlayerPlaybackBar>
        </PlayerControlsActions>
      </PlayerControlsWrapper>
    )
  }
}

export default PlayerControls
