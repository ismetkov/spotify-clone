import styled from 'styled-components'

export const PlayerPlaybackProgress = styled.div`
  margin-top: 2px;
  width: 100%;
  height: 12px;
  display: inline-flex;
  background-color: transparent;
  position: relative;
`

export const PlayerPlaybackProgressBg = styled.div`
  background-color: ${props => props.theme.lightBlack};
  border-radius: 2px;
  display: flex;
  height: 4px;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const PlayerPlaybackProgressBgCharge = styled.div.attrs(props => ({
  style: {
    width: `${props.progress}%`
  }
}))`
  background-color: ${props => props.theme.lightWhite};
  border-radius: 2px;
  height: 4px;
`
