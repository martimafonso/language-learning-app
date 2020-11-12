import React from "react";
import "./App.css";
import BasicsContainer from "./containers/BasicsContainer";
import MainNavigationSection from "./components/home-page-components/MainNavigationSection";
import Contact from "./components/contact-components/Contact";
import Friends from "./components/friends-components/Friends";
import Languages from "./components/languages-components/Languages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Basics2Container from "./containers/Basics2Container";
import Basics3Container from "./containers/Basics3Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainNavigationSection} />
          <Route path="/contact" component={Contact} />
          <Route path="/friends" component={Friends} />
          <Route path="/languages" component={Languages} />
          <Route path="/basics" component={BasicsContainer} />
          <Route path="/basics2" component={Basics2Container} />
          <Route path="/basics3" component={Basics3Container} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
