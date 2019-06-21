import React from 'react';
import SectionTitle from '../styles/SectionTitle';
import Page from '../Page';
import AlbumList from '../../containers/AlbumList';

function Browse() {
  return (
    <Page>
      <SectionTitle>You Might Also Like</SectionTitle>
      <AlbumList />
      <SectionTitle>Recently played</SectionTitle>
    </Page>
  );
}

export default Browse;
