"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Medium";
    src: url("/Pretendard-Medium.otf") format("opentype");
  }
  ${reset}
  * {
    margin: 0;
    padding: 0;
    border: none;
    font-family: "Pretendard-Medium" !important;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
