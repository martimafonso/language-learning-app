import React from "react";
import Basics from "./Basics";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
`;

const MainNavigationSection = (props) => {
  return (
    <div>
      <h2>Your Lessons</h2>
      <FlexContainer>
        <Basics changePg={props.selectBasics} />
      </FlexContainer>
    </div>
  );
};

export default MainNavigationSection;
