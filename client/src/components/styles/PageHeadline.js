import styled from 'styled-components'

const PageHeadline = styled.p`
  color: ${({ green, theme }) => (green ? theme.green : theme.black)};
  font-weight: bolder;
  font-size: 1.7rem;
  text-align: center;
`

export default PageHeadline
