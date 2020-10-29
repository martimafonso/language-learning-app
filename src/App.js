import React from "react";
import "./App.css";
import BasicsContainer from "./containers/BasicsContainer";
import MainNavigationSection from "./components/home-page-components/MainNavigationSection";
import Contact from "./components/contact-components/Contact";
import Friends from "./components/friends-components/Friends";
import Languages from "./components/languages-components/Languages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/friends" component={Friends} />
          <Route path="/languages" component={Languages} />
          <Route path="/basics" component={BasicsContainer} />
          <Route exact path="/" component={MainNavigationSection} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
