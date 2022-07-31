import axios from "axios";

const updateComment = async (commentId, postId, editComment, replyComment) => {
  const token = localStorage.getItem("token");

  try {
    const {
      data: { comments },
    } = await axios.post(
      `/api/comments/edit/${postId}/${commentId}`,
      { editComment, replyComment },
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

export { updateComment };
