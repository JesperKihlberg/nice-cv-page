import { createTheme } from "@material-ui/core";

declare module "@material-ui/core/styles" {
  interface Theme {
    navigationPanelWidth: number;
    topBarHeight: number;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    navigationPanelWidth?: number;
    topBarHeight?: number;
  }
}

export const theme = createTheme({
  navigationPanelWidth: 200,
  topBarHeight: 80,

  palette: {
    type: "dark",
    primary: {
      main: "#7F9C96",
    },
    secondary: {
      main: "yellow",
    },
    divider: "#6EA130",
    background: {
      default: "#242325",
      paper: "#4D7C8A",
    },
  },
  typography: {
    fontFamily: "Poppins",

    // fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    // // Document title
    // h1: {
    //   fontFamily: ["Titillium Web", "sans-serif"].join(","),
    //   fontSize: "2.5rem",
    //   marginTop: "1.5rem",
    //   marginBottom: "1.5rem",
    //   wordBreak: "break-word",
    // },
    // // Various document headers
    // h2: {
    //   fontFamily: ["Titillium Web", "sans-serif"].join(","),
    //   fontSize: "2.5rem",
    //   marginTop: "1.3rem",
    //   marginBottom: "1.3rem",
    // },
    // h3: {
    //   fontFamily: ["Titillium Web", "sans-serif"].join(","),
    //   fontSize: "2rem",
    //   marginTop: "1rem",
    //   marginBottom: "1rem",
    // },
    // h4: {
    //   fontFamily: ["Titillium Web", "sans-serif"].join(","),
    //   fontSize: "1.6rem",
    //   marginTop: "0.8rem",
    //   marginBottom: "0.8rem",
    // },
    // h5: {
    //   fontFamily: ["Titillium Web", "sans-serif"].join(","),
    //   fontSize: "1.3rem",
    //   marginTop: "0.6rem",
    //   marginBottom: "0.6rem",
    // },
    // h6: {
    //   fontFamily: ["Titillium Web", "sans-serif"].join(","),
    //   fontSize: "1rem",
    //   marginTop: "0.5rem",
    //   marginBottom: "0.5rem",
    // },
    // button: {
    //   fontFamily: ["Titillium Web", "sans-serif"].join(","),
    //   fontWeight: 500,
    //   fontSize: "0.875rem",
    //   lineHeight: 1.75,
    //   letterSpacing: "0.02857em",
    //   textTransform: "uppercase",
    // },
  },
  shape: {},
  props: {
    MuiChip: {
      style: {
        borderRadius: 10,
      },
    },
  },
});
