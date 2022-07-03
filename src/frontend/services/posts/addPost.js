import axios from "axios";

const addPost = async (postData) => {
  const token = localStorage.getItem("token");
  try {
    const {
      data: { posts },
    } = await axios.post(
      `/api/user/posts`,
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

export { addPost };
