import React from 'react'
import styled from 'styled-components'

const NowPlayingWrapper = styled.div`
  width: 30%;
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`
const CoverArt = styled.div`
  width: 56px;
  height: 56px;
  background-color: ${props => props.theme.lightBlack};
  position: relative;
`
const CoverArtImage = styled.div`
  background-image: url(${props => props.img});
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50%;
`
const TrackInfo = styled.div`
  margin: 0 15px;
  overflow: hidden;
`
const SongName = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.white};
`
const ArtistName = styled.a`
  display: block;
  font-weight: 300;
  font-size: 12px;
  color: ${props => props.theme.lightWhite}!important;
`
const EllipsisOneLine = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 1px;
  margin-right: -1px;
  margin-top: -5px;
`

function NowPlaying() {
  return (
    <NowPlayingWrapper>
      <CoverArt>
        <CoverArtImage
          img={
            'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'
          }
        />
      </CoverArt>
      <TrackInfo>
        <EllipsisOneLine>
          <SongName>High On Life</SongName>
        </EllipsisOneLine>
        <EllipsisOneLine>
          <ArtistName>Martin Garrix, Kygo</ArtistName>
        </EllipsisOneLine>
      </TrackInfo>
    </NowPlayingWrapper>
  )
}

export default NowPlaying
