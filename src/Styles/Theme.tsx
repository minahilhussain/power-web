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
    fontSize: "2rem",
    lineHeight: "2.875rem",
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
  bodyL: {
    fontFamily: poppins.style.fontFamily,
    fontWeight: 500,
    color: colors.BrandNavy,
    letterSpacing: "0.01em",
    textAlign: "center",
    fontSize: "1.6rem",
    lineHeight: "1.75rem",
  },
  digitalTitle: {
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "16px",
    fontSize: "2rem",
    lineHeight: "2.5rem",
  },

  digitalSubtitle: {
    textAlign: "center",
    color: colors.MutedText,
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  digitalMeta: {
    fontSize: "0.875rem",
    color: colors.SlateText,
  },
  digitalItemTitle: {
    fontSize: "1.125rem",
    fontWeight: 700,
    color: colors.SlateText,
  },
  digitalBody: {
    color: colors.MutedText,
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
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === "displayL" && {
            [theme.breakpoints.up("md")]: {
              fontSize: "3.375rem",
              lineHeight: "5rem",
              textAlign: "left",
            },
          }),
        }),
      },
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: "trustedSection" },
          style: ({ theme }) => ({
            background: colors.PrimaryTint05,
            textAlign: "center",
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(10),
            [theme.breakpoints.down("md")]: {
              paddingTop: theme.spacing(6),
              paddingBottom: theme.spacing(6),
            },
          }),
        },
        {
          props: { variant: "trustedLogosContainer" },
          style: ({ theme }) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "80px",
            gap: "80px",
            [theme.breakpoints.down("lg")]: {
              gap: "50px",
            },
            [theme.breakpoints.down("sm")]: {
              gap: "20px",
            },
          }),
        },
        {
          props: { variant: "trustedLogo" },
          style: ({ theme }) => ({
            height: "36px",
            display: "flex",
            alignItems: "center",
            filter: "grayscale(1) brightness(0.7)",
            transition: "filter 0.3s",
            background: "transparent",
            boxShadow: "none",
            [theme.breakpoints.down("md")]: {
              height: "30px",
            },
            [theme.breakpoints.down("sm")]: {
              height: "26px",
            },
            "&:hover": { filter: "none" },
          }),
        },
        {
          props: { variant: "digitalSection" },
          style: ({ theme }) => ({
            paddingTop: "200px",
            paddingBottom: theme.spacing(12),
            background: "transparent",
            boxShadow: "none",
            [theme.breakpoints.down("md")]: {
              paddingTop: theme.spacing(4),
              paddingBottom: theme.spacing(4),
            },
          }),
        },
        {
          props: { variant: "digitalGrid" },
          style: ({ theme }) => ({
            display: "grid",
            gap: theme.spacing(4),
            gridTemplateColumns: "1fr 1fr",
            background: "transparent",
            boxShadow: "none",
            marginTop: "50px",
            [theme.breakpoints.down("md")]: {
              gridTemplateColumns: "1fr",
            },
            [theme.breakpoints.up("md")]: {
              marginTop: "100px",
            },
          }),
        },
        {
          props: { variant: "digitalRightGrid" },
          style: ({ theme }) => ({
            display: "grid",
            gap: theme.spacing(2),
            gridTemplateColumns: "1fr 1fr",
            background: "transparent",
            boxShadow: "none",
            [theme.breakpoints.down("md")]: {
              gridTemplateColumns: "1fr",
            },
          }),
        },
        {
          props: { variant: "digitalCard" },
          style: ({ theme }) => ({
            background: "transparent",
            boxShadow: "none",
            marginBottom: theme.spacing(2),
          }),
        },
      ],
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
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
        root: ({ theme }) => ({
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
