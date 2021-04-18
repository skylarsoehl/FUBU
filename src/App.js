import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Schedule from './core/components/core-schedule.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Hello World</Typography>
      <Schedule></Schedule>
    </ThemeProvider>
  );
}

export default App;
