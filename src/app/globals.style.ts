"use client";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
html{background: var(--Gray100, #F4F5F9);
  
}
body{
  margin: 0;
  padding:0;
  
}
  
`;

export default GlobalStyle;
