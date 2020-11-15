import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  a {
    text-decoration: none;
    color: white;
    background-color: #00b1fd;
    border-radius: 10px;
    padding: 2px 8px;
    border: 3px solid #00b1fd;
    transition: all 0.3s ease;
    &:hover {
      color: #00b1fd;
      background-color: white;
      border: 3px solid #00b1fd;
    }
  }
`;

export default function LanguagesLinks() {
  return (
    <StyledDiv>
      <Link to="/french">French</Link>
      <Link to="/german">German</Link>
      <Link to="/spanish">Spanish</Link>
      <Link to="/japanese">Japanese</Link>
    </StyledDiv>
  );
}
