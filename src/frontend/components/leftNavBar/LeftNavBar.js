import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setDisplayCreatePost } from "../../redux/slices/postsSlice";
import { StackedList, CreatePost } from "../../components";
import "./LeftNavBar.css";

const LeftNavBar = () => {
  const { isDisplayCreatePost } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  return (
    <div className="left-nav flex-dir-col">
      {isDisplayCreatePost && (
        <div className="create-post-modal">
          <CreatePost onClick={() => dispatch(setDisplayCreatePost(false))} />
        </div>
      )}
      <Link to="/" className="text-decoration-none">
        <span className="brandName posts-brandName">Developers Hub</span>
      </Link>
      <div>
        <div className="posts-nav-links">
          <StackedList />
          <button
            className="post-btn"
            onClick={() => dispatch(setDisplayCreatePost(!isDisplayCreatePost))}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export { LeftNavBar };
