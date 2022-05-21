import { Signup } from "../../components";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <div className="signupPage-container flex-center-box flex-dir-col">
      <h1 className="brandName signup-brandName">Developers Hub</h1>
      <Signup />
    </div>
  );
};

export { SignupPage };
