import axios from "axios";

const deletePost = async (postId) => {
  const token = localStorage.getItem("token");

  try {
    const {
      data: { posts },
    } = await axios.delete(`/api/posts/${postId}`, {
      headers: { authorization: token },
    });

    return posts;
  } catch (e) {
    console.error("Error in deleting data from DB:", e);
    return [];
  }
};

export { deletePost };
