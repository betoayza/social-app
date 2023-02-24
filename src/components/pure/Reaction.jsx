import React from "react";

export const Reaction = ({ reaction }) => {
  return (
    <div>
      <p>{reaction.emoji}</p>
      <p>{reaction.username}</p>
    </div>
  );
};
