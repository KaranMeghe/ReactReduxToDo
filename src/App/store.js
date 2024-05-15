import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Features/Todo/todoSlice";
// import todoReducer from "../features/todo/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
