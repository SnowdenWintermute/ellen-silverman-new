import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { ReactComponent as HomeIcon } from "../../home.svg";

import HamburgerMenu from "react-hamburger-menu";
import Swipe from "react-easy-swipe";

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

  hideMenu = () => {
    console.log("hideMenu");
    this.setState({ hamburgerMenuShowing: false });
  };

  render() {
    const { width, hamburgerMenuShowing } = this.state;
    let homeButtonContent, navClass;

    if (width < 700) {
      homeButtonContent = "Home";
    } else {
      homeButtonContent = <HomeIcon className="home-button-icon"></HomeIcon>;
    }

    if (!hamburgerMenuShowing) navClass = "menu";
    else navClass = "menu-show";

    return (
      <div>
        <Swipe onSwipeUp={this.hideMenu} onSwipeDown={this.showOrHideMenu}>
          <div id="nav-spacer"></div>
          <div className="nav" id="topMenu">
            <div id="top-bar"></div>
            <div id="hamburger">
              <HamburgerMenu
                isOpen={hamburgerMenuShowing}
                menuClicked={this.showOrHideMenu}
                width={50}
                height={35}
                strokeWidth={4}
                rotate={0}
                color="black"
                borderRadius={5}
                animationDuration={0.3}
              ></HamburgerMenu>
            </div>
            <div className={navClass}>
              <Link id="home-button-link" to="/" onClick={this.hideMenu}>
                {homeButtonContent}
              </Link>
              <Link to="/artworks" onClick={this.hideMenu}>
                Artworks
              </Link>
              <Link to="/exhibitions" onClick={this.hideMenu}>
                Exhibitions
              </Link>
              <Link to="/About" onClick={this.hideMenu}>
                About
              </Link>
              <Link to="/contact" onClick={this.hideMenu}>
                Contact
              </Link>
            </div>
          </div>
        </Swipe>
      </div>
    );
  }
}
