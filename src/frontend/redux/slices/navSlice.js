import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navLinks: {
    isHomePage: false,
    isExplorePage: false,
    isBookMarkPage: false,
    isProfilePage: false,
  },
};

const navSlice = createSlice({
  name: "navLinks",
  initialState,
  reducers: {
    setHomePage: (state, action) => {
      state.navLinks.isHomePage = action.payload;
    },
    setExplorePage: (state, action) => {
      state.navLinks.isExplorePage = action.payload;
    },
    setBookMarkPage: (state, action) => {
      state.navLinks.isBookMarkPage = action.payload;
    },
    setProfilePage: (state, action) => {
      state.navLinks.isProfilePage = action.payload;
    },
  },
});

const { actions, reducer } = navSlice;
export const { setHomePage, setExplorePage, setBookMarkPage, setProfilePage } =
  actions;
export default reducer;
