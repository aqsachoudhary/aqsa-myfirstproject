import React from "react";

const PostItem = (props) => {
  return (
    <>
      <div
        style={{
          height: "300px",
          width: "500px",
          margin: "10px 0px",
          border: "solid 1px black",
        }}
      >
        <h3 style={{ position: "absolute" }}>{props.title}</h3>
        <img src={props.img} style={{ height: "100%", width: "100%" }} />
      </div>
    </>
  );
};
export default PostItem;
