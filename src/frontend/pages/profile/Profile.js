import { LeftNavBar, RightNavBar, ProfileContent } from "../../components";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container container">
      <LeftNavBar />
      <div className="inner-container">
        <ProfileContent />
        <div className="right-nav">
          <RightNavBar />
        </div>
      </div>
    </div>
  );
};

export { Profile };
