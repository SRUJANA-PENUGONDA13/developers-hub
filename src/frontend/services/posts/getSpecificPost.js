import axios from "axios";

const getSpecificPost = async (postId) => {
  try {
    const {
      data: { post },
    } = await axios.get(`/api/posts/${postId}`);

    return post;
  } catch (e) {
    console.error("Error in getting data from DB:", e);
    return {};
  }
};

export { getSpecificPost };
