import React from "react";
import styled from "styled-components";
import MainHeader from "../../headers/MainHeader";
import GermanBasicsLink from "./GermanBasics1Link";
import GermanBasics2Link from "./GermanBasics2Link";
import GermanBasics3Link from "./GermanBasics3Link";

const FlexContainer = styled.div`
  display: flex;
`;

const GermanMainNavigationSection = (props) => {
  return (
    <div>
      <MainHeader icon={props.icon} />
      <h2>Your Lessons</h2>
      <FlexContainer>
        <GermanBasicsLink lessonsCompleted={props} />
        <GermanBasics2Link lessonsCompleted={props} />
        <GermanBasics3Link lessonsCompleted={props} />
      </FlexContainer>
    </div>
  );
};

export default GermanMainNavigationSection;
