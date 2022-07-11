import axios from "axios";

const followUser = async (username) => {
  const token = localStorage.getItem("token");

  try {
    const { data } = await axios.post(
      `/api/users/follow/${username}/`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return data;
  } catch (e) {
    console.error("Error in updating data into DB:", e);
    return {};
  }
};

export { followUser };
