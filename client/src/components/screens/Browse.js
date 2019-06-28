import React from 'react';
import styled from 'styled-components';

import Page from '../Page';
import AlbumList from '../../containers/AlbumList';

import SectionTitle from '../styles/SectionTitle';

const BrowseWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0px 80px;
`;

function Browse() {
  return (
    <Page>
      <BrowseWrapper>
        <SectionTitle>You Might Also Like</SectionTitle>
        <AlbumList />
        <SectionTitle>Recently played</SectionTitle>
      </BrowseWrapper>
    </Page>
  );
}

export default Browse;
