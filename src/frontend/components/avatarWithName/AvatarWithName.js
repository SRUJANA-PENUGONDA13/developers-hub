import { Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDisplayProfileModal } from "../../redux/slices/userSlice";
import React from "react";
import "./AvatarWithName.css";

const AvatarWithName = ({ user }) => {
  const name = user?.firstName + " " + user?.lastName;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const avatarHandler = () => {
    if (user.username) {
      dispatch(setDisplayProfileModal(false));
      navigate(`/profile/${user.username}`);
    }
  };

  return (
    <React.Fragment>
      {user && (
        <div
          className="avatarWithName-container flex-dir-row cursor-pointer"
          onClick={() => avatarHandler()}
        >
          <Avatar name={name} src={`${user?.pic ? user.pic : ""}`} />
          <div className="post-user-details flex-dir-col ">
            <span className="post-user-name">{name}</span>
            <span className="post-user-designation">Developer</span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export { AvatarWithName };
