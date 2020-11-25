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
  const frenchIcon = "https://image.flaticon.com/icons/png/512/496/496394.png";
  const germanIcon =
    "https://img.icons8.com/fluent/48/000000/germany-circular.png";
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={MainHeader} />
          <Route
            path="/french"
            render={() => <FrenchPathHandler icon={frenchIcon} />}
          />
          <Route
            path="/german"
            render={() => <GermanPathHandler icon={germanIcon} />}
          />
          <Route path="/contact" component={Contact} />
          <Route path="/friends" component={Friends} />
          <Route path="/languages" component={Languages} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
