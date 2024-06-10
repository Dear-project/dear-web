"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
${reset}
@import url("https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&display=swap");
*{
    margin: 0;
    padding: 0;
    border: none;
}
`;

export default globalStyle;
