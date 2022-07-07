import { Avatar } from "@chakra-ui/react";
import React from "react";
import "./AvatarWithName.css";

const AvatarWithName = ({ userName }) => {
  const name = userName ? userName : "Aakansha";
  return (
    <React.Fragment>
      <div className="avatarWithName-container flex-dir-row">
        <Avatar src="https://bit.ly/dan-abramov" />
        <div className="post-user-details flex-dir-col">
          <span className="post-user-name">{name}</span>
          <span className="post-user-designation">Developer</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export { AvatarWithName };
