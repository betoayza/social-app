import React from "react";
import { Comment } from "./Comment";
import { Reaction } from "./Reaction";

export const Post = ({ post }) => {
  return (
    <div
      className={
        "border border-2 border-dark text-center rounded rounded-3 m-3 p-3 post"
      }
    >
      <p style={{ color: "gray" }}>
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
      {
        // si hay mas de 2 reacciones
        post.reactions.length > 2 && (
          <div className="d-flex m-1 justify-content-center">
            {post.reactions.slice(0, 2).map((reaction) => {
              return <Reaction key={reaction.id} reaction={reaction} />;
            })}
            <p>...</p>
            <a href="#">{post.reactions.length - 2}more</a>
          </div>
        )
      }

      {
        // si hay hasta 2 elementos
        post.reactions.length <= 2 &&
          post.reactions.map((reaction) => {
            return <Reaction key={reaction.id} reaction={reaction} />;
          })
      }

      {!post.reactions.length && (
        <p style={{ color: "gray" }}>No reactions yet</p>
      )}

      <div
        className={"text-center container"}
        style={{ display: "grid", justifyContent: "center" }}
      >
        <input
          type="text"
          className={"form-control form-row mb-2 mt-2"}
          placeholder={"Comment..."}
          style={{ fontStyle: "italic" }}
        />
        <div className="mb-2">
          <button type="button" className={"btn btn-primary"}>
            Send
          </button>
        </div>

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
