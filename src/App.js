import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Hello World</Typography>
    </ThemeProvider>
  );
}

export default App;
