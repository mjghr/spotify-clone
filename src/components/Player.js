import React from "react";
import "../stylesheets/Player.css";
import Body from "./Body";
import Footer from "./Footer";
import SideBar from "./SideBar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        {/* side bar */}
        <SideBar />

        {/* body */}
        <Body spotify={spotify} />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Player;
