import React from "react";
import { ListPosts } from "../../components/pure/ListPosts";

export const Home = () => {
  return (
    <div className="text-center">
      <h1>Home</h1>
      <div className={"d-flex justify-content-center"}>
        <ListPosts />
      </div>
    </div>
  );
};
