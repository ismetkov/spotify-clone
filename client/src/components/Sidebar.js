import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarWrapper = styled.div`
  color: white;
  z-index: 4;
  background-color: ${props => props.theme.black};
  overflow: auto;
  will-change: transform;
  height: 100vh;
  position: fixed;
  min-height: 0;
  top: 0;
  left: 0;
  display: flex;
`;
const NavSite = styled.div`
  flex: 1;
  width: 220px;
  padding-top: 24px;
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: default;

  .session {
    padding-top: 8px;
    padding-left: 4px;
    margin: 0 24px;
    margin-bottom: 10px;
    border-top: 1px solid ${props => props.theme.lightBlack};
  }
`;
const UserPages = styled.div`
  flex: 1;
  margin: 0 24px;
  ul {
    list-style: none;
    padding: 10px 0;
    font-weight: bold;
  }
`;

const links = [
  { id: 1, to: '/search', text: 'Search' },
  { id: 2, to: '/browse', text: 'Home' },
  { id: 3, to: '/your-music', text: 'Your Library' }
];

function Sidebar(props) {
  return (
    <SidebarWrapper>
      <NavSite>
        <UserPages>
          <ul>
            {links.map(link => (
              <li key={link.id}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </UserPages>
        <div className="session">
          <Link to="/account">ismetkov</Link>
          <p onClick={props.logout}>logout</p>
        </div>
      </NavSite>
    </SidebarWrapper>
  );
}

export default Sidebar;
