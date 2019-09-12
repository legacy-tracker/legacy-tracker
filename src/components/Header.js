import React from "react";
import "../styles/header.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <div>
      <div className="header-fixed">
        <h1>Legacy Tracker</h1>
        <div className="link-head">
          <Link
            activeClass="active"
            to="yeaaaaaaaa"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Game Schedule
          </Link>

          <Link
            activeClass="active"
            to="playboy"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            News
          </Link>
          <Link
            activeClass="active"
            to="stats-scroll"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Highlights
          </Link>
          <Link
            activeClass="active"
            to="chartssss"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Stats
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
