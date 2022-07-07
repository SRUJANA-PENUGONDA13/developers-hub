import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import navReducer from "./slices/navSlice";
import postReducer from "./slices/postsSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    navigation: navReducer,
    posts: postReducer,
    user: userReducer,
  },
});
