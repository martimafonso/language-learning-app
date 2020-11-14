import React from "react";
import Basics from "./Basics";
import styled from "styled-components";
import MainHeader from "../headers/MainHeader";
import Basics2 from "./Basics2";
import Basics3 from "./Basics3";

const FlexContainer = styled.div`
  display: flex;
`;

const MainNavigationSection = (props) => {
  return (
    <div>
      <MainHeader />
      <h2>Your Lessons</h2>
      <FlexContainer>
        <Basics lessonsCompleted={props} />
        <Basics2 lessonsCompleted={props} />
        <Basics3 lessonsCompleted={props} />
      </FlexContainer>
    </div>
  );
};

export default MainNavigationSection;
