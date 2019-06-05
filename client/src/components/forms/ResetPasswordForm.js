import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import map from 'lodash/map'
import each from 'lodash/each'

import { resetNewPassword } from '../../actions'

import { resetPasswordFields } from './fieldsData'
import AuthFormField from './formFields/AuthFormField'
import validateEmail from '../../helpers/validateEmail'

import Button from '../styles/Button'

class ResetPasswordForm extends Component {
  onFormSubmit = values => {
    const { resetPasswordToken, resetNewPassword } = this.props

    resetNewPassword({ ...values, resetPasswordToken })
  }

  renderFields = () =>
    map(resetPasswordFields, ({ name, type, placeholder }) => (
      <Field
        key={name}
        type={type}
        name={name}
        component={AuthFormField}
        placeholder={placeholder}
      />
    ))

  render() {
    const { auth } = this.props

    return (
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        {this.renderFields()}
        <Button
          disabled={auth.loading}
          color="white"
          bgColor="green"
          borderColor="green"
        >
          Reset Password
        </Button>
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => ({
  resetNewPassword: payload => dispatch(resetNewPassword(payload)),
})

ResetPasswordForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordForm)

function validate(values) {
  const errors = {}

  errors.email = validateEmail(values.email)

  each(resetPasswordFields, ({ name }) => {
    if (!values[name]) errors[name] = `You must provide ${name} field`
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'resetPasswordForm',
})(ResetPasswordForm)
