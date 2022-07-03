import React from "react";
import { Link } from "react-router-dom";
import { setAuthentication } from "../../redux/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const { authentication } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(setAuthentication(false));
    localStorage.removeItem("token");
  };

  return (
    <React.Fragment>
      <nav className="top-nav flex-dir-row">
        <Link to="/" className="text-decoration-none">
          <span className="brandName">Developers Hub</span>
        </Link>
        {authentication.isAuthenticated ? (
          <Link
            to="/"
            className="signout-link text-decoration-none"
            onClick={() => signoutHandler()}
          >
            Signout
          </Link>
        ) : (
          <Link to="/signin" className="signin-link text-decoration-none">
            Signin
          </Link>
        )}
      </nav>
    </React.Fragment>
  );
};

export { Navbar };
