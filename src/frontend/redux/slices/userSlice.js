import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {},
  profileUserDetails: {},
  userPosts: [],
  profileModalType: "",
  displayProfileModal: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },

    saveUserPosts: (state, action) => {
      state.userPosts = action.payload;
    },
    setProfileModalType: (state, action) => {
      state.profileModalType = action.payload;
    },
    setDisplayProfileModal: (state, action) => {
      state.displayProfileModal = action.payload;
    },
    setProfileUserDetails: (state, action) => {
      state.profileUserDetails = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  setUserDetails,
  savePosts,
  saveUserPosts,
  setProfileModalType,
  setDisplayProfileModal,
  setProfileUserDetails,
} = actions;
export default reducer;
