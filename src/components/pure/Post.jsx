import React from "react";

export const Post = ({ post }) => {
  return (
    <div>
      <p>
        Posted by {post.user.username} at {post.user.date}
      </p>
      <img src="" alt="Image" />
      <div className={"d-flex"}>
        <button>Like it</button>
        <button>Dont Like</button>
        <button>Share</button>
      </div>
      <div>
        <p>Emotions</p>
      </div>
      <div>
        <p>Comments</p>
        {post.comments.map /
          ((comment) => {
            return comment ? <Comment /> : <p>No comments :(</p>;
          })}
      </div>
    </div>
  );
};
