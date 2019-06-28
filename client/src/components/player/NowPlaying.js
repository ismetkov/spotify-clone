import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { endpoint } from '../../helpers/config';

const NowPlayingWrapper = styled.div`
  width: 30%;
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;
const CoverArt = styled.div`
  width: 56px;
  height: 56px;
  background-color: ${props => props.theme.lightBlack};
  position: relative;
`;
const CoverArtImage = styled.div`
  background-image: url(${props => props.img});
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50%;
`;
const TrackInfo = styled.div`
  margin: 0 15px;
  overflow: hidden;
`;
const SongName = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.white};
`;
const ArtistName = styled.span`
  display: block;
  font-weight: 300;
  font-size: 14px;
  color: ${props => props.theme.lightWhite};

  &:hover {
    text-decoration: underline;
  }
`;
const EllipsisOneLine = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 1px;
  margin-right: -1px;
  margin-top: -5px;
`;

function NowPlaying({ currentSong }) {
  return (
    <NowPlayingWrapper>
      <CoverArt>
        <CoverArtImage img={`${endpoint}${currentSong.artwork_path}`} />
      </CoverArt>
      <TrackInfo>
        <EllipsisOneLine>
          <SongName>{currentSong.title}</SongName>
        </EllipsisOneLine>
        <EllipsisOneLine>
          <Link to={`/artist/2`}>
            <ArtistName>
              {currentSong.artist_name || currentSong.name}
            </ArtistName>
          </Link>
        </EllipsisOneLine>
      </TrackInfo>
    </NowPlayingWrapper>
  );
}

export default NowPlaying;
