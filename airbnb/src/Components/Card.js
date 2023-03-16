import React from "react";

export const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
      <img
        className="card--image"
        src={props.coverImg}
        alt=""
      />
      <div className="card--stats">
        <img className="card--star" src="../public/Images/Star 1.png" alt="" />
        <span>{props.rating}</span>
        <span>({props.reviewCount}) • </span>
        <span>{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--description">{props.description}</p>
    </div>
  );
};
