import { useEffect } from "react";
import { StartPost, Post } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayCreatePost, savePosts } from "../../redux/slices/postsSlice";
import { getAllPosts } from "../../services";
import "./PostsContent.css";

const PostsContent = () => {
  const { isDisplayCreatePost, posts } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const userPosts = await getAllPosts();
      dispatch(savePosts(userPosts));
    })();
  }, []);

  return (
    <div className="posts-middle-sec flex-dir-col">
      <StartPost
        onClick={() => {
          dispatch(setDisplayCreatePost(!isDisplayCreatePost));
        }}
      />
      <div className="multiple-posts flex-dir-col">
        {posts.length > 0 &&
          posts
            .map((postdetails) => {
              return <Post postDetails={postdetails} />;
            })
            .reverse()}
      </div>
    </div>
  );
};

export { PostsContent };
