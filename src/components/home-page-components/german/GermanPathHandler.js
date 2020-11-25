import { useState } from "react";
import { Route } from "react-router-dom";

import GermanMainNavigationSection from "./GermanMainNavigationSection";
import GermanBasicsContainer from "./GermanBasics1Container";
import GermanBasics2Container from "./GermanBasics2Container";
import GermanBasics3Container from "./GermanBasics3Container";

const GermanPathHandler = ({ icon }) => {
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

  const homeUrl = "/german";

  return (
    <>
      <Route
        exact
        path="/german"
        render={() => (
          <GermanMainNavigationSection icon={icon} {...lessonsCompleted} />
        )}
      />
      <Route
        path="/german/basics"
        render={() => (
          <GermanBasicsContainer
            homeUrl={homeUrl}
            setLesson1Completed={lesson1Handler}
            icon={icon}
          />
        )}
      />
      <Route
        path="/german/basics2"
        render={() => (
          <GermanBasics2Container
            homeUrl={homeUrl}
            setLesson2Completed={lesson2Handler}
            icon={icon}
          />
        )}
      />
      <Route
        path="/german/basics3"
        render={() => (
          <GermanBasics3Container
            homeUrl={homeUrl}
            setLesson3Completed={lesson3Handler}
            icon={icon}
          />
        )}
      />
    </>
  );
};

export default GermanPathHandler;
