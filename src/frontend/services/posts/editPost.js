import axios from "axios";

const editPost = async (postData, postId) => {
  const token = localStorage.getItem("token");

  try {
    const {
      data: { posts },
    } = await axios.post(
      `/api/posts/edit/${postId}`,
      { postData },
      {
        headers: { authorization: token },
      }
    );

    return posts;
  } catch (e) {
    console.error("Error in storing data into DB:", e);
    return [];
  }
};

export { editPost };
