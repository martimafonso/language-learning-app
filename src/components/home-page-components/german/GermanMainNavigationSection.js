import React from "react";
import styled from "styled-components";
import MainHeader from "../../headers/MainHeader";
import FrenchBasics from "./GermanBasics1Link";
import FrenchBasics2 from "./GermanBasics2Link";
import FrenchBasics3 from "./GermanBasics3Link";

const FlexContainer = styled.div`
  display: flex;
`;

const GermanMainNavigationSection = (props) => {
  return (
    <div>
      <MainHeader />
      <h2>Your Lessons</h2>
      <FlexContainer>
        <FrenchBasics lessonsCompleted={props} />
        <FrenchBasics2 lessonsCompleted={props} />
        <FrenchBasics3 lessonsCompleted={props} />
      </FlexContainer>
    </div>
  );
};

export default GermanMainNavigationSection;
