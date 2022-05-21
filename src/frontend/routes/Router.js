import { Routes, Route } from "react-router-dom";
import { Home, SigninPage, SignupPage } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route exact path="/signin" element={<SigninPage />}></Route>
      <Route exact path="/signup" element={<SignupPage />}></Route>
    </Routes>
  );
};

export { Router };
