import { CommentCard } from "../../components";
import { Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  addComment,
  deleteComment,
  updateComment,
  increaseLikeCount,
  decreaseLikeCount,
} from "../../../frontend/services";
import "./CommentList.css";

const CommentList = ({ comments, postId }) => {
  const [commentText, setCommentText] = useState("");
  let [comntList, setComntList] = useState(comments);

  const addCommentHandler = async () => {
    const data = await addComment(commentText, postId);
    setComntList(data);
  };

  const editCommentHandler = async (commentId, comment, reply) => {
    const data = await updateComment(commentId, postId, comment, reply);
    setComntList(data);
  };

  const deleteCommentHandler = async (commentId) => {
    const data = await deleteComment(commentId, postId);
    setComntList(data);
  };

  const increaseLikeCountHandler = async (commentId) => {
    const data = await increaseLikeCount(commentId, postId);
    setComntList(data);
  };

  const decreaseLikeCountHandler = async (commentId) => {
    const data = await decreaseLikeCount(commentId, postId);
    setComntList(data);
  };

  useEffect(() => {}, [comntList]);

  return (
    <>
      {comntList &&
        comntList.length > 0 &&
        comntList.map((comment) => {
          return (
            <>
              <CommentCard
                comment={comment}
                editComment={editCommentHandler}
                deleteComment={deleteCommentHandler}
                increaseLikeCount={increaseLikeCountHandler}
                decreaseLikeCount={decreaseLikeCountHandler}
              />
              {comment?.replies &&
                comment.replies.length > 0 &&
                comment.replies
                  .map((reply) => {
                    return (
                      <div className="replies">
                        <CommentCard
                          reply={reply}
                          editComment={editCommentHandler}
                          deleteComment={deleteCommentHandler}
                        />
                      </div>
                    );
                  })
                  .reverse()}
            </>
          );
        })}
      <div className="comment-box flex-dir-row">
        <Input
          className="comment-text"
          placeholder="Enter your reply"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <Button
          className="comment-post-btn"
          size="sm"
          onClick={() => addCommentHandler()}
        >
          Post
        </Button>
      </div>
    </>
  );
};

export { CommentList };
