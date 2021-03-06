import { LeftNavBar, RightNavBar, PostsContent } from "../../components";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="posts-container container flex-dir-row">
      <LeftNavBar />
      <div className="inner-container">
        <PostsContent />
        <div className="right-nav">
          <RightNavBar />
        </div>
      </div>
    </div>
  );
};

export { Posts };
