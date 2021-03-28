import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    font-family: 'Barlow', sans-serif;
    min-height: 100vh;
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    direction: ltr;
    font-feature-settings: 'kern';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-scroll-behavior: smooth;
    -moz-scroll-behavior: smooth;
    -ms-scroll-behavior: smooth;
    scroll-behavior: smooth;
    color: ${(props) => props.theme.black};
  }
  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  button, a {
    outline: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
