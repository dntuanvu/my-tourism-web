"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#003566",
      contrastText: "#003566",
    },
    secondary: {
      main: "#006CE8",
      contrastText: "#006CE8",
    },
    error: {
      main: "#D4111E",
    },
    warning: {
      main: "#FFB600",
      light: "#EEBA0B",
    },
    info: {
      main: "#006CE8",
    },
    success: {
      main: "#2A9134",
    },
    text: {
      primary: "#003566",
      secondary: "#006CE8",
      disabled: "#6B6B6B",
    },
    divider: "#6B6B6B",
    background: {
      default: "#F6F6F6",
      paper: "#FFFFFF",
    },
    common: {
      black: "#000",
      white: "#FFF",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      // styleOverrides: {
      //   root: {
      //     textTransform: "capitalize",
      //     borderRadius: "24px",
      //     backgroundColor: "#006CE8",
      //     color: "#FFF",
      //     padding: "4px 16px",
      //   },
      // },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            borderRadius: "40px",
            textTransform: "capitalize",
            backgroundColor: "#FFF",
            color: "#006CE8",
            border: "1px solid #006CE8",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: "40px",
            textTransform: "capitalize",
            backgroundColor: "#FFF",
            color: "#006CE8",
            border: "1px solid #006CE8",
          },
        },
        {
          props: { variant: "text" },
          style: {
            backgroundColor: "transparent",
            color: "#FFF",
            borderRadius: "40px",
            textTransform: "capitalize",
            padding: "4px 16px",
            fontSize: "1rem",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#006CE8",
              color: "#FFF",
            },
            "&:active": {
              backgroundColor: "#006CE8",
              color: "#FFF",
              border: "1px solid #FFF",
            },
            "&:focus": {
              backgroundColor: "#006CE8",
              color: "#FFF",
              border: "1px solid #FFF",
            },
          },
        },
      ],
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          borderColor: "#006CE8",
          padding: "4px 16px",
          fontSize: "1rem",
          border: "none",
          "&:hover": {
            backgroundColor: "#006CE8 !important",
            color: "#FFF",
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "transparent",
            color: "common.black",
            border: "none",
            "&:hover": {
              backgroundColor: "#006CE8",
              color: "#FFF",
            },
          },
        },
        {
          props: { variant: "filled" },
          style: {
            backgroundColor: "#006CE8",
            color: "#FFF",
            "&:hover": {
              backgroundColor: "#006CE8",
              color: "#FFF",
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: "white",
            placeholder: {
              color: "red",
            },
            "&:hover, &:focus, &:active": {
              backgroundColor: "white",
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: roboto.style.fontFamily,
        },
      },
    },
  },
});

export default theme;
