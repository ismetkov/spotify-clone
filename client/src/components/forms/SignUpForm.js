import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import map from 'lodash/map'
import each from 'lodash/each'

import { signup } from '../../actions'

import { signUpFields } from './fieldsData'
import AuthFormField from './formFields/AuthFormField'
import validateEmail from '../../helpers/validateEmail'

import Button from '../styles/Button'

class SignUpForm extends Component {
  onFormSubmit = values => this.props.signup(values)

  renderFields = () =>
    map(signUpFields, ({ name, type, placeholder }) => (
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
          Sign Up
        </Button>
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => ({
  signup: payload => dispatch(signup(payload)),
})

SignUpForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm)

function validate(values) {
  const errors = {}

  errors.email = validateEmail(values.email)

  each(signUpFields, ({ name }) => {
    if (!values[name]) errors[name] = `You must provide ${name} field`
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'signupForm',
})(SignUpForm)