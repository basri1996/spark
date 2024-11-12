import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    tablet: true;
  }
}
declare module "@mui/material/styles" {
  interface Palette {
    border: {
      primary: string;
    };
  }

  interface PaletteOptions {
    border?: {
      primary: string;
    };
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    border: true;
  }
}
