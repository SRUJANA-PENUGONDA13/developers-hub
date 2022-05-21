import { Signin } from "../../components";
import "./SigninPage.css";

const SigninPage = () => {
  return (
    <div className="signinPage-container flex-center-box flex-dir-col">
      <h1 className="brandName signin-brandName">Developers Hub</h1>
      <Signin />
    </div>
  );
};

export { SigninPage };
