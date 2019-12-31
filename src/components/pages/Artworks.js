import React, { Component } from "react";

import PaintingCategoryCard from "../paintings/PaintingCategoryCard";

import paintingList from "./paintingList";
import getCategoryListWithCoverImages from "../utils/getCategoryListWithCoverImages";

export default class Artworks extends Component {
  render() {
    const categoryListWithCoverImages = getCategoryListWithCoverImages(
      paintingList.Sheet1
    );
    console.log(categoryListWithCoverImages);
    let cards = [];
    categoryListWithCoverImages.forEach(item => {
      cards.push(
        <PaintingCategoryCard
          imgSrc={{
            uri: item.coverImg
          }}
          picTitle={item.category}
          linkTo={`/artworks/${item.category}`}
        />
      );
    });
    return <div className="galleryHolder">{cards}</div>;
  }
}
