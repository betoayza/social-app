import React from "react";
import { Comment } from "./Comment";
import { Reaction } from "./Reaction";

export const Post = ({ post }) => {
  return (
    <div className={"border text-center rounded m-3"}>
      <p>
        Posted by <a href="#">@{post.username}</a> at {post.date}
      </p>
      {/* <img src="" alt="Image" /> */}
      <p>"{post.message}"</p>
      <div
        className={"text-center border"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button className={"btn btn-light"}>Like it</button>
        <button className={"btn btn-light"}>Dont Like</button>
        <button className={"btn btn-light"}>Share</button>
      </div>
      <div>
        <p>Emotions:</p>
        {post.reactions.map((reaction) => {
          return <Reaction reaction={reaction} />;
        })}
      </div>
      <div
        className={"border text-center"}
        style={{ display: "grid", justifyContent: "center" }}
      >
        <p>Comments</p>
        <input type="text" className={"form-control form-row"} />
        {post.comments.map((comment) => {
          return comment ? <Comment /> : <p>No comments :(</p>;
        })}
      </div>
    </div>
  );
};
