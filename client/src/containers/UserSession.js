import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { DEFAULT_AVATAR } from '../helpers/constants';

const UserSessionWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  padding-bottom: 20px;
  padding-top: 15px;
  margin: 0px 24px;
  border-top: 1px solid ${props => props.theme.lightBlack};
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background: ${props => props.theme.black};
  border-radius: 50%;
`;

class UserSession extends Component {
  render() {
    const { auth } = this.props;

    return (
      <UserSessionWrapper>
        <UserAvatar
          src={(auth.currentUser && auth.currentUser.avatar) || DEFAULT_AVATAR}
        />
        <span>{auth.currentUser && auth.currentUser.username}</span>
      </UserSessionWrapper>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(UserSession);
