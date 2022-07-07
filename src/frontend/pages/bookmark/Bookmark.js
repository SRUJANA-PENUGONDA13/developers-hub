import { LeftNavBar, RightNavBar, BookMarkContent } from "../../components";

import "./Bookmark.css";

const Bookmark = () => {
  return (
    <div className="bookmark-container container">
      <LeftNavBar />
      <div className="inner-container">
        <BookMarkContent />
        <div className="right-nav">
          <RightNavBar />
        </div>
      </div>
    </div>
  );
};

export { Bookmark };
