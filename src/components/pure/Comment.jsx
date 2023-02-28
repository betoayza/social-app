import React from "react";

export const Comment = ({ comment }) => {
  return (
    <div
      className={"rounded"}
      style={{ display: "grid", placeItems: "center" }}
    >
      <p className={"text-break"}>
        <a href="#">@{comment.username}</a>:{" "}
        <span style={{ color: "gray" }}>{comment.message}</span>
      </p>
    </div>
  );
};
