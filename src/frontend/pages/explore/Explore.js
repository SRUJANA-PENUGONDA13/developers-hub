import { LeftNavBar, RightNavBar, ExploreContent } from "../../components";

import "./Explore.css";

const Explore = () => {
  return (
    <div className="explore-container container">
      <LeftNavBar />
      <div className="inner-container">
        <ExploreContent />
        <div className="right-nav">
          <RightNavBar />
        </div>
      </div>
    </div>
  );
};

export { Explore };
