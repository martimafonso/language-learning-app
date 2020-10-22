import React, { useState } from "react";
import "./App.css";
import MainContainer from "./containers/mainContainer";
import ConjugationContainer from "./containers/conjugationContainer";
import MatchContainer from "./containers/matchContainer";

function App() {
  const [page, currentPage] = useState(<MainContainer />);

  return <div className="App">{page}</div>;
}

export default App;
