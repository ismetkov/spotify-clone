import React from 'react';
import styled from 'styled-components';

import Page from '../Page';
import AccountDetail from '../../containers/AccountDetail';

const AccountWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.black};
  min-height: 100vh;
  padding: 60px 20px;
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
