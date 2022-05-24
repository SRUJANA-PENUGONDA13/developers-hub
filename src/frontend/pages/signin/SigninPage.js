import { Signin } from "../../components";
import { Link } from "react-router-dom";
import "./SigninPage.css";

const SigninPage = () => {
  return (
    <div className="signinPage-container flex-center-box flex-dir-col">
      <Link to="/" className="text-decoration-none">
        <span className="brandName">Developers Hub</span>
      </Link>
      <Signin />
    </div>
  );
};

export { SigninPage };
