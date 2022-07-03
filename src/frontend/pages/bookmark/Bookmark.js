import { LeftNavBar, RightNavBar, BookMarkContent } from "../../components";

import "./Bookmark.css";

const Bookmark = () => {
  return (
    <div className="bookmark-container container">
      <LeftNavBar />
      <div className="inner-container">
        <BookMarkContent />
        <RightNavBar />
      </div>
    </div>
  );
};

export { Bookmark };
