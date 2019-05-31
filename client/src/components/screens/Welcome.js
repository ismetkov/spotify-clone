import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { facebookLogin, clearAuthErrorMsg } from '../../actions'

import Page from '../Page'
import SignInForm from '../forms/SignInForm'

import { endpoint } from '../../helpers/config'
import PageContent from '../styles/PageContentStyles'
import Headline from '../styles/PageHeadline'
import Button from '../styles/Button'
import Divider from '../styles/Divider'
import ErrorMsg from '../styles/ErrorMsg'
import InfoMsg from '../styles/InfoMsg'

const StyledLink = styled(Link)`
  color: ${props => props.theme.green};
`

class Welcome extends Component {
  componentWillUnmount() {
    const { auth, clearAuthErrorMsg } = this.props

    if (auth.errorMsg || auth.passwordResetSuccessMsg) {
      clearAuthErrorMsg()
    }
  }

  onClickLoginWithFacebook = () => this.props.facebookLogin()

  render() {
    const { auth } = this.props

    return (
      <Page>
        <PageContent>
          <Headline>To continue, log in to Spotify</Headline>
          <a href={`${endpoint}/api/auth/facebook`}>
            <Button color="white" bgColor="blue">
              Sign In With Facebook
            </Button>
          </a>
          <Divider>
            <strong>or</strong>
          </Divider>
          {auth.errorMsg && <ErrorMsg>{auth.errorMsg}</ErrorMsg>}
          {auth.passwordResetSuccessMsg && (
            <InfoMsg>{auth.passwordResetSuccessMsg}</InfoMsg>
          )}
          <SignInForm />
          <Headline>
            <StyledLink to="/forgot">Forgot Password?</StyledLink>
          </Headline>
          <hr />
          <Headline>Don't have an account?</Headline>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </PageContent>
      </Page>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => ({
  facebookLogin: () => dispatch(facebookLogin()),
  clearAuthErrorMsg: () => dispatch(clearAuthErrorMsg()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)
