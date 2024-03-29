import styled from 'styled-components'

const ErrorMsg = styled.p`
  padding: 15px 0;
  background: ${props => props.theme.error};
  font-weight: bold;
  text-align: center;
`

export default ErrorMsg
