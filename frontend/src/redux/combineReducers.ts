import { combineReducers } from "redux";
import userSlice from "./UserSlice";

const allReducers = combineReducers({
  user: userSlice,
});

export default allReducers;
