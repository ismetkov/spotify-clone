import React, { Component } from 'react'
import { connect } from 'react-redux'

import { clearAuthErrorMsg } from '../../actions'

import Page from '../Page'
import RequestResetForm from '../forms/RequestResetForm'

import PageContent from '../styles/PageContentStyles'
import Headline from '../styles/PageHeadline'
import ErrorMsg from '../styles/ErrorMsg'
import InfoMsg from '../styles/InfoMsg'

class Forgot extends Component {
  componentWillUnmount() {
    const { auth, clearAuthErrorMsg } = this.props

    if (auth.errorMsg || auth.passwordResetSuccessMsg) {
      clearAuthErrorMsg()
    }
  }

  render() {
    const { auth } = this.props

    return (
      <Page>
        <PageContent>
          <Headline>Request a Reset Password</Headline>
          {auth.errorMsg && <ErrorMsg>{auth.errorMsg}</ErrorMsg>}
          {auth.passwordResetSuccessMsg && (
            <InfoMsg>{auth.passwordResetSuccessMsg}</InfoMsg>
          )}
          <RequestResetForm />
        </PageContent>
      </Page>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => ({
  clearAuthErrorMsg: () => dispatch(clearAuthErrorMsg()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forgot)
