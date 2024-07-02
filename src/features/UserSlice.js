import { createSlice } from "@reduxjs/toolkit";

const userData = localStorage.getItem("user");
const initialState = {
  user: userData ? JSON.parse(userData) : [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItem(state, action) {
      state.user.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const getUser = (state) => state.user.user;

export const { addItem } = userSlice.actions;
export default userSlice.reducer;
