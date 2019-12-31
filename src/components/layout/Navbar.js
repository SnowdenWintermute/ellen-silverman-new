import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div id="nav-spacer"></div>
        <div className="nav" id="topMenu">
          <label className="hamburger" htmlFor="toggle">
            &#9776;
          </label>
          <input type="checkbox" id="toggle" />
          <div className="menu">
            <Link to="/artworks">Artworks</Link>
            <Link to="/exhibitions">Exhibitions</Link>
            <Link to="/cv">CV</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}
