import React, { useState, useEffect } from "react";
import PostItems from "../../components/PostItems";
import posts from "../../helper/posts";
const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    setPost(posts);
  }, [post]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "40%",
        marginLeft: "25%",
      }}
    >
      {/* <h1>Posts</h1> */}
      <div
        className="innercontainers"
        style={{ width: "100%", justifyContent: "center" }}
      >
        {posts.map((p) => (
          <PostItems
            title={p.title}
            discription={p.discription}
            url={p.url}
            thumbnailUrl={p.thumbnailUrl}
            Time={p.Time}
            Likes={p.Likes}
            share={p.share}
          />
          // console.log("PostItems :>> ", PostItems);
        ))}
      </div>
    </div>
  );
};

export default Post;
