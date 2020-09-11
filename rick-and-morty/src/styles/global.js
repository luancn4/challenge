import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background-color: #D8BCB5;
    height: 100%;
    width: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font: 21px 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
