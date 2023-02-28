import React from "react";
import { Comment } from "./Comment";
import { Reaction } from "./Reaction";

export const Post = ({ post }) => {
  return (
    <div className={"border border-2 text-center rounded rounded-3 m-3 p-3 post"}>
      <p>
        Posted by <a href="#">@{post.username}</a> at {post.date}
      </p>
      {/* <img src="" alt="Image" /> */}
      <p>"{post.message}"</p>
      <div
        className={"text-center"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button className={"btn btn-outline-success"}>Like it</button>
        <button className={"btn btn-outline-danger"}>Dont Like</button>
        <button className={"btn btn-outline-primary"}>Share</button>
      </div>
      <div className="d-flex m-1 justify-content-center">
        {post.reactions.map((reaction) => {
          return <Reaction key={reaction.id} reaction={reaction} />;
        })}
      </div>
      <div
        className={"text-center container"}
        style={{ display: "grid", justifyContent: "center" }}
      >
        <input
          type="text"
          className={"form-control form-row mb-2"}
          placeholder={"Comment..."}
          style={{ fontStyle: "italic" }}
        />
        {post.comments.map((comment) => {
          return comment ? (
            <Comment key={comment.id} comment={comment} />
          ) : (
            <p>No comments :(</p>
          );
        })}
      </div>
    </div>
  );
};
