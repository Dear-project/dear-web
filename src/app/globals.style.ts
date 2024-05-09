"use client";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
  background: var(--Gray100, #F4F5F9);
  margin: 0;
  padding:0;
`;

export default GlobalStyle;
