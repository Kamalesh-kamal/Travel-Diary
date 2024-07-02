import { createSlice } from "@reduxjs/toolkit";

const storedData = localStorage.getItem("formData");

const initialState = {
  formData: storedData ? JSON.parse(storedData) : [],
};

const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    addItem(state, action) {
      state.formData.push(action.payload);
      localStorage.setItem("formData", JSON.stringify(state.formData));
    },
    deleteItem(state, action) {
      state.formData = state.formData.filter(
        (item) => item.lat !== action.payload
      );
      localStorage.setItem("formData", JSON.stringify(state.formData));
    },
  },
});

export const { addItem, deleteItem } = formSlice.actions;

export const getFormData = (state) => state.formData.formData;

export default formSlice.reducer;
