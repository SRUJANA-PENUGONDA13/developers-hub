import { UserProfile } from "../../components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../../services";
import { setProfileUserDetails } from "../../redux/slices/userSlice";
import "./ProfileContent.css";

const ProfileContent = () => {
  const { username } = useParams();
  const { displayProfileModal, userDetails, profileUserDetails } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const userData = await getUserDetails(username);
      if (userData) dispatch(setProfileUserDetails(userData));
    })();
  }, [username]);

  return (
    <div className="profile-conent">
      <UserProfile />
    </div>
  );
};

export { ProfileContent };
