import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color, link}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a target="_blank" href={link} rel="noreferrer"><button className="c-button">"Learn More"</button></a>
    </div>
  );
};

export default Card;
