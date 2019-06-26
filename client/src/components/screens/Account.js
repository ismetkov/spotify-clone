import React from 'react';
import styled from 'styled-components';

import Page from '../Page';
import AccountDetail from '../../containers/AccountDetail';

const AccountWrapper = styled.div`
  width: 100%;
  background-color: black;
  padding: 60px 20px;
  margin: 20px auto 0;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.7);
`;

function Account() {
  return (
    <Page>
      <AccountWrapper>
        <AccountDetail />
      </AccountWrapper>
    </Page>
  );
}

export default Account;
