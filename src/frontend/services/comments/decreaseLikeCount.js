import axios from "axios";

const decreaseLikeCount = async (commentId, postId) => {
  const token = localStorage.getItem("token");

  try {
    const {
      data: { comments },
    } = await axios.post(
      `/api/comments/downvote/${postId}/${commentId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return comments;
  } catch (e) {
    console.error("Error in updating comment in DB:", e);
    return [];
  }
};

export { decreaseLikeCount };
