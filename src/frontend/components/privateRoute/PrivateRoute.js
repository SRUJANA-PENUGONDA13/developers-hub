import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { authentication } = useSelector((store) => store.auth);
  const location = useLocation();

  if (authentication.isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" />;
  }
};

export { PrivateRoute };
