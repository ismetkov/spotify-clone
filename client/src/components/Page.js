import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const theme = {
  width: '600px',
  white: '#fff',
  black: 'black',
  blue: '#3b5998',
  green: '#1db954',
  gray: '#d9dadc',
  darkGray: '#616467',
  red: 'red',
  error: 'mistyrose',
  info: 'lemonchiffon',
  lightBlack: '#404040',
  lightWhite: '#a0a0a0',
  dark: '#282828'
}

const PageWrapper = styled.div``

function Page(props) {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>{props.children}</PageWrapper>
    </ThemeProvider>
  )
}

export default Page
