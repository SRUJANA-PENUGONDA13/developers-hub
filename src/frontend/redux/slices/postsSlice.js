import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDisplayCreatePost: false,
  currentPost: "",
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setDisplayCreatePost: (state, action) => {
      state.isDisplayCreatePost = action.payload;
    },
    savePosts: (state, action) => {
      state.posts = action.payload;
    },
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
  },
});

const { actions, reducer } = postsSlice;
export const { setDisplayCreatePost, savePosts, setCurrentPost } = actions;
export default reducer;
