import axios from "axios";

const signupService = async ({ name, username, password }) => {
  try {
    const {
      data: { encodedToken },
    } = await axios.post(`/api/auth/signup`, {
      firstName: name,
      username: username,
      password: password,
    });

    return encodedToken;
  } catch (e) {
    console.error(e);
    return "";
  }
};
export { signupService };
