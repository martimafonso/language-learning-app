import React from "react";
import MainHeader from "../components/mainContainer/MainHeader";
import MainNavigationSection from "../components/mainContainer/MainNavigationSection";

const MatchContainer = (props) => {
  return (
    <div>
      <MainHeader />
      <MainNavigationSection selectBasics={props.selectBasics} />
    </div>
  );
};

export default MatchContainer;
