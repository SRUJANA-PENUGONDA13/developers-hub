import { Signin, Navbar } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container flex-dir-col">
      <Navbar />
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
