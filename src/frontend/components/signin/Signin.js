import { Link, useNavigate } from "react-router-dom";
import { Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { setAuthentication } from "../../redux/slices/authSlice";
import { setUserDetails } from "../../redux/slices/userSlice";
import { signinService } from "../../services";
import { useDispatch, useSelector } from "react-redux";

import "./Signin.css";

const Signin = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signinHandler = async (loginDetails) => {
    const { foundUser, encodedToken } = await signinService(loginDetails);

    setError(!encodedToken);

    if (!!encodedToken) {
      localStorage.setItem("token", encodedToken);
      dispatch(setAuthentication(!!encodedToken));
      dispatch(setUserDetails(foundUser));
      navigate("/posts");
      toast({
        title: "Login Successful",
        status: "success",
        duration: 9000,
        containerStyle: { color: "red" },
        isClosable: true,
      });
    }
  };

  const signoutHandler = () => {
    dispatch(setAuthentication(false));
    localStorage.removeItem("token");
  };

  return (
    <div className="auth-container flex-dir-col">
      <h1 className="auth-header">Login</h1>
      <form
        className="auth-body flex-dir-col"
        onSubmit={(event) => {
          event.preventDefault();
          signinHandler(loginDetails);
        }}
      >
        <div className="auth-field">
          <label for="email">Email address</label>
          <Input
            placeholder="srujanapenugonda@gmail.com"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, username: e.target.value })
            }
            required
          />
        </div>
        <div className="auth-field">
          <label for="password">Password</label>
          <Input
            type="password"
            placeholder="*********"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
            required
          />
        </div>
        <div className="auth-field credentials-handler flex-dir-row">
          <div className="remeber-me">
            <input type="checkbox" value="RememberMe" id="rememberMe" />
            <label className="rememberMe" for="rememberMe">
              Remember me
            </label>
          </div>
          <Link to="#" className="forgot-password-link text-decoration-none">
            Forgot your Password?
          </Link>
        </div>
        <button role="button" type="submit" className="primary-btn">
          Login
        </button>
        <Link
          role="button"
          className="auth-account-link text-decoration-none auth-field"
          to=""
          onClick={() => {
            setLoginDetails({
              username: "srujanapenugonda@gmail.com",
              password: "srujana",
            });
            signinHandler({
              username: "srujanapenugonda@gmail.com",
              password: "srujana",
            });
          }}
        >
          Login as Guest
        </Link>
        <Link
          role="button"
          className="auth-account-link text-decoration-none auth-field"
          to="/signup"
        >
          Create New Account
        </Link>
        {error && <p className="error">Please check your credentials</p>}
      </form>
    </div>
  );
};

export { Signin };
