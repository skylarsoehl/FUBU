import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import SignIn from "./pages/home/home-page";
import CreateFridge from "./pages/create-fridge-workspace";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <SignIn/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/createfridge" exact>
              <CreateFridge/>
            </Route>
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
