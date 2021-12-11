import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import fetchData from "../services/fetchData";
import NewUser from "../types/newUser";
import NewUserDto from "../types/newUserDto";
import PropsInput from "../types/PropsInput";
import FormInput from "./FormInput";

function Register() {
  const history = useHistory();
  const [userState, setUserState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  } as NewUser);
  const [userError, setUserError] = useState(false);

  useEffect(() => {}, [userError]);

  const submitForm = (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const dataDto: NewUserDto = new NewUserDto(data as unknown as NewUser);
    console.log(userState);
    fetchData("POST", "/register", dataDto)
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        if (err.status === 422) {
          setUserError(true);
        }
      });
  };

  const handleChange = (e: any) => {
    if (e.target.name === "userName") setUserError(false);
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  const inputs: PropsInput[] = [
    {
      id: 1,
      name: "userName",
      placeholder: "Username",
      type: "text",
      errorMessage:
        "Username should be 3-16 characters, no special characters allowed!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      placeholder: "Email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      placeholder: "Password",
      type: "password",
      errorMessage: "Password should be 8-20 characters!",
      pattern: ".{8,20}",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      placeholder: "Confirm password",
      type: "password",
      errorMessage: "Passwords don't match",
      pattern: userState.password,
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
          Username is already taken!
        </span>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            userState={userState}
            handleChange={handleChange}
          />
        ))}

        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
