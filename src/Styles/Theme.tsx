import mediaQuery from "css-mediaquery";
import { Poppins } from "next/font/google";
import { createTheme, ThemeOptions, TypographyVariantsOptions } from "@mui/material/styles";
import colors from "./Colors";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

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
  interface TypographyVariants extends CustomTypographyVariants {}
  interface TypographyVariantsOptions extends Partial<CustomTypographyVariants> {}
}

const customBreakpoints = {
  values: {
    xs: 0,
    sm: 507,
    md: 768,
    xsm: 368,
    ssm: 450,
    xmd: 930,
    lmd: 820,
    lg: 1024,
    xl: 1250,
    xxl: 1300,
    xlg: 1200,
    "2xl": 1450,
    screen_580: 580,
    screen_567: 567,
    screen_654: 654,
    screen_1380: 1380,
  },
};

interface CustomTypographyVariants {
  displayXL: React.CSSProperties;
  displayL: React.CSSProperties;
  bodyM: React.CSSProperties;
  bodyS: React.CSSProperties;
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    displayXL: true;
    displayL: true;
    bodyM: true;
    bodyS: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    primary: true;
  }
}

declare module "@mui/material/Link" {
  interface LinkPropsVariantOverrides {
    primary: true;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

const typographyOptions: TypographyVariantsOptions = {
  fontFamily: poppins.style.fontFamily,
  displayXL: {
    fontFamily: poppins.style.fontFamily,
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "100%",
    color: colors.Black,
  },
  displayL: {
    fontWeight: 700,
    fontSize: "54px",
    lineHeight: "80px",
    textAlign: "center" as const,
  },
  bodyM: {
    fontWeight: 400,
    color: colors.Black,
    maxWidth: "555px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "36px",
  },
  bodyS: {
    fontWeight: 400,
    color: colors.Black,
    fontSize: "16px",
    lineHeight: "100%",
  },
};

const themeOptions: ThemeOptions = {
  typography: typographyOptions,
  palette: {
    background: {
      default: colors.White,
    },
  },
  breakpoints: customBreakpoints,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "12px",
            paddingBottom: "12px",
            borderRadius: "12px",
            width: "181px",
            height: "47px",
            fontSize: "1em",
            backgroundColor: colors.Primary,
            color: "#fff",
            textTransform: "none",
            "&:hover": {
              backgroundColor: colors.PrimaryDark,
            },
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.White,
          color: colors.BlackWithOpacity087,
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          maxWidth: "1100px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        },
      },
    },
    MuiLink: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            textDecoration: "none",
            color: "inherit",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "28px",
            transition: "color 0.2s ease",
            "&:hover": {
              color: colors.Primary,
            },
          },
        },
      ],
    },
    MuiDrawer: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: "block",
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }),
        paper: ({ theme }) => ({
          boxSizing: "border-box",
          width: "100%",
          [theme.breakpoints.up("sm")]: {
            width: 240,
          },
        }),
      },
      defaultProps: {
        ModalProps: {
          keepMounted: true,
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          marginTop: theme.spacing(3),
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: theme.spacing(3),
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            justifyContent: "flex-start",
          },
        }),
      },
    },
    MuiUseMediaQuery: {
      defaultProps: {
        ssrMatchMedia: (query) => ({
          matches: mediaQuery.match(query, {}),
        }),
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
