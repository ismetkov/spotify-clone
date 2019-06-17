import styled from 'styled-components';

export const PlayerPlaybackProgress = styled.div`
  margin-top: 2px;
  width: 100%;
  height: 12px;
  display: inline-flex;
  background-color: transparent;
  position: relative;
`;

export const PlayerPlaybackProgressKnob = styled.div.attrs(props => ({
  style: {
    left: `${props.progress}%`
  }
}))`
  display: ${({ isDragging }) => (isDragging ? 'block' : 'none')};
  width: 18px;
  height: 18px;
  background: ${props => props.theme.white};
  position: absolute;
  top: -7px;
  margin-left: -5px;
  border-radius: 100%;
`;

export const PlayerPlaybackProgressBgCharge = styled.div.attrs(props => ({
  style: {
    width: `${props.progress}%`
  }
}))`
  background-color: ${({ theme, isDragging }) =>
    isDragging ? theme.green : theme.lightWhite};
  border-radius: 2px;
  height: 5px;
`;

export const PlayerPlaybackProgressBg = styled.div`
  background-color: ${props => props.theme.lightBlack};
  border-radius: 2px;
  display: flex;
  height: 5px;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:hover ${PlayerPlaybackProgressKnob} {
    display: block;
  }

  &:hover ${PlayerPlaybackProgressBgCharge} {
    background: ${props => props.theme.green};
  }
`;
