import React, { useState } from "react";
import "./App.css";
import MainContainer from "./containers/mainContainer";
import ConjugationContainer from "./containers/conjugationContainer";
import MatchContainer from "./containers/matchContainer";

function App() {
  const [state, updateState] = useState(0);

  const checkState = () => {
    if (state === 0) {
      return <MainContainer click={() => updateState(state + 1)} />;
    }
    if (state === 1) {
      return (
        <ConjugationContainer changeState={() => updateState(state + 1)} />
      );
    }
    if (state === 2) {
      return <MatchContainer changeState={() => updateState(state + 1)} />;
    }
    if (state === 3) {
      updateState(state - 3);
    }
  };

  return <div className="App">{checkState()}</div>;
}

export default App;
