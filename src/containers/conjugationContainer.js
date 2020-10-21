import React from "react";
import ConjugationSection from "../components/ConjugationSection";
import ProgressHeader from "../components/ProgressHeader";

const ConjugationContainer = (props) => {
  return (
    <div>
      <ProgressHeader />
      <ConjugationSection changeState={props.changeState} />
    </div>
  );
};

export default ConjugationContainer;
