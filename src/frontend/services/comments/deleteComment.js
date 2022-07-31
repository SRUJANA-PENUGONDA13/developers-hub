import axios from "axios";

const deleteComment = async (commentId, postId) => {
  const token = localStorage.getItem("token");

  try {
    const {
      data: { comments },
    } = await axios.post(
      `/api/comments/delete/${postId}/${commentId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return comments;
  } catch (e) {
    console.error("Error in deleting comment from DB:", e);
    return [];
  }
};

export { deleteComment };
