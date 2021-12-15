import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Sell from "./components/Sell";
import { useAppDispatch, useAppSelector } from "./hooks/stateHooks";
import { StateType } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { changeUser } from "./redux/UserSlice";
import TokenType from "./types/TokenType";
import User from "./types/User";
import BuySelected from "./components/BuySelected";

function App() {
  const dispatch = useAppDispatch();
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: TokenType = jwt.decode(token) as TokenType;
      const newUser: User = {
        userName: decoded.userName,
        isLoggedIn: true,
      };
      dispatch(changeUser(newUser));
      Setloading(false);
    } else {
      Setloading(false);
    }
  }, [dispatch, loading]);

  const isLoggedIn: boolean = useAppSelector(
    (state: StateType) => state.user.isLoggedIn
  );
  if (loading) {
    return (
      <div className="App">
        <div className="">loading</div>
      </div>
    );
  } else {
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
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/sell">
                <Sell />
              </Route>
              <Route path="/buy/:id">
                <BuySelected />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
