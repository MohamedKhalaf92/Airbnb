import React from "react";
import heroImage from "../images/Group77.png"

export const Hero = () => {
  return (
    <section className="hero-container">
      <img
        className="hero--image"
        src={heroImage}
        alt=""
      />
      <h1 className="hero--header" >Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};
