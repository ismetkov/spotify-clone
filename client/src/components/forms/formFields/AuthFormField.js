import React from 'react'
import styled from 'styled-components'

import FormInput from '../../styles/FormInput'

const FormInputError = styled.p`
  font-size: 14px;
  text-align: left;
  color: red;
  margin-top: 0;
`

export default ({ type, placeholder, input, meta: { error, touched } }) => (
  <>
    <FormInput
      type={type || null}
      placeholder={placeholder}
      {...input}
      error={touched && error}
    />
    <FormInputError>{touched && error}</FormInputError>
  </>
)
