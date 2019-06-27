import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from '../history';
import SiteLogo from './SiteLogo';
import App from './App';
import Welcome from './screens/Welcome';
import Signup from './screens/Signup';
import Forgot from './screens/Forgot';
import ResetPassword from './screens/ResetPassword';
import FbSuccess from './screens/FbSuccess';
import NotFound from './screens/NotFound';

import 'react-toastify/dist/ReactToastify.css';

function Root({ auth }) {
  return (
    <Router history={history}>
      <ToastContainer />
      {!auth.authenticated && <SiteLogo />}
      <Switch>
        {auth.authenticated ? (
          <Route path="/" component={App} />
        ) : (
          <Route exact path="/" component={Welcome} />
        )}
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/fbsuccess/:token" component={FbSuccess} />
        <Route exact path="/account/reset/:token" component={ResetPassword} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Root);
