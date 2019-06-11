import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions'

import Page from './Page'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Player from './Player'

import UserPageWrapper from './styles/UserPageWrapper'

class App extends React.Component {
  onClickLogout = () => this.props.logout()

  render() {
    return (
      <Page>
        <UserPageWrapper>
          <Sidebar logout={this.onClickLogout} />
          <MainContent />
          <Player />
        </UserPageWrapper>
      </Page>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(
  null,
  mapDispatchToProps
)(App)
