import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./combineReducers";

const store = configureStore({
  reducer: allReducers,
});

store.subscribe(() => {
  console.log("state updated", store.getState());
});

export default store;

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
