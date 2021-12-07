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
        <div className="nav-item">
          <h1> greenBay!</h1>
        </div>
      </Link>
      <Link to={user.isLoggedIn ? "/buy" : "/login"}>
        <div className="nav-item">
          <p> Hi {user.userName}! </p>
        </div>
      </Link>
        <div className="nav-item grow">
        </div>
      <Link to={user.isLoggedIn ? "/buy" : "/login"}>
        <div className="nav-item navbtn">
          <p>{user.isLoggedIn ? "buy" : "login"} </p>
        </div>
      </Link>
      <Link to={user.isLoggedIn ? "/sell" : "/register"}>
        <div className="nav-item navbtn">
          <p>{user.isLoggedIn ? "sell" : "register"} </p>
        </div>
      </Link>
    </div>
  );
}

export default Header;

// <div className="nav-item">{user.isLoggedIn ? "Buy" : "Login"}
// <button
//   onClick={() => {
//     dispatch(
//       changeUser({
//         userName: "Bence",
//         isLoggedIn: true,
//       })
//       );
//     }}
// >
//   login
// </button>
// </div>
//     <div className="nav-item">{user.isLoggedIn ? "Buy" : "Login"}
// <button
//   onClick={() => {
//     dispatch(logoutUser());
//   }}
// >
//   logout
// </button>
// </div>
