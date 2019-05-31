import styled from 'styled-components'

const FormInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  margin: 5px 0;
  background-color: ${({ theme }) => theme.white};
  background-image: none;
  border: 1px solid ${({ error, theme }) => (error ? theme.red : theme.gray)};
  border-radius: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  font-weight: 500;
  font-size: 16px;

  &:focus {
    outline: none;
    border: 1px solid
      ${({ theme, error }) => (error ? theme.error : theme.gray)};
  }
`

export default FormInput
