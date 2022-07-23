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
      <Route element={<PrivateRoute />}>
        <Route exact path="/posts" element={<Posts />}></Route>
        <Route exact path="/explore" element={<Explore />}></Route>
        <Route exact path="/bookmark" element={<Bookmark />}></Route>
        <Route exact path="/profile/:username" element={<Profile />}></Route>
      </Route>
    </Routes>
  );
};

export { Router };
