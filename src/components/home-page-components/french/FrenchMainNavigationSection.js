import React from "react";
import styled from "styled-components";
import MainHeader from "../../headers/MainHeader";
import FrenchBasics from "./FrenchBasics1Link";
import FrenchBasics2 from "./FrenchBasics2Link";
import FrenchBasics3 from "./FrenchBasics3Link";

const FlexContainer = styled.div`
  display: flex;
`;

const FrenchMainNavigationSection = (props) => {
  return (
    <div>
      <MainHeader icon={props.icon} />
      <h2>Your Lessons</h2>
      <FlexContainer>
        <FrenchBasics lessonsCompleted={props} />
        <FrenchBasics2 lessonsCompleted={props} />
        <FrenchBasics3 lessonsCompleted={props} />
      </FlexContainer>
    </div>
  );
};

export default FrenchMainNavigationSection;
