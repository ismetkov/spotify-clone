import React from 'react';
import styled from 'styled-components';

import {
  PlayerPlaybackProgress,
  PlayerPlaybackProgressBg,
  PlayerPlaybackProgressBgCharge
} from '../styles/ProgressBar';

const VolumeControlsWrapper = styled.div`
  width: 30%;
  min-width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const VolumeBar = styled.div`
  display: flex;
  width: 136px;
  justify-content: flex-end;
  align-items: center;
`;
const PlayerButton = styled.button`
  color: ${props => props.theme.lightWhite};
  background-color: transparent;
  border: none;
  vertical-align: middle;
`;

const ProgressBar = styled.div`
  margin-top: -2px;
  width: 100%;
`;

function VolumeControls() {
  return (
    <VolumeControlsWrapper>
      <VolumeBar>
        <PlayerButton title="Enable Repeat" color="white">
          <i className="material-icons md-20">volume_up</i>
        </PlayerButton>
        <ProgressBar>
          <PlayerPlaybackProgress>
            <PlayerPlaybackProgressBg>
              <PlayerPlaybackProgressBgCharge progress={'7'} />
            </PlayerPlaybackProgressBg>
          </PlayerPlaybackProgress>
        </ProgressBar>
      </VolumeBar>
    </VolumeControlsWrapper>
  );
}

export default VolumeControls;
