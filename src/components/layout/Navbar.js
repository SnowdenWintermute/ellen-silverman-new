import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { ReactComponent as HomeIcon } from "../../home.svg";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
      hamburgerMenuShowing: false
    };
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    if (window.innerWidth > 700) {
      console.log("closed hamburger menu");
      this.setState({ hamburgerMenuShowing: false });
    }
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  showOrHideMenu = () => {
    let { hamburgerMenuShowing } = this.state;
    if (hamburgerMenuShowing) hamburgerMenuShowing = false;
    else hamburgerMenuShowing = true;
    console.log(hamburgerMenuShowing);
    this.setState({ hamburgerMenuShowing });
  };

  render() {
    const { width, hamburgerMenuShowing } = this.state;
    let homeButtonContent, navClass;

    if (width < 700) {
      homeButtonContent = "Home";
    } else {
      homeButtonContent = (
        // <img className="home-button-icon" src="./home.png" alt="Home"></img>
        <HomeIcon className="home-button-icon"></HomeIcon>
      );
    }

    if (!hamburgerMenuShowing) navClass = "menu";
    else navClass = "menu-show";

    return (
      <div>
        <div id="nav-spacer"></div>
        <div className="nav" id="topMenu">
          <div id="top-bar"></div>
          <label
            onClick={this.showOrHideMenu}
            className="hamburger"
            htmlFor="toggle"
          >
            &#9776;
          </label>
          {/* <input type="checkbox" id="toggle" /> */}
          <div className={navClass}>
            <Link id="home-button-link" to="/">
              {homeButtonContent}
            </Link>
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
