import axios from "axios";

const signinService = async ({ username, password }) => {
  const foundUser = "";
  const encodedToken = "";

  try {
    const {
      data: { foundUser, encodedToken },
    } = await axios.post(`/api/auth/login`, {
      username: username,
      password: password,
    });

    return { foundUser, encodedToken };
  } catch (e) {
    console.error("Error: ", e);
    return {};
  }
};
export { signinService };
