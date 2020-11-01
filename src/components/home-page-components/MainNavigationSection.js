import React from "react";
import Basics from "./Basics";
import styled from "styled-components";
import MainHeader from "../headers/MainHeader";
import Basics2 from "./Basics2";

const FlexContainer = styled.div`
  display: flex;
`;

const MainNavigationSection = () => {
  return (
    <div>
      <MainHeader />
      <h2>Your Lessons</h2>
      <FlexContainer>
        <Basics />
        <Basics2 />
      </FlexContainer>
    </div>
  );
};

export default MainNavigationSection;
