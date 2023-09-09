import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    tasksSlice: tasksReducer,
    userSlice: userSlice,
  },
});
