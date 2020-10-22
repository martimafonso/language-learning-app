import React from "react";
import ConjugationSection from "../components/conjugationContainer/ConjugationSection";
import ProgressHeader from "../components/headers/ProgressHeader";

const ConjugationContainer = (props) => {
  return (
    <div>
      <ProgressHeader />
      <ConjugationSection changeState={props.changeState} />
    </div>
  );
};

export default ConjugationContainer;
