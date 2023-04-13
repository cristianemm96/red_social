import React from "react";
import { PostsList } from "./PostsList";

export const Posts = () => {
  //traer los posts
  const posts = [
    {
      user: 21,
      textContent:
        "sdsddddddddddddd sssssssss d rrrrrrrrr w sssssssssssss ffffffff ppppppp",
    },{
      user: 21,
      textContent:
        "sdsddddddddddddd d rrrrrrrrr w sssssssssssss ffffffff ppppppp",
    }
  ];
  return (
    <div
      style={{
        width: "70%",
        background: "gray",
        height: "600px",
        margin: "auto",
        marginTop: "25px",
      }}
    >
      <PostsList posts={posts} />
    </div>
  );
};
