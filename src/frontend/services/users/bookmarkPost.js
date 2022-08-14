import axios from "axios";

const bookmarkPost = async (postId) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return data;
  } catch (e) {
    console.error("Error in bookmarking post:", e);
    return [];
  }
};

export { bookmarkPost };
