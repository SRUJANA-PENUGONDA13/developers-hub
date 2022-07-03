import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../components";
import {
  Home,
  SigninPage,
  SignupPage,
  Posts,
  Explore,
  Bookmark,
  Profile,
} from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route exact path="/signin" element={<SigninPage />}></Route>
      <Route exact path="/signup" element={<SignupPage />}></Route>
      <Route
        exact
        path="/posts"
        element={
          <PrivateRoute>
            <Posts />
          </PrivateRoute>
        }
      ></Route>
      <Route
        exact
        path="/explore"
        element={
          <PrivateRoute>
            <Explore />
          </PrivateRoute>
        }
      ></Route>
      <Route
        exact
        path="/bookmark"
        element={
          <PrivateRoute>
            <Bookmark />
          </PrivateRoute>
        }
      ></Route>
      <Route
        exact
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export { Router };
