import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "./features/FormSlice";
import userReduser from "./features/UserSlice";

const store = configureStore({
  reducer: {
    formData: formDataReducer,
    user: userReduser,
  },
});

export default store;
