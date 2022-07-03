import { LeftNavBar, RightNavBar, ExploreContent } from "../../components";

import "./Explore.css";

const Explore = () => {
  return (
    <div className="explore-container container">
      <LeftNavBar />
      <div className="inner-container">
        <ExploreContent />
        <RightNavBar />
      </div>
    </div>
  );
};

export { Explore };
