import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html, body, #__next {
    height: 100%;
  }

  a {
    text-decoration: none;
  }
  
  ${({ theme }) => css`
    body {
      font-family: ${theme.fonts.body};
      background: ${theme.colors.white};
    }
  `}
`

export default GlobalStyles
