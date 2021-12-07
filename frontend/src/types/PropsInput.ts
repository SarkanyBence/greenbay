import { ChangeEventHandler } from "react";
import NewUser from "./newUser";

type PropsInput = {
  id: number;
  name: string;
  placeholder: string;
  type: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: Function;
  userState?: NewUser;
  errorMessage?: string;
  pattern?: string;
  required?: true;
  focused?: string;
};

export default PropsInput;
