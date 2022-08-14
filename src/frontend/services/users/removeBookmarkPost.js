import axios from "axios";

const removeBookmarkPost = async (postId) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return data;
  } catch (e) {
    console.error("Error in removing bookmarked post:", e);
    return [];
  }
};

export { removeBookmarkPost };
