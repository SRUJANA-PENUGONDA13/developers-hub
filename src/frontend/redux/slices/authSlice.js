import { createSlice } from "@reduxjs/toolkit";

const initialState = { authentication: { isAuthenticated: false } };

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuthentication: (state, action) => {
      state.authentication.isAuthenticated = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;
export const { setAuthentication } = actions;
export default reducer;
