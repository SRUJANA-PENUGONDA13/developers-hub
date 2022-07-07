import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  setHomePage,
  setExplorePage,
  setBookMarkPage,
  setProfilePage,
} from "../../redux/slices/navSlice";
import { useSelector, useDispatch } from "react-redux";
import "./StackedList.css";

const StackedList = () => {
  const dispatch = useDispatch();

  return (
    <div className="slist-container">
      <ul className="slist">
        <li>
          <Link
            to="/posts"
            className="list-item text-decoration-none flex-dir-row"
            onClick={() => dispatch(setHomePage(true))}
          >
            <span className="list-icon">
              <i className="fa-solid fa-house"></i>
            </span>
            <span className="list-name">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            className="list-item text-decoration-none flex-dir-row"
            onClick={() => dispatch(setExplorePage(true))}
          >
            <span className="list-icon">
              <i className="fa-solid fa-hashtag"></i>
            </span>
            <span className="list-name">Explore</span>
          </Link>
        </li>
        <li>
          <Link
            to="/bookmark"
            className="list-item text-decoration-none flex-dir-row"
            onClick={() => dispatch(setBookMarkPage(true))}
          >
            <span className="list-icon">
              <i className="fa-solid fa-bookmark"></i>
            </span>
            <span className="list-name">Bookmark</span>
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="list-item text-decoration-none flex-dir-row"
            onClick={() => dispatch(setProfilePage(true))}
          >
            <span className="list-icon">
              <i className="fa-solid fa-user"></i>
            </span>
            <span className="list-name">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { StackedList };
