import { UsersList } from "../../components";
import { Link } from "react-router-dom";
import { setAuthentication } from "../../redux/slices/authSlice";
import { getAllUsers, getSuggestedUsersList } from "../../services";
import { useSelector, useDispatch } from "react-redux";
import "./RightNavBar.css";
import { useEffect, useState } from "react";

const RightNavBar = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  const signoutHandler = () => {
    dispatch(setAuthentication(false));
    localStorage.removeItem("token");
  };
  useEffect(() => {
    (async () => {
      const users = await getAllUsers();
      const suggestedUsers = getSuggestedUsersList(users, userDetails);
      setSuggestedUsers(suggestedUsers);
    })();
  }, [userDetails]);

  return (
    <div className="right-nav flex-dir-col">
      <Link
        to="/"
        className="signout-link text-decoration-none"
        onClick={() => signoutHandler()}
      >
        Signout
      </Link>
      {suggestedUsers.length > 0 && <UsersList users={suggestedUsers} />}
    </div>
  );
};

export { RightNavBar };
