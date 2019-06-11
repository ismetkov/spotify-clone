import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { clearAuthErrorMsg } from '../../actions'

import Page from '../Page'
import SignUpForm from '../forms/SignUpForm'

import PageContent from '../styles/PageContentStyles'
import Headline from '../styles/PageHeadline'
import ErrorMsg from '../styles/ErrorMsg'

class Signup extends Component {
  componentWillUnmount() {
    const { auth, clearAuthErrorMsg } = this.props

    if (auth.errorMsg) {
      clearAuthErrorMsg()
    }
  }

  render() {
    const { auth } = this.props

    if (auth.authenticated) {
      return <Redirect to="/" />
    }

    return (
      <Page>
        <PageContent>
          <Headline>Sign Up for free.</Headline>
          {auth.errorMsg && <ErrorMsg>{auth.errorMsg}</ErrorMsg>}
          <SignUpForm />
        </PageContent>
      </Page>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => ({
  clearAuthErrorMsg: () => dispatch(clearAuthErrorMsg())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
