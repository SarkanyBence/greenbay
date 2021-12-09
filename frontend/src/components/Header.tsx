import { Link, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/stateHooks";
import { StateType } from "../redux/store";
import { logoutUser } from "../redux/UserSlice";

function Header() {
  const user = useAppSelector((state: StateType) => state.user);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(logoutUser());
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div className="header">
      <Link to={user.isLoggedIn ? "/" : "/login"}>
        <div className="nav-item">
          <h1> greenBay!</h1>
        </div>
      </Link>
      <Link to={user.isLoggedIn ? "/" : "/login"}>
        <div className="nav-item">
          <p className="title"> Hi {user.userName}! </p>
        </div>
      </Link>
      <div className="nav-item grow"></div>
      <Link to={user.isLoggedIn ? "/" : "/login"}>
        <div className="nav-item navbtn">
          <p>{user.isLoggedIn ? "buy" : "login"} </p>
        </div>
      </Link>
      <Link to={user.isLoggedIn ? "/sell" : "/register"}>
        <div className="nav-item navbtn">
          <p>{user.isLoggedIn ? "sell" : "register"} </p>
        </div>
      </Link>
      {user.isLoggedIn && (
        <div className="nav-item navbtn">
          <button onClick={logout}>logout </button>
        </div>
      )}
    </div>
  );
}

export default Header;
