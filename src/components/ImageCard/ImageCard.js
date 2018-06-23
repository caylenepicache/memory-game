import React from "react";
import "./ImageCard.css";

//render all the images with appropriate syntax
const ImageCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);


export default ImageCard;