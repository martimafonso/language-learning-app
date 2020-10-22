import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <p
      word={props.children}
      id={props.id}
      onClick={props.click}
      className={props.className}
      index={props.index}
    >
      {props.children}
    </p>
  );
};

export default Card;
