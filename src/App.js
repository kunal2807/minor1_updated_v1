import Main from "./Components/Main";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./Components/theme";
import Survilance from "./Components/survillance";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path="/survilliance" render={(props) => <Survilance />} />
          <Route path="/" render={(props) => <Main />} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
