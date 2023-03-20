import React from "react";
import star from "../images/Star 1.png"

export const Card = (props) => {
  console.log(props.img)
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img className="card--image" src="../images/katie-zaferes.png" alt="" />
      <div className="card--stats">
        <img className="card--star" src={star} alt="" />
        <span>{props.rating}</span>
        <span>({props.reviewCount}) • </span>
        <span>{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};

//Get that images from map into the card component to render.
//Make the navbar container size of figma container 
//Move image to the far left with padding 
//Padding between herocontainer and navbar container 
//hero header text size 36 
//use flex direction to aline card items in a column make sure stays within the width of the page 

