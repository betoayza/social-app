import React from "react";
import { users } from "../../models/db";
import { Friend } from "./Friend";

export const ListFriends = () => {
  const friends = users[0].friends;

  return (
    <div className={"form-control container text-center mt-3"}>
      <h2>Friends</h2>
      <div className={"row row-cols-auto"}>
        {friends.length &&
          friends.map((friend) => {
            return <Friend key={friend.id} friend={friend} />;
          })}
      </div>
    </div>
  );
};
