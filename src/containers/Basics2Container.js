import React, { useState } from "react";
import Conjugation from "../components/BasicsContainer/Conjugation.component";
import Match from "../components/BasicsContainer/Match.component";
import ProgressHeader from "../components/headers/ProgressHeader";
import FinishedLesson from "../components/navigational-components/FinishedLesson";
import { Intro } from "../components/BasicsContainer/Intro.component";
import { FillInTheBlank } from "../components/BasicsContainer/FillInTheBlank.component";

const Basics2Container = (props) => {
  const [section, updateSection] = useState(0);

  let lessonProgress = (section * 100) / 4;

  let currentSection = () => {
    if (section === 0) {
      return <Intro updateSection={() => updateSection(section + 1)} />;
    } else if (section === 1) {
      return <Match updateSection={() => updateSection(section + 1)} />;
    } else if (section === 2) {
      return <Conjugation updateSection={() => updateSection(section + 1)} />;
    } else if (section === 3) {
      return (
        <FillInTheBlank updateSection={() => updateSection(section + 1)} />
      );
    } else if (section === 4) {
      return <FinishedLesson returnToMain={props.returnToMain} />;
    }
  };

  return (
    <>
      <ProgressHeader
        returnToMain={props.returnToMain}
        progress={lessonProgress + "%"}
      />
      {currentSection()}
    </>
  );
};

export default Basics2Container;
