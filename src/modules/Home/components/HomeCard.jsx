import React from "react";
import "../../../styles/Home.css";
const HomeCard = ({ title, description }) => {
  return (
    <div className="cardContainer">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default HomeCard;
