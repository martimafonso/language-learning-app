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

const GermanBasics3Link = ({ lessonsCompleted }) => {
  const completedStyle = {
    opacity: 0.4,
  };
  return (
    <ImgContainer style={lessonsCompleted[2] ? completedStyle : null}>
      <Link to="/german/basics3">
        <img
          height="100px"
          src="https://cdn1.iconfinder.com/data/icons/user-interface-basics/512/BI_095_box-512.png"
          alt="whatever"
        />
        <p>Basics III</p>
      </Link>
    </ImgContainer>
  );
};

export default GermanBasics3Link;
