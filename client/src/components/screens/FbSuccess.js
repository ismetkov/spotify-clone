import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { facebookLogin } from '../../actions';

class FbSuccess extends Component {
  componentDidMount() {
    this.props.facebookLogin(this.props.match.params.token);
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => ({
  facebookLogin: payload => dispatch(facebookLogin(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(FbSuccess);
