import React from "react";
import "../stylesheets/BodyHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";

function BodyHeader({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon className="header__left__searchIcon" />
        <input
          placeholder="Search for Artists, Songs, or Podcasts"
          type="text"
          className="header__searchInput"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4 className="header__username">{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default BodyHeader;
