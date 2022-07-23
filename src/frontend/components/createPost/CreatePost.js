import { AvatarWithName } from "../index";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../services";
import { setDisplayCreatePost, savePosts } from "../../redux/slices/postsSlice";

import "./CreatePost.css";

const CreatePost = (props) => {
  const [postData, setPostData] = useState("");
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);

  const savePostHandler = async () => {
    const posts = await addPost(postData);
    dispatch(setDisplayCreatePost(false));
    dispatch(savePosts(posts));
  };

  return (
    <div className="create-post-container flex-dir-col">
      <h1 className="cp-title">Create a post</h1>
      <hr></hr>
      <AvatarWithName user={userDetails} />
      <textarea
        className="post-input"
        placeholder="What do you want to talk about ?"
        rows="10"
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
          <Button className="create-post-btn" size="sm" onClick={props.onClick}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export { CreatePost };
