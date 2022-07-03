import { AvatarWithName } from "../index";
import { useSelector } from "react-redux";
import "./Post.css";

const Post = ({ postContent }) => {
  const { userDetails } = useSelector((store) => store.user);

  return (
    <div className="post-container flex-dir-col">
      <div className="post-nav-sec flex-dir-row">
        <div className="post-nav-left-sec flex-dir-row">
          <AvatarWithName userName={userDetails.firstName} />
        </div>
        <button className="post-control">
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
      </div>
      <div className="post-main-sec">
        <p>{postContent}</p>
      </div>
      <div className="post-footer-sec flex-dir-row">
        <button className="post-like-btn">
          <i className="fa-regular fa-heart"></i>
        </button>
        <button className="post-comment-btn">
          <i className="fa-regular fa-comment"></i>
        </button>
        <button className="post-bookmark-btn">
          <i className="fa-regular fa-bookmark"></i>
        </button>
      </div>
    </div>
  );
};

export { Post };
