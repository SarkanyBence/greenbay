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
    setItemState({ ...itemState, [e.target.name]: e.target.value });
  };

  const inputs: PropsInput[] = [
    {
      id: 1,
      name: "name",
      placeholder: "Name",
      type: "text",
      errorMessage: "Name should be at least 3 characters",
      pattern: "[a-zA-Z0-9 _]{3,}",
      required: true,
    },
    {
      id: 2,
      name: "description",
      placeholder: "Description",
      type: "textarea",
      errorMessage: "Description should be 3-100 characters",
      pattern: "{3,100}", 
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
      placeholder: "Photo url",
      type: "text",
      errorMessage: "Photo url is reqired",
      pattern:
        "^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$",
      required: true,
    },
  ];

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

        <button>Sell</button>
      </form>
    </div>
  );
}

export default Sell;
