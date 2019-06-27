import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { DEFAULT_AVATAR } from '../helpers/constants';

import { logout } from '../actions';

const AccountAvatarWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto;
  background: ${props => props.theme.black};
  overflow: hidden;
`;
const AccountAvatar = styled.img`
  width: 100%;
`;

const AccountName = styled.h1`
  text-align: center;
  font-size: 4rem;
`;

const Button = styled.button`
  width: 150px;
  color: ${props => props.theme.white};
  background: transparent;
  display: block;
  border: 1px solid ${props => props.theme.white};
  border-radius: 500px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 5px 10px;
  cursor: pointer;
  margin: 20px auto 0;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    transform: scale(1);
    color: ${props => props.theme.darkGray};
    cursor: not-allowed;
    border-color: ${props => props.theme.darkGray};
  }
`;

class AccountDetail extends Component {
  onClickLogout = () => {
    const { logout } = this.props;

    logout();
  };

  render() {
    const { auth } = this.props;

    return (
      <>
        <AccountAvatarWrapper>
          <AccountAvatar
            src={
              (auth.currentUser && auth.currentUser.avatar) || DEFAULT_AVATAR
            }
          />
        </AccountAvatarWrapper>
        <AccountName>
          {auth.currentuser && auth.currentUser.username}
        </AccountName>
        <Button disabled>View Account</Button>
        <Button onClick={this.onClickLogout}>Logout</Button>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetail);
