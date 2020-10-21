import React from "react";
import Basics from "./Basics";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
`;

const MainNavigationSection = (props) => {
  return (
    <div>
      <h2>Main Navigation Section</h2>
      <FlexContainer>
        <Basics click={props.click} />
      </FlexContainer>
    </div>
  );
};

export default MainNavigationSection;
