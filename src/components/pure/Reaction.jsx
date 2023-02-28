import React from "react";
import Emoji from "react-emoji-render";

export const Reaction = ({ reaction }) => {
  return (
    <div className={"d-flex justify-content-center"}>
      <span>
        <Emoji text={reaction.emoji} />
      </span>
      <a href="#">{reaction.username}</a>
    </div>
  );
};
