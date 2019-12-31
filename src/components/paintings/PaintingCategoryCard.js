import React from "react";
import { Link } from "react-router-dom";

export default function PaintingCategoryCard(props) {
  return (
    <div className="galleryPicHolder">
      <Link to={props.linkTo ? props.linkTo : ""}>
        <img src={props.imgSrc.uri} />
      </Link>
      <div className="galleryPicInfoText" id="190">
        <div className="galleryPicTitle">{props.picTitle}</div>
        <div className="galleryPicSize">{props.picSize}</div>
        <div className="galleryPicPrice">{props.price} </div>
      </div>
    </div>
  );
}
