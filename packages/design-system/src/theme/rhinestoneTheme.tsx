import { ThemeOptions } from "@material-ui/core/styles/createTheme";

export const rhinestoneTheme = {
  palette: {
    primary: {
      main: "#0378d5",
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    // Document title
    h1: {
      fontFamily: ["Titillium Web", "sans-serif"].join(","),
      fontSize: "2.5rem",
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
      wordBreak: "break-word",
    },
    // Various document headers
    h2: {
      fontFamily: ["Titillium Web", "sans-serif"].join(","),
      fontSize: "2.5rem",
      marginTop: "1.3rem",
      marginBottom: "1.3rem",
    },
    h3: {
      fontFamily: ["Titillium Web", "sans-serif"].join(","),
      fontSize: "2rem",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
    h4: {
      fontFamily: ["Titillium Web", "sans-serif"].join(","),
      fontSize: "1.6rem",
      marginTop: "0.8rem",
      marginBottom: "0.8rem",
    },
    h5: {
      fontFamily: ["Titillium Web", "sans-serif"].join(","),
      fontSize: "1.3rem",
      marginTop: "0.6rem",
      marginBottom: "0.6rem",
    },
    h6: {
      fontFamily: ["Titillium Web", "sans-serif"].join(","),
      fontSize: "1rem",
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    },
    button: {
      fontFamily: ["Titillium Web", "sans-serif"].join(","),
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
  },
  shape: {},
  props: {
    MuiChip: {
      style: {
        borderRadius: 10,
      },
    },
  },
} as ThemeOptions;
