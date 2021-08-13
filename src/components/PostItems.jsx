import React from "react";
import "../styles/PostItems.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
const PostItems = ({
  title,
  discription,
  url,
  thumbnailUrl,
  Time,
  Likes,
  share,
}) => {
  // console.log("image>>", image);
  // console.log("bsbbxs>>", title);
  return (
    <div className="maincontainerpost" style={{}}>
      <div className="header">
        <img src={thumbnailUrl} className="profilepicture" />
        <div className="titles">
          <p>{title}</p>
          <p>{Time}</p>
        </div>
        <MoreVertIcon />
      </div>
      <div className="discription">
        <p>{discription}</p>
      </div>
      <div className="images">
        <img src={url} style={{ borderRadius: "10px" }} />
      </div>
      <div className="icons">
        <div className="likes">
          <FavoriteBorderIcon />
          <p> {Likes}</p>
        </div>
        <div className="share">
          <ShareIcon />
          <p>{share}</p>
        </div>
      </div>
    </div>
  );
};
export default PostItems;
