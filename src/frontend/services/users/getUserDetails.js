import axios from "axios";

const getUserDetails = async (userId) => {
  try {
    const {
      data: { user },
    } = await axios.get(`/api/users/${userId}`);

    return user;
  } catch (e) {
    console.error("Error in fetching data from DB:", e);
    return [];
  }
};

export { getUserDetails };
