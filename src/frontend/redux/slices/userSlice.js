import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { setUserDetails } = actions;
export default reducer;
