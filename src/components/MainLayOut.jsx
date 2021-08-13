import React from "react";

import "../styles/MainLayOut.css";

import SideBarItem from "./SideBarItem";

const MainLayOut = (props) => {
  console.log("props is", props);
  return (
    <div className="MainLayOutContainer">
      <div className="SideBar">
        <div className="SideBarContainer1">
          {/* <div className="ProfilePicture">
            <img class="logo" src="" alt="Logo" />
            <SideBarItem name={"Aqsa Choudhary"} />
          </div> */}
        </div>
        <div className="SideBarContainer2">
          <SideBarItem name={"Home"} path={"/home"} />
          <SideBarItem name={"Profile"} path={"/profile"} />
          <SideBarItem name={"Products"} path={"/products"} />
          <SideBarItem name={"Posts"} path={"/posts"} />
          <SideBarItem name={"Users"} path={"/users"} />
          <SideBarItem name={"Clients"} path={"/clients"} />
        </div>
      </div>
      <div className="MainContainer1">{props.children}</div>
    </div>
  );
};
export default MainLayOut;
