"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Pretendard-Medium";
    src: url("../assets/font/Pretendard/Pretendard-Medium.otf");
  }
    ${reset}
    * {
      margin: 0;
      padding: 0;
      color:black;
      font-family: "Pretendard-Medium" !important;
    }
`;
export default GlobalStyle;
