import { getAllPosts } from "./getAllPosts";
const getSpecificUserPosts = async (username) => {
  const posts = await getAllPosts();
  const filteredPosts = [];

  posts.forEach((post) => {
    if (post.username === username) {
      filteredPosts.push(post);
    }
  });
  return filteredPosts;
};

export { getSpecificUserPosts };
