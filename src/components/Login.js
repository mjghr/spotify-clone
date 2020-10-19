import React from "react";
import "../stylesheets/Login.css";
import { loginUrl } from "./spotify";
import CopyrightIcon from "@material-ui/icons/Copyright";

const date = new Date();

function Login() {
  console.log(date.getFullYear());
  return (
    <div className="login">
      {/* Spotify logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <div className="copyRight">
        <CopyrightIcon />
        <p>{date.getFullYear()} | MjGhr </p>
      </div>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      {/* Login buttons */}
    </div>
  );
}

export default Login;
