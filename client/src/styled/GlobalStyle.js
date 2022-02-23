import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  font-size: 62.5%;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #100c0b;
  position: relative;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;

export default GlobalStyle;
