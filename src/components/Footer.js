import React from "react";
import "../stylesheets/Footer.css";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import DevicesIcon from "@material-ui/icons/Devices";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://i1.sndcdn.com/artworks-000179073287-3ur3or-t500x500.jpg"
          alt=""
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h3 className="footer__songInfo__name">Closer</h3>
          <p className="footer__songInfo__artists">Halsey</p>
        </div>
        <div className="footer__heartIcon">
          <FavoriteBorderIcon className="footer__icon" />
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__icon__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="footer__icon play" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="footer__icon" />
          </Grid>
          <Grid item>
            <DevicesIcon className="footer__icon" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="footer__icon" />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
