import React, { useState } from "react";
import "./App.css";
import MainContainer from "./containers/mainContainer";
import ConjugationContainer from "./containers/conjugationContainer";
import MatchContainer from "./containers/matchContainer";
import BasicsContainer from "./containers/BasicsContainer";

function App() {
  const [page, currentPage] = useState(0);

  const thisPage = () => {
    if (page === 0) {
      return <MainContainer selectBasics={() => currentPage(1)} />;
    } else if (page === 1) {
      return <BasicsContainer returnToMain={() => currentPage(0)} />;
    }
  };

  return <div className="App">{thisPage()}</div>;
}

export default App;
