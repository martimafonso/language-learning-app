import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImgContainer = styled.div`
  cursor: pointer;
  width: 100px;
  padding: 10px 10px 1px;
  margin: auto;
  border-radius: 10px;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 2px 4px 10px gray;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

const GermanBasics1Link = (props) => {
  console.log(props);
  const completedStyle = {
    opacity: 0.4,
  };
  return (
    <ImgContainer style={props.lessonsCompleted[0] ? completedStyle : null}>
      <Link to="/german/basics">
        <img
          height="100px"
          src="https://cdn1.iconfinder.com/data/icons/user-interface-basics/512/BI_095_box-512.png"
          alt="whatever"
        />
        <p>Basics</p>
      </Link>
    </ImgContainer>
  );
};

export default GermanBasics1Link;
