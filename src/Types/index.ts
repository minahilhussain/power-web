import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    sm: true;
    screen_580: true;
    screen_654: true;
    md: true;
    xmd: true;
    lmd: true;
    lg: true;
    xlg: true;
    xl: true;
    xsm: true;
    ssm: true;
    xxl: true;
    "2xl": true;
    screen_567: true;
    screen_1380: true;
  }

  interface TypographyVariants {
    displayXL: CSSProperties;
    displayL: CSSProperties;
    bodyM: CSSProperties;
    bodyS: CSSProperties;
    bodyL: CSSProperties;
  }

  interface TypographyVariantsOptions {
    displayXL?: CSSProperties;
    displayL?: CSSProperties;
    bodyM?: CSSProperties;
    bodyS?: CSSProperties;
    bodyL?: CSSProperties;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    trustedSection: true;
    trustedLogosContainer: true;
    trustedLogo: true;
  }
}

declare module "@mui/material/Link" {
  interface LinkPropsVariantOverrides {
    primary: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    primary: true;
    displayXL: true;
    displayL: true;
    bodyM: true;
    bodyS: true;
    bodyL: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}
