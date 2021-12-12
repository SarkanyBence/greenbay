import { ChangeEventHandler } from "react";
import NewItem from "./NewItem";
import NewUser from "./newUser";

type PropsInput = {
  id: number;
  name: string;
  placeholder: string;
  type: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: Function;
  state?: NewUser | NewItem;
  errorMessage?: string;
  pattern?: string;
  required?: true;
  focused?: string;
};

export default PropsInput;
