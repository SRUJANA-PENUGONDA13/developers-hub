import { useEffect, useState } from "react";
import { StartPost, Post } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayCreatePost, savePosts } from "../../redux/slices/postsSlice";
import { getAllPosts } from "../../services";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./PostsContent.css";

const PostsContent = () => {
  const { isDisplayCreatePost, posts } = useSelector((store) => store.posts);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      let userPosts = await getAllPosts();
      dispatch(savePosts(userPosts));
    })();
  }, []);

  useEffect(() => {
    const userPosts = posts.filter(
      (post) =>
        userDetails?.followers?.some((p) => p?.username === post?.username) ||
        userDetails?.following?.some((p) => p?.username === post?.username) ||
        userDetails?.username === post.username
    );

    setFilteredPosts(userPosts);
  }, [posts]);

  return (
    <div className="posts-middle-sec flex-dir-col">
      <StartPost
        onClick={() => {
          dispatch(setDisplayCreatePost(!isDisplayCreatePost));
        }}
      />
      {filteredPosts.length > 0 ? (
        <div className="posts-tabs flex-dir-row">
          <Tabs size="md" variant="enclosed" colorScheme="white">
            <TabList mb="1em" className="tablist flex-dir-row">
              <Tab className="tab-btn">Trending</Tab>
              <Tab className="tab-btn">Latest</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="multiple-posts flex-dir-col">
                  {filteredPosts.length > 0 &&
                    [
                      ...filteredPosts.filter(
                        (post) =>
                          post?.likes?.likeCount > 0 ||
                          post?.comments?.length > 0
                      ),
                    ]
                      .sort((a, b) => {
                        return (
                          b?.likes?.likeCount +
                          b?.comments?.length -
                          (a?.likes?.likeCount + a?.comments?.length)
                        );
                      })
                      .map((postdetails) => {
                        return <Post postDetails={postdetails} />;
                      })}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="multiple-posts flex-dir-col">
                  {filteredPosts.length > 0 &&
                    [...filteredPosts]
                      .sort((a, b) => {
                        return (a, b) =>
                          new Date(b.createdAt) - new Date(a.createdAt);
                      })
                      .map((postdetails) => {
                        return <Post postDetails={postdetails} />;
                      })
                      .reverse()}
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      ) : (
        <div>
          No posts yet visit{" "}
          <Link to="/explore" className="explore-link">
            explore
          </Link>{" "}
          to see other users posts
        </div>
      )}
    </div>
  );
};

export { PostsContent };
