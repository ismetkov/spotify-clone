import React, { Component } from 'react';
import styled from 'styled-components';

import ArtistTracks from '../components/artist/ArtistTracks';
import ArtistAlbums from '../components/artist/ArtistAlbums';

import Button from '../components/styles/Button';
import SectionTitle from '../components/styles/SectionTitle';

const ArtistHeader = styled.header`
  height: 500px;
  padding-left: 260px;
  margin-left: -260px;
  text-align: center;
  position: relative;
  padding-top: 120px;
  align-items: center;
  background-image: url('https://www.billboard.com/files/styles/1296x857_gallery/public/media/Kygo-press-photo-03-by-Johannes-Lovund-2017-billboard-1548.jpg');
  background-size: cover;
  background-position: center;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: inset -90px -111px 168px 0px #000;
  }
`;

const ArtistListenersCount = styled.span`
  letter-spacing: 0.5rem;
`;

const ArtistName = styled.h1`
  display: block;
  font-size: 7rem;
  color: white;
  margin-bottom: 0;
  z-index: 3;
  letter-spacing: 0.3rem;
`;

const ArtistContent = styled.div`
  background-color: black;
  min-height: 100vh;
  padding-left: 80px;
  padding-right: 80px;
`;

class ArtistDetail extends Component {
  render() {
    return (
      <>
        <ArtistHeader>
          <ArtistListenersCount>273,591 MONTHLY LISTENERS</ArtistListenersCount>
          <ArtistName>Kyog, Lot</ArtistName>
          <Button half color="white" bgColor="green" borderColor="green">
            PLAY
          </Button>
        </ArtistHeader>
        <ArtistContent>
          <SectionTitle>Popular</SectionTitle>
          <ArtistTracks />
          <SectionTitle>Albums</SectionTitle>
          <ArtistAlbums />
        </ArtistContent>
      </>
    );
  }
}

export default ArtistDetail;
