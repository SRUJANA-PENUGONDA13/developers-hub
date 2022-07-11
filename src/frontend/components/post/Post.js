import { AvatarWithName } from "../index";
import { useState, useEffect } from "react";
import { updateLikedPosts } from "../../services";
import { useSelector } from "react-redux";
import { savePosts } from "../../redux/slices/postsSlice";
import "./Post.css";

const Post = ({ postDetails }) => {
  const { name, content, likes, username } = postDetails;
  const [likeState, setLikeState] = useState(false);
  const [totalLikes, setTotalLikes] = useState("");
  const { userDetails } = useSelector((state) => state.user);
  const { posts } = useSelector((store) => store.posts);
  const postOwner = { firstName: name, username: username };

  const updateLikes = (likesDetails) => {
    if (likesDetails.likeCount > 0) {
      setTotalLikes(likesDetails.likeCount);
    } else {
      setTotalLikes("");
    }

    if (isUserLikedPostBefore(likesDetails.likedBy, userDetails.username)) {
      setLikeState(true);
    } else {
      setLikeState(false);
    }
  };

  const likeBtnHandler = async () => {
    setLikeState(!likeState);
    const postsData = await updateLikedPosts(postDetails._id);

    postsData.forEach((post) => {
      if (post.id === postDetails.id) {
        updateLikes(post.likes);
      }
    });
    savePosts(postsData);
  };

  const isUserLikedPostBefore = (likedUsers, currentUser) => {
    let flag = false;
    likedUsers.forEach((user) => {
      if (user.username === currentUser) {
        flag = true;
      }
    });
    return flag;
  };

  useEffect(() => {
    updateLikes(likes);
  }, [likes]);

  return (
    <div className="post-container flex-dir-col">
      <div className="post-nav-sec flex-dir-row">
        <div className="post-nav-left-sec flex-dir-row">
          <AvatarWithName user={postOwner} />
        </div>
        <button className="post-control">
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
      </div>
      <div className="post-main-sec">
        <p>{content}</p>
      </div>
      <div className="post-footer-sec flex-dir-row">
        {likeState ? (
          <button
            className="post-solid-like-btn flex-dir-row"
            onClick={() => likeBtnHandler()}
          >
            <i style={{ color: "#ff0000" }} className="fa-regular fa-heart"></i>
            <span className="likes-count">{totalLikes}</span>
          </button>
        ) : (
          <button
            className="post-like-btn flex-dir-row"
            onClick={() => likeBtnHandler()}
          >
            <i className="fa-regular fa-heart"></i>
            <span className="likes-count">{totalLikes}</span>
          </button>
        )}
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
