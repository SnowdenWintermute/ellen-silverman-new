import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import paintingList from "./paintingList";

class PaintingDetailedPage extends Component {
  state = {
    painting: {}
  };
  componentDidMount() {
    paintingList["Sheet1"].forEach(painting => {
      if (painting["Name"] === this.props.paintingName) {
        this.setState({ painting });
      }
    });
  }
  render() {
    const { painting } = this.state;
    return (
      <div className="painting-details-page">
        <div className="painting-details-content-holder">
          <div className="painting-details-img-holder">
            <img
              src={`/img/${this.props.category}/${this.props.paintingName}.jpg`}
            />
          </div>
          <section className="painting-details-text-box">
            <div className="painting-title">{painting["Name"]}</div>
            <div className="painting-detail-text">Original Painting</div>
            <div className="painting-detail-text">
              Size, unframed: {painting["Size"]}
            </div>
            <div className="painting-detail-text">
              Painted {painting["Year"]}
            </div>
            <Link className="standard-link" onClick={this.props.history.goBack}>
              View other paintings in the {painting["Category"]} series
            </Link>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(PaintingDetailedPage);
