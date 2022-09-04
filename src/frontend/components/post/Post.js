import { AvatarWithName } from "../index";
import { useState, useEffect, useRef } from "react";
import {
  updateLikedPosts,
  bookmarkPost,
  removeBookmarkPost,
  getUserDetails,
  updateUserData,
  deletePost,
} from "../../services";
import { useSelector, useDispatch } from "react-redux";
import {
  savePosts,
  setCurrentPost,
  setDisplayCreatePost,
} from "../../redux/slices/postsSlice";
import { setUserDetails } from "../../redux/slices/userSlice";
import { useOutsideClickHandler } from "../../custom-hooks/OutsideClickHandler";
import { useNavigate } from "react-router-dom";

import "./Post.css";

const Post = ({ postDetails }) => {
  const { content, likes, username } = postDetails;
  const [likeState, setLikeState] = useState(false);
  const [totalLikes, setTotalLikes] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const { userDetails } = useSelector((state) => state.user);
  const [postOwner, setPostOwner] = useState({});
  const [bookmark, setBookmark] = useState(false);

  const ref = useRef();
  const { resetMenu } = useOutsideClickHandler(ref);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const savePostHandler = async () => {
    const data = await bookmarkPost(postDetails.id);
    setBookmark(true);
    const userData = await updateUserData(data);
    dispatch(setUserDetails(userData));
    setOpenMenu(false);
  };

  const removeSavePostHandler = async () => {
    console.log("removeSavePostHandler");
    const data = await removeBookmarkPost(postDetails.id);
    setBookmark(false);
    const userData = await updateUserData(data);
    dispatch(setUserDetails(userData));
    setOpenMenu(false);
  };

  const deletePostHandler = async () => {
    const data = await deletePost(postDetails.id);
    dispatch(savePosts(data));
    if (bookmark) removeSavePostHandler();
    setOpenMenu(false);
  };

  useEffect(() => {
    updateLikes(likes);
  }, [likes]);

  useEffect(() => {
    if (resetMenu) {
      setOpenMenu(false);
    }
  }, [resetMenu]);

  useEffect(() => {
    (async () => {
      const userData = await getUserDetails(username);
      if (userData) {
        setPostOwner(userData);
      }

      const isBookmarked = userDetails.bookmarks.some(
        (currPost) => currPost.id === postDetails.id
      );
      if (isBookmarked) setBookmark(true);
      else setBookmark(false);
    })();
  }, [postDetails]);

  return (
    userDetails && (
      <>
        <div className="post-container flex-dir-col">
          <div className="post-nav-sec flex-dir-row">
            <div className="post-nav-left-sec flex-dir-row">
              <AvatarWithName user={postOwner} />
            </div>
            <div className="ellipsis-icon">
              <button className="post-control">
                <i
                  class="fa fa-ellipsis-v"
                  aria-hidden="true"
                  onClick={() => setOpenMenu(!openMenu)}
                ></i>
              </button>
              {openMenu && (
                <>
                  <div className="post-menu flex-dir-col" ref={ref}>
                    {bookmark ? (
                      <div>
                        <button
                          className="post-control post-menu-btn flex-dir-row"
                          onClick={() => removeSavePostHandler()}
                        >
                          <i class="fa-regular fa-bookmark"></i>
                          Unsave post
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          className="post-control post-menu-btn flex-dir-row"
                          onClick={() => savePostHandler()}
                        >
                          <i class="fa-regular fa-bookmark"></i>
                          Save post
                        </button>
                      </div>
                    )}
                    {username === userDetails.username && (
                      <>
                        <div>
                          <button
                            className="post-control post-menu-btn flex-dir-row"
                            onClick={() => {
                              dispatch(setCurrentPost(postDetails));
                              dispatch(setDisplayCreatePost(true));
                            }}
                          >
                            <i class="fa-regular fa-edit"></i>
                            Edit Post
                          </button>
                        </div>
                        <div>
                          <button
                            className="post-control post-menu-btn flex-dir-row"
                            onClick={() => deletePostHandler()}
                          >
                            <i class="fa-regular fa-trash-alt"></i>
                            Delete Post
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="post-main-sec"
            onClick={() => navigate(`/post/${postDetails.id}`)}
          >
            <p>{content}</p>
          </div>
          <div className="post-footer-sec flex-dir-row">
            {likeState ? (
              <button
                className="post-solid-like-btn flex-dir-row"
                onClick={() => likeBtnHandler()}
              >
                <i
                  style={{ color: "#ff0000" }}
                  className="fa-regular fa-heart"
                ></i>
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
            <button
              className="post-comment-btn flex-dir-row"
              onClick={() => navigate(`/post/${postDetails.id}`)}
            >
              <i className="fa-regular fa-comment"></i>
              <span>{postDetails?.comments.length}</span>
            </button>
            <button className="post-share-btn">
              <i className="fa-solid fa-share 3x"></i>
            </button>
          </div>
        </div>
      </>
    )
  );
};

export { Post };
