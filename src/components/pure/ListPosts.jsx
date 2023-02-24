import React from "react";
import { posts } from "../../models/db";
import { Post } from "../pure/Post";

export const ListPosts = () => {
  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};
