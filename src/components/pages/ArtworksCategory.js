import React, { Component } from "react";
import PaintingCategoryCard from "../paintings/PaintingCategoryCard";

import paintingList from "./paintingList";
import getPaintingsInCategory from "../utils/getPaintingsInCategory";

export default class ArtworksCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.match.params.category
    };
  }
  render() {
    const paintingsInCategory = getPaintingsInCategory(
      paintingList.Sheet1,
      this.props.match.params.category
    );
    let cards = [];
    paintingsInCategory.forEach((painting, i) => {
      cards.push(
        <PaintingCategoryCard
          imgSrc={{
            uri: `../img/${painting["Category"]}/${painting["Name"]}.jpg`
          }}
          picTitle={painting["Name"]}
          picSize={painting["Size"]}
          year={painting["Year"]}
          price={painting["Cost unframed"]}
          key={i}
        />
      );
    });
    return (
      <div>
        <div className="galleryHolder"> {cards}</div>
      </div>
    );
  }
}
