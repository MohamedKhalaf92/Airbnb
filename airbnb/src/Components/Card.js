import React from "react";

export const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
      <img
        className="card--image"
        src={props.data.coverImg}
        alt=""
      />
      <div className="card--stats">
        <img className="card--star" src="../public/Images/Star 1.png" alt="" />
        <span>{props.data.stats.rating}</span>
        <span>({props.data.stats.reviewCount}) • </span>
        <span>{props.data.location}</span>
      </div>
      <p className="card--title">{props.data.title}</p>
      <p className="card--description">{props.data.description}</p>
    </div>
  );
};
