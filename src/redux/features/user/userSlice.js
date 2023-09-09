import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Shaikh Nayeem Uddin",
  email: "nayeem@gmail.com",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
