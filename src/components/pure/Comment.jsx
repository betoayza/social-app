import React from "react";

export const Comment = ({ comment }) => {
  return (
    <div>
      <p>
        @{comment.user.username}: {comment.message}
      </p>
    </div>
  );
};
