import styled from 'styled-components'

const Button = styled.button`
  color: ${({ theme, color }) => theme[color] || theme.darkGray};
  background-color: ${({ theme, bgColor }) => theme[bgColor] || theme.white};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  border-radius: 500px;
  padding: 16px 48px 18px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border-width: 0;
  letter-spacing: 2px;
  min-width: 100%;
  text-transform: uppercase;
  white-space: normal;
  cursor: pointer;
  border: 1px solid
    ${({ borderColor, theme }) => theme[borderColor] || theme.gray};
  margin: 10px 0;

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default Button
