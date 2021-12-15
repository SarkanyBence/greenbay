import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../hooks/stateHooks";
import { addItem } from "../redux/ItemSlice";
import fetchData from "../services/fetchData";
import ItemDto from "../types/ItemDto";
import NewItem from "../types/NewItem";
import PropsInput from "../types/PropsInput";
import FormInput from "./FormInput";

function Sell() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [itemState, setItemState] = useState({} as NewItem);
  const [optional, setOptional] = useState("" as string);
  const [optionalInputs, setOptionalInputs] = useState([] as PropsInput[]);

  const [itemError, setItemError] = useState(false);

  const submitForm = (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const newItem: NewItem = data as unknown as NewItem;
    fetchData("POST", "/items", newItem)
      .then((item: ItemDto) => {
        dispatch(addItem(item));
      })
      .catch((err) => {
        setItemError(true);
      });

    history.push("/");
  };

  const handleChange = (e: any) => {
    if (e.target.name !== "optionalUrls") {
      setItemState({ ...itemState, [e.target.name]: e.target.value });
    } else {
      console.log(optional);
      
      setOptional(e.target.value);
    }
  };

  const inputs: PropsInput[] = [
    {
      id: 1,
      name: "name",
      placeholder: "Name",
      type: "text",
      errorMessage: "Name should be at least 3 characters",
      pattern: "^.{3,}$",
      required: true,
    },
    {
      id: 2,
      name: "description",
      placeholder: "Description",
      type: "textarea",
      errorMessage: "Description should be 3-100 characters",
      pattern: "^.{3,100}$",
      required: true,
    },
    {
      id: 3,
      name: "price",
      placeholder: "Price",
      type: "number",
      errorMessage: "Price is reqired",
      pattern: "^[0-9]$",
      required: true,
    },
    {
      id: 4,
      name: "photoUrl",
      placeholder: "Main photo url",
      type: "url",
      errorMessage: "Main photo url is reqired",
      pattern:
        "^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$",
      required: true,
    },
  ];
  const addOptionals = (e: any) => {
    e.preventDefault();

    let id: number = optionalInputs.length + 5;
    if (id < 10) {
      let newOptional: PropsInput = {
        id: id,
        name: `optUrl${id-4}`,
        placeholder: "Optional photo url",
        type: "url",
        pattern:
          "^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$",
      };
      setOptionalInputs((arr) => [...arr, newOptional]);
    }
  };

  return (
    <div className="base-container">
      <div className="base-title">Do you have something to sell?</div>
      <form onSubmit={submitForm}>
        <span
          className="formInput other-error"
          style={{ opacity: itemError ? 1 : 0 }}
        >
          Username or password is incorrect
        </span>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            state={itemState}
            handleChange={handleChange}
          />
        ))}
        <div className="optionals">
          {optionalInputs.length !== 0 &&
            optionalInputs.map((input) => (
              <div className="optional-input">
                <FormInput
                  key={input.id}
                  {...input}
                  state={itemState}
                  handleChange={handleChange}
                />
              </div>
            ))}
          <span
            className="formInput other-error"
            style={{ opacity: itemError ? 1 : 0 }}
          >
            Only valid url accepted
          </span>
          <button
            onClick={addOptionals}
            disabled={optionalInputs.length === 5 ? true : false}
          >
            Add more photo... <small>max. 5 urls</small>
          </button>
        </div>

        <button>Sell</button>
      </form>
    </div>
  );
}

export default Sell;
