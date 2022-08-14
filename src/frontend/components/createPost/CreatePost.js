import { AvatarWithName } from "../index";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, editPost } from "../../services";
import {
  setDisplayCreatePost,
  savePosts,
  setCurrentPost,
} from "../../redux/slices/postsSlice";

import "./CreatePost.css";

const CreatePost = ({ onClick }) => {
  const { currentPost } = useSelector((state) => state.posts);
  const [postData, setPostData] = useState(currentPost?.content);

  const modalTitle = !!currentPost ? "Edit Post" : "Create a post";
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);

  const savePostHandler = async () => {
    let posts = [];
    if (!currentPost) {
      posts = await addPost(postData);
    } else {
      posts = await editPost(postData, currentPost.id);
    }

    dispatch(setDisplayCreatePost(false));
    dispatch(savePosts(posts));
    dispatch(setCurrentPost(""));
  };

  return (
    <div className="create-post-container flex-dir-col">
      <h1 className="cp-title">{modalTitle}</h1>
      <hr></hr>
      <AvatarWithName user={userDetails} />
      <textarea
        className="post-input"
        placeholder="What do you want to talk about ?"
        rows="10"
        value={postData}
        onChange={(event) => setPostData(event.target.value)}
      ></textarea>
      <div className="create-post-footer flex-dir-row">
        <div className="create-post-media flex-dir-row">
          <Button className="image-btn" size="sm">
            <i class="far fa-image"></i>
          </Button>
          <Button className="emoji-btn" size="sm">
            <i class="fa-solid fa-face-smile"></i>
          </Button>
        </div>
        <div className="create-post-btns flex-dir-row">
          <Button
            className="create-post-btn"
            size="sm"
            onClick={() => savePostHandler()}
          >
            Post
          </Button>
          <Button className="create-post-btn" size="sm" onClick={onClick}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export { CreatePost };
