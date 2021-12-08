import ItemSlice from "./ItemSlice";
import userSlice from "./UserSlice";

const allReducers = {
  user: userSlice,
  items: ItemSlice,
};

export default allReducers;
