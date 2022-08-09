import axios from "axios";

const increaseLikeCount = async (commentId, postId) => {
  const token = localStorage.getItem("token");

  try {
    const {
      data: { comments },
    } = await axios.post(
      `/api/comments/upvote/${postId}/${commentId}`,
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

export { increaseLikeCount };
