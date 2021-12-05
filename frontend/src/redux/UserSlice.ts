import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userName: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  userName: "Guest",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    changeUser: (state: UserState, action: PayloadAction<UserState>) => {
      state.userName = action.payload.userName;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logoutUser: (state: UserState) => {
      state.userName = initialState.userName;
      state.isLoggedIn = initialState.isLoggedIn;
    },
  },
});

export const { changeUser, logoutUser } = userSlice.actions;

export const selectUser = (state: UserState) => state;
export const selectIsLoggedIn = (state: UserState) => state.isLoggedIn;
export const selectUserName = (state: UserState) => state.userName;

export default userSlice.reducer;
