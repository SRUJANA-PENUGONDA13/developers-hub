import axios from "axios";

const updateUserData = async (userData) => {
  const token = localStorage.getItem("token");
  try {
    const {
      data: { user },
    } = await axios.post(
      `/api/users/edit`,
      { userData },
      {
        headers: { authorization: token },
      }
    );
    return user;
  } catch (e) {
    console.error("Error in updating data into DB:", e);
    return {};
  }
};

export { updateUserData };
