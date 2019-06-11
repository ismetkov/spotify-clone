import React, { Component } from 'react'
import styled from 'styled-components'

import NowPlaying from './player/NowPlaying'
import PlayerControls from './player/PlayerControls'
import VolumeControls from './player/VolumeControls'

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
`
const PlayerMain = styled.div`
  height: 90px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class Player extends Component {
  render() {
    return (
      <PlayerWrapper>
        <PlayerMain>
          <NowPlaying />
          <PlayerControls />
          <VolumeControls />
        </PlayerMain>
      </PlayerWrapper>
    )
  }
}

export default Player
