import axios from "axios";

const updateLikedPosts = async (postId) => {
  const token = localStorage.getItem("token");
  const apiUrl = "/api/user/posts";

  try {
    const {
      data: { posts },
    } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return posts;
  } catch (e) {
    console.error("Error in updating data into DB:", e);
    return [];
  }
};

export { updateLikedPosts };
