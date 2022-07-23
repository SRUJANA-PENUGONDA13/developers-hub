import { Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import "./StartPost.css";

const StartPost = (props) => {
  const { userDetails } = useSelector((state) => state.user);
  const [profilePic, setProfilePic] = useState(userDetails.pic);
  const name = userDetails?.firstName + " " + userDetails?.lastName;

  useEffect(() => {
    setProfilePic(userDetails.pic);
  }, [userDetails]);

  return (
    <div className="start-post flex-dir-row">
      <Avatar name={name} src={profilePic ? profilePic : ""} />
      <button className="sp-input" onClick={props.onClick}>
        Start a Post
      </button>
    </div>
  );
};

export { StartPost };
