import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { requestResetPassword } from '../../actions'

import validateEmail from '../../helpers/validateEmail'
import AuthFormField from './formFields/AuthFormField'

import Button from '../styles/Button'

class RequestResetForm extends Component {
  onFormSubmit = values => this.props.requestResetPassword(values)

  render() {
    const { auth } = this.props

    return (
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field
          name="email"
          component={AuthFormField}
          placeholder="Type Your Email Address"
        />
        <Button
          disabled={auth.loading}
          color="white"
          bgColor="green"
          borderColor="green"
        >
          Send Email
        </Button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  requestResetPassword: payload => dispatch(requestResetPassword(payload)),
})

const mapStateToProps = ({ auth }) => ({ auth })

RequestResetForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestResetForm)

function validate(values) {
  const errors = {}

  errors.email = validateEmail(values.email)

  if (!values.email) {
    errors.email = 'You must provide an email address'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'resetRequestForm',
})(RequestResetForm)
