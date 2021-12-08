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
import { useAppDispatch, useAppSelector } from "./hooks/stateHooks";
import { StateType } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { changeUser } from "./redux/UserSlice";
import TokenType from "./types/TokenType";
import User from "./types/User";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded: TokenType = jwt.decode(token) as TokenType;
      const newUser: User = {
        userName: decoded.userName,
        isLoggedIn: true,
      };

      dispatch(changeUser(newUser));
    }
  }, [dispatch]);

  const isLoggedIn: boolean = useAppSelector(
    (state: StateType) => state.user.isLoggedIn
  );

  if (!isLoggedIn) {
    return (
      <Router>
        <div className="App">
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
