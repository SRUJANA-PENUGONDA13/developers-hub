import { AvatarWithName } from "../index";
import { useState, useEffect, useRef } from "react";
import { updateLikedPosts } from "../../services";
import { useSelector } from "react-redux";
import { savePosts } from "../../redux/slices/postsSlice";
import { getUserDetails } from "../../services";
import { useOutsideClickHandler } from "../../custom-hooks/OutsideClickHandler";
import "./Post.css";

const Post = ({ postDetails }) => {
  const { content, likes, username } = postDetails;
  const [likeState, setLikeState] = useState(false);
  const [totalLikes, setTotalLikes] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const { userDetails } = useSelector((state) => state.user);
  const [postOwner, setPostOwner] = useState({});

  const ref = useRef();
  const { resetMenu } = useOutsideClickHandler(ref);

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
    })();
  }, [postDetails, userDetails]);

  return (
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
                <div>
                  <button className="post-control post-menu-btn flex-dir-row">
                    <i class="fa-regular fa-bookmark"></i>
                    Save post
                  </button>
                </div>
                {username === userDetails.username && (
                  <>
                    <div>
                      <button className="post-control post-menu-btn flex-dir-row">
                        <i class="fa-regular fa-edit"></i>
                        Edit Post
                      </button>
                    </div>
                    <div>
                      <button className="post-control post-menu-btn flex-dir-row">
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
        <button className="post-share-btn">
          <i className="fa-solid fa-share 3x"></i>
        </button>
      </div>
    </div>
  );
};

export { Post };
