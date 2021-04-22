import { createMuiTheme } from "@material-ui/core";

const font = "'Archivo', sans-serif";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#D5EEE6",
      main: "#427966",
      dark: "#2D5849",
      contrastText: "#fff",
    },
    secondary: {
      light: "#E5E7EE",
      main: "#B0B3BC",
      dark: "#8D919C",
      contrastText: "#fff",
    },
    warning: {
      main: "#DF5A45",
      dark: "CB452F",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 33,
      fontWeight: 600,
    },
    body1: {
      fontSize: 22,
    },
    button: {
      fontWeight: 600,
      textTransform: "capitalize",

    }
  },
});

export default theme;
