import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      gray300: string;
      gray200: string;
      gray100: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;

      white: string;
      primary900: string;
      primary800: string;
      primary500: string;
      primary050: string;
      lightRed: string;
      lightBlue: string;
      new: string;
      black: string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
  }
}
