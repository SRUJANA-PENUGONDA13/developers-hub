import { LeftNavBar, RightNavBar, ProfileContent } from "../../components";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container container">
      <LeftNavBar />
      <div className="inner-container">
        <ProfileContent />
        <RightNavBar />
      </div>
    </div>
  );
};

export { Profile };
