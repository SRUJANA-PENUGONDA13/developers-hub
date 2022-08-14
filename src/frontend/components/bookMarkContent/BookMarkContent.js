import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../components";
import "./BookMarkContent.css";

const BookMarkContent = () => {
  const { userDetails } = useSelector((state) => state.user);

  return userDetails?.bookmarks.length > 0 ? (
    <div className="boomark-content flex-dir-col">
      {userDetails?.bookmarks
        .map((postdetails) => {
          return <Post postDetails={postdetails} />;
        })
        .reverse()}
    </div>
  ) : (
    <div className="boomark-content">No saved posts to display</div>
  );
};

export { BookMarkContent };
