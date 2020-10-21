import React from "react";
import MainHeader from "../components/MainHeader";
import MainNavigationSection from "../components/MainNavigationSection";

const MatchContainer = (props) => {
  return (
    <div>
      <MainHeader />
      <MainNavigationSection click={props.click} />
    </div>
  );
};

export default MatchContainer;
