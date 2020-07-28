import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import LockOpenTwoToneIcon from "@material-ui/icons/LockOpenTwoTone";
import PersonAddTwoToneIcon from "@material-ui/icons/PersonAddTwoTone";

function Nav() {
  const navColor = {
    color: "white",
  };

  return (
    <nav>
      <ul>
        <Link style={navColor} to="/home">
          <li>
            <HomeTwoToneIcon /> Home
          </li>
        </Link>
        <Link style={navColor} to="/login">
          <li>
            <LockOpenTwoToneIcon /> Login
          </li>
        </Link>
        <Link style={navColor} to="/register">
          <li>
            {" "}
            <PersonAddTwoToneIcon /> Registration
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
