import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import map from 'lodash/map';
import each from 'lodash/each';

import { signin } from '../../actions';

import { signInFields } from './fieldsData';
import AuthFormField from './formFields/AuthFormField';
import validateEmail from '../../helpers/validateEmail';

import Button from '../styles/Button';

class SignInForm extends Component {
  onFormSubmit = values => this.props.signin(values);

  renderFields = () =>
    map(signInFields, ({ name, type, placeholder }) => (
      <Field
        key={name}
        type={type}
        name={name}
        component={AuthFormField}
        placeholder={placeholder}
      />
    ));

  render() {
    const { auth } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        {this.renderFields()}
        <Button bold color="white" bgColor="green" disabled={auth.loading}>
          Sign In
        </Button>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => ({
  signin: payload => dispatch(signin(payload))
});

SignInForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);

function validate(values) {
  const errors = {};

  errors.email = validateEmail(values.email);

  each(signInFields, ({ name }) => {
    if (!values[name]) errors[name] = `You must provide ${name} field`;
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'signinForm'
})(SignInForm);
