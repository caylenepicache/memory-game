import React from "react";
import "./ImageCard.css";

//pass the image into each card so all 12 are rendered
const ImageCard = props => (
  <div className="card" onClick={props.imgClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);


export default ImageCard;