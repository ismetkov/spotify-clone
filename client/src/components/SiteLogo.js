import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppLogo = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 40px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

function SiteLogo() {
  return (
    <AppLogo>
      <Link to="/">Spotify</Link>
    </AppLogo>
  );
}

export default SiteLogo;
