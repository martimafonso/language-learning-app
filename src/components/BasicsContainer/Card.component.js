import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <p
      word={props.children}
      id={props.id}
      onClick={props.click}
      onKeyPress={props.keyPress}
      className={props.className}
      index={props.index}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </p>
  );
};

export default Card;
