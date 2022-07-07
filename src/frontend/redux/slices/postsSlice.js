import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDisplayCreatePost: false,
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
  },
});

const { actions, reducer } = postsSlice;
export const { setDisplayCreatePost, savePosts } = actions;
export default reducer;
