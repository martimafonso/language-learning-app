import { useState } from "react";
import { Route } from "react-router-dom";

import FrenchMainNavigationSection from "./FrenchMainNavigationSection";
import FrenchBasicsContainer from "./FrenchBasics1Container";
import FrenchBasics2Container from "./FrenchBasics2Container";
import FrenchBasics3Container from "./FrenchBasics3Container";

const FrenchPathHandler = ({ icon }) => {
  const [lessonsCompleted, setLessonsCompleted] = useState([]);

  const lesson1Handler = () => {
    let newArray = [...lessonsCompleted];
    newArray[0] = true;
    setTimeout(() => {
      setLessonsCompleted(newArray);
    }, 10);
  };
  const lesson2Handler = () => {
    let newArray = [...lessonsCompleted];
    newArray[1] = true;
    setTimeout(() => {
      setLessonsCompleted(newArray);
    }, 10);
  };
  const lesson3Handler = () => {
    let newArray = [...lessonsCompleted];
    newArray[2] = true;
    setTimeout(() => {
      setLessonsCompleted(newArray);
    }, 10);
  };

  const homeUrl = "/french";

  return (
    <>
      <Route
        exact
        path="/french"
        render={() => (
          <FrenchMainNavigationSection icon={icon} {...lessonsCompleted} />
        )}
      />
      <Route
        path="/french/basics"
        render={() => (
          <FrenchBasicsContainer
            homeUrl={homeUrl}
            setLesson1Completed={lesson1Handler}
            icon={icon}
          />
        )}
      />
      <Route
        path="/french/basics2"
        render={() => (
          <FrenchBasics2Container
            homeUrl={homeUrl}
            setLesson2Completed={lesson2Handler}
            icon={icon}
          />
        )}
      />
      <Route
        path="/french/basics3"
        render={() => (
          <FrenchBasics3Container
            homeUrl={homeUrl}
            setLesson3Completed={lesson3Handler}
            icon={icon}
          />
        )}
      />
    </>
  );
};

export default FrenchPathHandler;
