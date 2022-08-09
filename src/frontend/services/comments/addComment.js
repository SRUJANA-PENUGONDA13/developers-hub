import axios from "axios";

const addComment = async (commentData, postId) => {
  const token = localStorage.getItem("token");
  try {
    const {
      data: { comments },
    } = await axios.post(
      `/api/comments/add/${postId}`,
      { commentData },
      {
        headers: { authorization: token },
      }
    );

    return comments;
  } catch (e) {
    console.error("Error in adding comment to DB:", e);
    return [];
  }
};

export { addComment };
