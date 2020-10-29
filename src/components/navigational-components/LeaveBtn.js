import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LeaveBtnDiv = styled.div`
   {
    position: relative;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    margin: auto;
    cursor: pointer;

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      content: "";
      background-color: black;
      height: 2px;
      width: 15px;
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: "";
      background-color: black;
      height: 2px;
      width: 15px;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;

const LeaveBtnContainer = styled.div`
   {
    flex: 1;
  }
`;

const LeaveBtn = () => {
  return (
    <LeaveBtnContainer>
      <Link to="/">
        <LeaveBtnDiv></LeaveBtnDiv>
      </Link>
    </LeaveBtnContainer>
  );
};

export default LeaveBtn;
