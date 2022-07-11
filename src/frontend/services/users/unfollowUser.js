import axios from "axios";

const unfollowUser = async (username) => {
  const token = localStorage.getItem("token");
  console.log("Unfollow User: ");
  try {
    const { data } = await axios.post(
      `/api/users/unfollow/${username}/`,
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

export { unfollowUser };
