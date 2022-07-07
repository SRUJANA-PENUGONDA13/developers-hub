import axios from "axios";

const getAllPosts = async () => {
  try {
    const {
      data: { posts },
    } = await axios.get(`/api/posts/`);
    return posts;
  } catch (e) {
    console.error("Error in storing data into DB:", e);
    return [];
  }
};

export { getAllPosts };
