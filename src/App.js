import React from "react";
import "./App.css";
import Contact from "./components/contact-components/Contact";
import Friends from "./components/friends-components/Friends";
import Languages from "./components/languages-components/Languages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHeader from "./components/headers/MainHeader";
import FrenchPathHandler from "./components/home-page-components/french/FrenchPathHandler";
import GermanPathHandler from "./components/home-page-components/german/GermanPathHandler";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={MainHeader} />
          <Route path="/french" render={() => <FrenchPathHandler />} />
          <Route path="/german" render={() => <GermanPathHandler />} />
          <Route path="/contact" component={Contact} />
          <Route path="/friends" component={Friends} />
          <Route path="/languages" component={Languages} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
