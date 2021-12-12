import { useState } from "react";
import PropsInput from "../types/PropsInput";

const FormInput = (props: PropsInput) => {
  let inputValue: any = "";
  const [focused, setFocused] = useState(false);
  const { id, handleChange, errorMessage, state, ...inputProps } = props;
  if (state) {
    for (const [key, v] of Object.entries(state)) {
      if (key === props.name) {
        inputValue = v;
      }
    }
  }
  const handleFocus = (e: any) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      {/* <label htmlFor="">{props.placeholder}</label> */}
      <input
        {...inputProps}
        onChange={handleChange}
        value={inputValue}
        onBlur={handleFocus}
        onFocus={() => {
          props.name === "confirmPassword" && setFocused(true);
        }}
        data-focused={focused.toString()}
      />
      <span className="formInput error">{props.errorMessage}</span>
    </div>
  );
};

export default FormInput;
