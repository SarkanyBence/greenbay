import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/stateHooks";
import { StateType } from "../redux/store";
import { changeUser, logoutUser } from "../redux/UserSlice";

function Header() {
  const user = useAppSelector((state: StateType) => state.user);

  console.log("State is:", user);
  const dispatch = useAppDispatch();

  return (
    <div className="header">
      <Link to={user.isLoggedIn ? "/buy" : "/login"}>
        <div className="title">
          <h1> greenBay!</h1>
          <p> hello {user.userName} </p>
        </div>
      </Link>
      <Link to={user.isLoggedIn ? "/buy" : "/login"}>
        <div className="nav-item">{user.isLoggedIn ? "Buy" : "Login"}</div>
        <button
          onClick={() => {
            dispatch(
              changeUser({
                userName: "Bence",
                isLoggedIn: true,
              })
            );
          }}
        >
          Log Me In
        </button>
        <button
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Log Me Out
        </button>
      </Link>
      <Link to={user.isLoggedIn ? "/sell" : "/register"}>
        <div className="nav-item">{user.isLoggedIn ? "Sell" : "Register"}</div>
      </Link>
    </div>
  );
}

export default Header;
