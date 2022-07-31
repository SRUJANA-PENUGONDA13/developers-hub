import { LeftNavBar, RightNavBar, Post, CommentList } from "../../components";
import { useParams } from "react-router-dom";
import { Divider } from "@chakra-ui/react";
import { getSpecificPost } from "../../services";
import "./SinglePost.css";
import { useEffect, useState } from "react";

const SinglePost = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState();

  useEffect(() => {
    (async () => {
      const data = await getSpecificPost(postId);
      if (!!data && Object.keys(data).length > 0) {
        setPostDetails(data);
      }
    })();
  }, [postId]);

  return (
    <div className="single-post-container container">
      <LeftNavBar />
      <div className="inner-container">
        <div className="middle-sec flex-dir-col">
          {postDetails && (
            <>
              <Post postDetails={postDetails} />
              <Divider
                className="comment-sec-divider"
                orientation="horizontal"
              />
              <CommentList
                comments={postDetails.comments}
                postId={postDetails.id}
              />
            </>
          )}
        </div>

        <div className="right-nav">
          <RightNavBar />
        </div>
      </div>
    </div>
  );
};

export { SinglePost };
