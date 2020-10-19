import React from "react";
import "../stylesheets/SongRow.css";

function SongsRow({ item = "test" }) {
  return (
    <div className="songRow">
      <img
        className="songRow__trackImg"
        src={item.album.images[0].url}
        alt=""
      />
      <div className="songRow__info">
        <h1>{item.name}</h1>
        <p>
          {item.artists.map((artist) => artist.name).join(", ")} -{" "}
          {item.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongsRow;
