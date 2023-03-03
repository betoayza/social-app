import React from "react";

export const Friend = ({ friend }) => {
  return (
    <div className={"form-control"}>
      <img src="" alt="ImgFriend" />
      <br />
      <a href="#">@{friend.username}</a>
    </div>
  );
};
