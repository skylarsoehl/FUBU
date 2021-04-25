import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import SignIn from "./pages/home/home-page";
import ChooseFridgeName from "./pages/admin/choose-fridge-name";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import JoinOrCreate from "./pages/sign-up/join-or-create";
import AdminDashboard from "./pages/admin/admin-dashboard";
import SignUp from "./pages/sign-up/sign-up";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
          <Route path="/create-community-space" exact>
            <ChooseFridgeName />
          </Route>
          <Route
            path="/join-or-create"
            component={JoinOrCreate}
            render={(props) => <JoinOrCreate {...props} />}
          />
          <Route path="/dashboard-admin" exact>
            <AdminDashboard />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
