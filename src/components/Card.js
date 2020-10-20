import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <p
      word={props.children}
      id={props.id}
      onClick={props.click}
      className="card"
    >
      {props.children}
    </p>
  );
};

export default Card;
