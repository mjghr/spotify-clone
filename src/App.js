import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./components/spotify";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getCategories().then((categories) => {
        dispatch({
          type: "SET_CATEGORIES",
          categories: categories,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcHG1BcqYbTN4").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discoverWeekly: response,
        });
      });
    }
    // console.log("I HAVE A TOKEN ==>> ", _token);
  }, []);
  // console.log("user : ", user);
  // console.log("token : ", token);

  return (
    <div className="app">
      {token ? <Player spotify /> : <Login />}

      {/* <Login /> */}
    </div>
  );
}

export default App;
