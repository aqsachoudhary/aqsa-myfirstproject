import React from "react";
import "../../styles/Home.css";
import HomeCard from "./components/HomeCard";
import HomeChart1 from "./components/HomeChart1";

const Home = () => {
  return (
    <div className="home">
      <div className="topContiner">
        <HomeCard title={"Users"} description={"$1000"} />

        <HomeCard title={"Users"} description={"$2000"} />

        <HomeCard title={"Users"} description={"$3000"} />
      </div>

      <div className="GraphInfo">
        <HomeChart1 />
      </div>
    </div>
  );
};

export default Home;
