import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import SignIn from "./pages/home/home-page";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import JoinWorkSpace from "./pages/create-workspace";


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
            <Route path="/workspace" exact>
              <JoinWorkSpace/>
            </Route>
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
