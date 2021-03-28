import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    font-family: 'Barlow', sans-serif;
    min-height: 100vh;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
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
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;
    
    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1024px;
    }
  }
  .d-flex {
    display: flex;
    align-items: center;

    &.justify-between {
      justify-content: space-between;
    }
  }
  .list-inline {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    > li {
      margin: 0 15px;
    }
  }
  button, a {
    outline: none;

    &:hover {
      opacity: 0.8;
    }
  }
  a {
    color: ${(props) => props.theme.black};
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  input {
    outline: none;
  }
`;

export default GlobalStyle;
