import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Buy from "./components/Buy";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Sell from "./components/Sell";
import { useAppSelector } from "./hooks/stateHooks";
import { StateType } from "./redux/store";

function App() {
  const isLoggedIn: boolean = useAppSelector(
    (state: StateType) => state.user.isLoggedIn
  );

  if (!isLoggedIn) {
    return (
      <Router>
        <div className="App">
          <p>IS LOGGED IN: {isLoggedIn}</p>
          <Header />
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div className="App">
          <p>IS LOGGED IN: {isLoggedIn}</p>
          <Header />
          <Switch>
            <Route path="/buy">
              <Buy />
            </Route>
            <Route path="/sell">
              <Sell />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
