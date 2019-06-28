import React from 'react';
import styled from 'styled-components';

import Page from '../Page';
import ArtistDetail from '../../containers/ArtistDetail';

const ArtistWrapper = styled.section`
  position: relative;
`;

function Artist() {
  return (
    <Page>
      <ArtistWrapper>
        <ArtistDetail />
      </ArtistWrapper>
    </Page>
  );
}

export default Artist;
