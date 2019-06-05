import React, { Component } from 'react'
import { connect } from 'react-redux'

import Page from '../Page'
import ResetPasswordForm from '../forms/ResetPasswordForm'

import PageContent from '../styles/PageContentStyles'
import Headline from '../styles/PageHeadline'

class ResetPassword extends Component {
  render() {
    return (
      <Page>
        <PageContent>
          <Headline>Type Your New Password.</Headline>
          <ResetPasswordForm
            resetPasswordToken={this.props.match.params.token}
          />
        </PageContent>
      </Page>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(ResetPassword)
