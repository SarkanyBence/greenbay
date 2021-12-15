import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../hooks/stateHooks";
import fetchData from "../services/fetchData";
import NewUser from "../types/newUser";
import NewUserDto from "../types/newUserDto";
import PropsInput from "../types/PropsInput";
import User from "../types/User";
import FormInput from "./FormInput";
import { changeUser } from "../redux/UserSlice";
import { fetchAllItems } from "../redux/ItemSlice";

function Login() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [userState, setUserState] = useState({
    userName: "",
    password: "",
  } as NewUser);

  const [userError, setUserError] = useState("");

  useEffect(() => {
    console.log(userError);
  }, [userError]);

  const submitForm = (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const dataDto: NewUserDto = new NewUserDto(data as unknown as NewUser);

    fetchData("POST", "/login", dataDto)
      .then((token) => {
        localStorage.setItem("token", token);
        const newUser: User = {
          userName: userState.userName,
          isLoggedIn: true,
        };
        dispatch(changeUser(newUser));
        dispatch(fetchAllItems())
          .unwrap()
          .then((items) => {
            history.push("/");
          });
      })
      .catch((err) => {
        if (err.status === 401) {
          setUserError(err.message);
        } else if (err.status === 500) {
          setUserError(err.message);
        }
      });
  };

  const handleChange = (e: any) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  const inputs: PropsInput[] = [
    {
      id: 1,
      name: "userName",
      placeholder: "Username",
      type: "text",
      errorMessage: "Username or password is incorrect",
      required: true,
    },
    {
      id: 2,
      name: "password",
      placeholder: "Password",
      type: "password",
      errorMessage: "Username or password is incorrect",
      required: true,
    },
  ];

  return (
    <div className="base-container">
      <form onSubmit={submitForm}>
        <span
          className="formInput other-error"
          style={{ opacity: userError ? 1 : 0 }}
        >
           {userError ? userError : "SOMETHING"}
        </span>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            state={userState}
            handleChange={handleChange}
          />
        ))}

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
