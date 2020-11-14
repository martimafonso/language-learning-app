import React, { useState } from "react";
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
  const [lessonsCompleted, setLessonsCompleted] = useState([
    false,
    true,
    false,
  ]);
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
              <BasicsContainer
                lessonsCompleted={lessonsCompleted}
                setLessonsCompleted={setLessonsCompleted}
              />
            )}
          />
          <Route path="/basics2" component={() => <Basics2Container />} />
          <Route path="/basics3" component={() => <Basics3Container />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
