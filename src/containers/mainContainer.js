import React from "react";
import MainHeader from "../components/mainContainer/MainHeader";
import MainNavigationSection from "../components/mainContainer/MainNavigationSection";

const MatchContainer = (props) => {
  return (
    <div>
      <MainHeader />
      <MainNavigationSection click={props.click} />
    </div>
  );
};

export default MatchContainer;
