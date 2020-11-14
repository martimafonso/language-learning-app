import React, { useEffect, useState } from "react";
import "./App.css";
import MainNavigationSection from "./components/home-page-components/MainNavigationSection";
import Contact from "./components/contact-components/Contact";
import Friends from "./components/friends-components/Friends";
import Languages from "./components/languages-components/Languages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicsContainer from "./containers/BasicsContainer";
import Basics2Container from "./containers/Basics2Container";
import Basics3Container from "./containers/Basics3Container";

function App() {
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

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MainNavigationSection {...lessonsCompleted} />}
          />
          <Route path="/contact" component={Contact} />
          <Route path="/friends" component={Friends} />
          <Route path="/languages" component={Languages} />
          <Route
            path="/basics"
            render={() => (
              <BasicsContainer setLesson1Completed={lesson1Handler} />
            )}
          />
          <Route
            path="/basics2"
            render={() => (
              <Basics2Container setLesson2Completed={lesson2Handler} />
            )}
          />
          <Route
            path="/basics3"
            render={() => (
              <Basics3Container setLesson3Completed={lesson3Handler} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
