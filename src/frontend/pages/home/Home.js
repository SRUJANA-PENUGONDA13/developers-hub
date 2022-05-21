import { Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Signin } from "../../components";

import "./Home.css";

const Home = () => {
  return (
    <div className="container flex-dir-col">
      <nav className="top-nav flex-dir-row">
        <span className="brandName">Developers Hub</span>
        <Link to="/signin" className="signin-link text-decoration-none">
          Signin
        </Link>
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
