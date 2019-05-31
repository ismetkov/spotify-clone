import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions'

class App extends React.Component {
  onClickLogout = () => this.props.logout()

  render() {
    return (
      <div>
        <p>stuff soon...</p>
        <p to="/" onClick={this.onClickLogout}>
          Logout
        </p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
