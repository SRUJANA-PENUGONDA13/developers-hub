import { Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Signin } from "../../components";
import { useSelector } from "react-redux";
import "./Home.css";

const Home = () => {
  const { authentication } = useSelector((store) => store.auth);

  return (
    <div className="container flex-dir-col">
      <nav className="top-nav flex-dir-row">
        <Link to="/" className="text-decoration-none">
          <span className="brandName">Developers Hub</span>
        </Link>
        {authentication.isAuthenticated ? (
          <Link to="/" className="signout-link text-decoration-none">
            Signout
          </Link>
        ) : (
          <Link to="/signin" className="signin-link text-decoration-none">
            Signin
          </Link>
        )}
      </nav>
      <main className="main-body flex-dir-row">
        <div className="left-sec flex-dir-col">
          <p>
            Let's Learn <br></br> and <br></br> Grow Together
          </p>
          <p className="content-body">
            Developers hub helps to share our learnings <br></br> on new
            technologies and getting help from <br></br>each other.
          </p>
        </div>
        <div className="right-sec">
          <Signin />
        </div>
      </main>
    </div>
  );
};

export { Home };
