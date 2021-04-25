import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import SignIn from "./pages/home/home-page";
import CreateFridge from "./pages/create-fridge-workspace";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import JoinWorkSpace from "./pages/create-workspace";
import DashOrg from "./pages/dashboard/dashboard-organizer";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>
          <Route path="/createfridge" exact>
            <CreateFridge />
          </Route>
          <Route path="/workspace" exact>
            <JoinWorkSpace />
          </Route>
          <Route path="/dashorg" exact>
            <DashOrg />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
