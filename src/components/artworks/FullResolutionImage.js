import React, { Component } from "react";

class FullResolutionImage extends Component {
  render() {
    const { params } = this.props.match;
    return (
      <React.Fragment>
        <img src={`/img/${params.category}/${params.painting}`}></img>
      </React.Fragment>
    );
  }
}

export default FullResolutionImage;
