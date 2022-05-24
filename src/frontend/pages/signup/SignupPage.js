import { Signup } from "../../components";
import { Link } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <div className="signupPage-container flex-center-box flex-dir-col">
      <Link to="/" className="text-decoration-none">
        <span className="brandName">Developers Hub</span>
      </Link>
      <Signup />
    </div>
  );
};

export { SignupPage };
