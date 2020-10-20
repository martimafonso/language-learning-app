import React from "react";
import "./App.css";
import Header from "./components/Header";
import MatchContainer from "./containers/matchContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <MatchContainer></MatchContainer>
    </div>
  );
}

export default App;
