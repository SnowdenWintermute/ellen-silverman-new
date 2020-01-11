import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {
  Magnifier,
  MagnifierContainer,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";

import paintingList from "./paintingList";

class PaintingDetailedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      painting: {}
    };
  }
  componentDidMount() {
    paintingList["Sheet1"].forEach(painting => {
      if (painting["Name"] === this.props.paintingName) {
        this.setState({ painting });
      }
    });
  }

  render() {
    const { painting } = this.state;
    let paintingCost;
    if (painting["Cost unframed"] && painting["Cost unframed"] !== "sold") {
      paintingCost = `Cost unframed: ${painting["Cost unframed"]}`;
    } else if (painting["Cost unframed"]) {
      paintingCost = "Sold";
    } else {
      paintingCost = "";
    }

    return (
      <div className="painting-details-page">
        <div className="painting-details-content-holder">
          <MagnifierContainer className="painting-details-img">
            <SideBySideMagnifier
              imageSrc={`/img/${this.props.category}/${this.props.paintingName}.jpg`}
              alwaysInPlace={true}
            ></SideBySideMagnifier>
          </MagnifierContainer>
          {/* <img
            className={"painting-details-img"}
            src={`/img/${this.props.category}/${this.props.paintingName}.jpg`}
            alt={this.props.paintingName}
          /> */}
          <div className="painting-details-text-box">
            <div className="painting-title">{painting["Name"]}</div>
            <div className="painting-detail-text">Original Painting</div>
            <div className="painting-detail-text">
              Size, unframed: {painting["Size"]}
            </div>
            <div className="painting-detail-text">
              Painted {painting["Year"]}
            </div>
            <div className="painting-detail-text">{paintingCost}</div>
            <Link
              className="standard-link"
              to={`/img/${painting["Category"]}/${painting["Name"]}.jpg`}
            >
              View Full Resolution
            </Link>
            <br></br>
            <Link
              to={`/artworks/${this.props.category}`}
              className="standard-link"
            >
              View other paintings in the {painting["Category"]} series
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PaintingDetailedPage);
