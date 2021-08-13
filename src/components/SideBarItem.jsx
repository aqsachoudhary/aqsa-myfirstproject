import React from "react";
import { Link } from "react-router-dom";

import "../styles/SideBarItemsStyle.css";
const SideBarItem = ({ name, path }) => {
  return (
    <div className="headings">
      <Link to={path} className={"title"}>
        {name}
      </Link>
    </div>
  );
};

export default SideBarItem;
