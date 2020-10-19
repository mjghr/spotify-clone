import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "../stylesheets/Body.css";
import BodyHeader from "./BodyHeader";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PlayCircleFilledWhite from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongsRow";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

function Body({ spotify }) {
  const [{ discoverWeekly }, dispatch] = useDataLayerValue();
  console.log(discoverWeekly);

  return (
    <div className="body">
      <BodyHeader spotify={spotify} />

      <div className="body__info">
        <img
          className="body__info__img"
          src={discoverWeekly?.images[0]?.url}
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discoverWeekly?.name}</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__songs__icons">
          <PlayCircleFilledIcon className="songs__icons__shuffle green" />
          <FavoriteIcon className="songs__icons__heart green" />
          <MoreHorizIcon className="songs__icons__horizon" />
        </div>

        <div className="bar">
          <p>#</p>
          <p>TITLE</p>
          <p>ALBUM</p>
          <p>DATE ADDED</p>
          <QueryBuilderIcon />
        </div>

        {/* list of songs */}
        <div className="body__songs__list">
          {discoverWeekly?.tracks.items.map((item) => (
            <SongRow item={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
