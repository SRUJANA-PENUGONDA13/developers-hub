import { AvatarWithName } from "../index";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import {
  setProfileUserDetails,
  setUserDetails,
} from "../../redux/slices/userSlice";
import { followUser } from "../../services";

import "./UsersList.css";

const UsersList = ({ users }) => {
  console.log("User List");
  const dispatch = useDispatch();
  const followHandler = async (user, value) => {
    const followData = await followUser(user.username);
    if (followData?.user) {
      dispatch(setUserDetails(followData.user));
      dispatch(setProfileUserDetails(followData.user));
    }
  };

  return (
    <div className="usersList-container flex-dir-col">
      {users.map((user, index) => {
        return (
          <div className="userList-details flex-dir-row">
            <div className="user-list-avatar">
              <AvatarWithName user={user} />
            </div>
            <Button
              name={user._id}
              className="follow-btn"
              size="sm"
              onClick={(event) => followHandler(user, event.target)}
            >
              Follow
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export { UsersList };
