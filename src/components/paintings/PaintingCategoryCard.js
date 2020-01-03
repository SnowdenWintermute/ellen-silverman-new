import React from "react";
import { Link } from "react-router-dom";

export default function PaintingCategoryCard(props) {
  return (
    <div className="galleryPicHolder">
      <Link
        to={
          props.linkTo
            ? props.linkTo
            : `/artworks/${props.category}/${props.picTitle}/`
        }
      >
        <img src={props.imgSrc.uri} alt={props.picTitle} />
      </Link>
      <div className="galleryPicInfoText">
        <div className="galleryPicTitle">{props.picTitle}</div>
        <div className="galleryPicSize">{props.picSize}</div>
        <div className="galleryPicPrice">{props.price} </div>
      </div>
    </div>
  );
}
