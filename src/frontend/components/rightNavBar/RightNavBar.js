import { UsersList } from "../../components";
import { Link } from "react-router-dom";
import { setAuthentication } from "../../redux/slices/authSlice";

import { useDispatch } from "react-redux";
import "./RightNavBar.css";

const RightNavBar = () => {
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(setAuthentication(false));
    localStorage.removeItem("token");
  };

  return (
    <div className="right-nav flex-dir-col">
      <Link
        to="/"
        className="signout-link text-decoration-none"
        onClick={() => signoutHandler()}
      >
        Signout
      </Link>
      <UsersList />
    </div>
  );
};

export { RightNavBar };
