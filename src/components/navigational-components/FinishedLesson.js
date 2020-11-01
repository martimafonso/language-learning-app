import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  font-size: 1.3rem;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: white;
  padding: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px gray;
    background-color: #eee;
  }
`;

const FishishedLesson = (props) => {
  return (
    <>
      <h2>Yay! You completed this Excersize!</h2>
      <Link to="/">
        <Button onClick={props.returnToMain}>Go back to your Homepage</Button>
      </Link>
    </>
  );
};

export default FishishedLesson;
