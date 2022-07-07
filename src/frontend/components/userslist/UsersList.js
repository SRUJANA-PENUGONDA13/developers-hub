import { AvatarWithName } from "../index";
import { Button } from "@chakra-ui/react";
import "./UsersList.css";

const UsersList = () => {
  return (
    <div className="usersList-container flex-dir-col">
      <div className="userList-details flex-dir-row">
        <AvatarWithName />
        <Button className="follow-btn" size="sm">
          Follow
        </Button>
      </div>
      <div className="userList-details flex-dir-row">
        <div className="ul-avatar">
          <AvatarWithName />
        </div>
        <Button className="follow-btn" size="sm">
          Follow
        </Button>
      </div>
      <div className="userList-details flex-dir-row">
        <AvatarWithName />
        <Button className="follow-btn" size="sm">
          Follow
        </Button>
      </div>
    </div>
  );
};

export { UsersList };
