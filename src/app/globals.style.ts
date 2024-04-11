"use client";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
background-color: #f4f5f9;
  margin: 0;
  padding:0;
`;

export default GlobalStyle;
