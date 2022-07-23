import axios from "axios";

const getAllUsers = async () => {
  try {
    const {
      data: { users },
    } = await axios.get(`/api/users`);
    return users;
  } catch (e) {
    console.error("Error in storing data into DB:", e);
    return [];
  }
};

export { getAllUsers };
