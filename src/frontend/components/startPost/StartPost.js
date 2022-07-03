import { Avatar, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./StartPost.css";
const StartPost = (props) => {
  return (
    <div className="start-post flex-dir-row">
      <Avatar src="https://bit.ly/dan-abramov" />
      <button className="sp-input" onClick={props.onClick}>
        Start a Post
      </button>
    </div>
  );
};

export { StartPost };
