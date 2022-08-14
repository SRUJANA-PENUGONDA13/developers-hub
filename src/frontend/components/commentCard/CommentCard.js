import { AvatarWithName } from "../../components";
import { useSelector } from "react-redux";
import { Input, Button } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useOutsideClickHandler } from "../../custom-hooks/OutsideClickHandler";
import "./CommentCard.css";

const CommentCard = ({
  comment,
  reply,
  editComment,
  deleteComment,
  increaseLikeCount,
  decreaseLikeCount,
}) => {
  let data = comment ? comment : reply ? reply : "";
  const votes = data?.votes > 0 ? data.votes : "";
  const [likeState, setLikeState] = useState(false);
  const { userDetails } = useSelector((state) => state.user);
  const [openMenu, setOpenMenu] = useState(false);
  const [displayReply, setReply] = useState(false);
  const [displayEdit, setEdit] = useState(false);
  const [commentText, setCommentText] = useState(data.content);
  const [replyText, setReplyText] = useState("");
  const ref = useRef();
  const { resetMenu } = useOutsideClickHandler(ref);

  useEffect(() => {
    if (resetMenu) {
      setOpenMenu(false);
    }
  }, [resetMenu]);

  return (
    <div className="comment-card flex-dir-col">
      <div className="comment-nav flex-dir-row">
        <AvatarWithName user={data.user} />
        {!reply && data?.user?.username === userDetails?.username && (
          <div className="ellipsis-icon" onClick={() => setOpenMenu(!openMenu)}>
            <button className="comment-control">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            {openMenu && (
              <div className="comment-menu flex-dir-col" ref={ref}>
                <div
                  onClick={() => {
                    setEdit(!displayEdit);
                  }}
                >
                  <button className="comment-control comment-menu-btn flex-dir-row">
                    <i class="fa-regular fa-edit"></i>
                    Edit
                  </button>
                </div>
                <div onClick={() => deleteComment(comment._id)}>
                  <button className="comment-control comment-menu-btn flex-dir-row">
                    <i class="fa-regular fa-trash-alt"></i>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="comment-main">
        {displayEdit ? (
          <div className="edit-box flex-dir-col">
            <Input
              className="edit-text"
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
            />
            <div className="edit-btn-controls flex-dir-row">
              <Button
                className="edit-cancel-btn"
                size="sm"
                onClick={() => {
                  setEdit(!displayEdit);
                  setCommentText(data.content);
                }}
              >
                Cancel
              </Button>
              <Button
                className="edit-post-btn"
                size="sm"
                onClick={() => {
                  editComment(comment._id, commentText);
                  setEdit(!displayEdit);
                }}
              >
                Post
              </Button>
            </div>
          </div>
        ) : (
          data?.content
        )}
      </div>
      {comment && (
        <div className="comment-footer flex-dir-col">
          <div className="comment-controls flex-dir-row">
            {likeState ? (
              <button
                className="comment-solid-like-btn flex-dir-row"
                onClick={() => {
                  decreaseLikeCount(comment._id);
                  setLikeState(!likeState);
                }}
              >
                <i
                  style={{ color: "#ff0000" }}
                  className="fa-regular fa-heart"
                ></i>
                <span className="likes-count">{votes}</span>
              </button>
            ) : (
              <button
                className="comment-like-btn flex-dir-row"
                onClick={() => {
                  increaseLikeCount(comment._id);
                  setLikeState(!likeState);
                }}
              >
                <i className="fa-regular fa-heart"></i>
                <span className="likes-count">{votes}</span>
              </button>
            )}
            <button
              className="comment-reply-btn"
              onClick={() => setReply(!displayReply)}
            >
              Reply
            </button>
          </div>
          {displayReply && (
            <div className="reply-box flex-dir-col">
              <Input
                className="reply-text"
                placeholder="Enter your reply"
                onChange={(event) => setReplyText(event.target.value)}
              />
              <div className="reply-btn-controls flex-dir-row">
                <Button
                  className="reply-cancel-btn"
                  size="sm"
                  onClick={() => setReply(!displayReply)}
                >
                  Cancel
                </Button>
                <Button
                  className="reply-post-btn"
                  size="sm"
                  placeholder="Enter your reply"
                  onClick={() => {
                    editComment(comment._id, "", replyText);
                    setReply(!displayReply);
                  }}
                >
                  Post
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { CommentCard };
