import React from "react";
import ConjugationSection from "../components/conjugationContainer/ConjugationSection";

const ConjugationContainer = (props) => {
  return (
    <div>
      <ConjugationSection updateSection={props.updateSection} />
    </div>
  );
};

export default ConjugationContainer;
