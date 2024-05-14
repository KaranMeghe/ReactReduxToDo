import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Features/Todo/todoSlice";

const store = configureStore({
  reducer: todoSlice,
});

export default store;
