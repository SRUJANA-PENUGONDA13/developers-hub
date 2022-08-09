import { useEffect } from "react";
import { StartPost, Post } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayCreatePost, savePosts } from "../../redux/slices/postsSlice";
import { getAllPosts } from "../../services";
import "./ExploreContent.css";

const ExploreContent = () => {
  const { isDisplayCreatePost, posts } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const userPosts = await getAllPosts();
      dispatch(savePosts(userPosts));
    })();
  }, []);

  return (
    <div className="explore-conent">
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

export { ExploreContent };
