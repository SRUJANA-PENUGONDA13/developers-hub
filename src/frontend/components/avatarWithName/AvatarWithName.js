import { Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDisplayProfileModal } from "../../redux/slices/userSlice";
import React from "react";
import "./AvatarWithName.css";

const AvatarWithName = ({ user }) => {
  const { firstName, username } = user ? user : {};
  const name = firstName ? firstName : "Aakansha";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const avatarHandler = () => {
    if (username) {
      dispatch(setDisplayProfileModal(false));
      navigate(`/profile/${username}`);
    }
  };

  return (
    <React.Fragment>
      <div className="avatarWithName-container flex-dir-row cursor-pointer">
        <Avatar src="https://bit.ly/dan-abramov" />
        <div
          className="post-user-details flex-dir-col "
          onClick={() => avatarHandler(console.log("User name: ", username))}
        >
          <span className="post-user-name">{name}</span>
          <span className="post-user-designation">Developer</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export { AvatarWithName };
