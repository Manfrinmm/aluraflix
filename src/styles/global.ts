import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #2A7AE4;
    --black: #000000;
    --blackLighter: #9E9E9E;
    --grayLight: #F5F5F5;
    --grayMedium: #e5e5e5;
    --white: #FFFFFF;
    --frontEnd: #6BD1FF;
    --backEnd: #00C86F;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyle;