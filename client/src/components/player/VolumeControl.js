import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import {
  PlayerPlaybackProgress,
  PlayerPlaybackProgressBg,
  PlayerPlaybackProgressBgCharge,
  PlayerPlaybackProgressKnob
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

function VolumeControls({ audioRef }) {
  const [isDragging, setDragging] = useState(false);
  const [volumePercentage, setPercentage] = useState(20);
  const [audioMuted, toggleMuted] = useState(false);
  const volumeRef = useRef(null);

  const getVolumePercentage = e => {
    const rect = volumeRef.current.getBoundingClientRect();
    const result = ((e.pageX - rect.x) * 100) / volumeRef.current.offsetWidth;

    if (result < 0) {
      return 0;
    } else if (result > 100) {
      return 100;
    } else {
      return result;
    }
  };

  const handleToggleMuted = useCallback(() => {
    toggleMuted((audioRef.current.muted = !audioRef.current.muted));
  }, [audioRef]);

  const handleMouseDown = useCallback(e => {
    const percentageTime = getVolumePercentage(e);

    setDragging(true);
    setPercentage(percentageTime);
  }, []);

  const handleMouseMove = useCallback(
    e => {
      if (!isDragging) {
        return;
      }

      const percentageTime = getVolumePercentage(e);

      setPercentage(percentageTime);
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(e => {
    setDragging(false);
  }, []);

  useEffect(() => {
    audioRef.current.volume = volumePercentage / 100;
  }, [audioRef, volumePercentage]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [audioRef, handleMouseMove, handleMouseUp, isDragging]);

  return (
    <VolumeControlsWrapper>
      <VolumeBar>
        <PlayerButton
          title="Enable Repeat"
          color="white"
          onClick={handleToggleMuted}
        >
          <i className="material-icons md-20">
            {audioMuted ? 'volume_off' : 'volume_up'}
          </i>
        </PlayerButton>
        <ProgressBar>
          <PlayerPlaybackProgress ref={volumeRef} onMouseDown={handleMouseDown}>
            <PlayerPlaybackProgressBg>
              <PlayerPlaybackProgressBgCharge
                isDragging={isDragging}
                progress={volumePercentage}
              />
              <PlayerPlaybackProgressKnob
                isDragging={isDragging}
                progress={volumePercentage}
              />
            </PlayerPlaybackProgressBg>
          </PlayerPlaybackProgress>
        </ProgressBar>
      </VolumeBar>
    </VolumeControlsWrapper>
  );
}

export default VolumeControls;
