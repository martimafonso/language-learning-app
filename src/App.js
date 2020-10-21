import React from "react";
import "./App.css";
import ProgressHeader from "./components/ProgressHeader";
import styled from "styled-components";
import ConjugationSection from "./components/ConjugationSection";

const MarginContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

function App() {
  return (
    <div className="App">
      <ProgressHeader />
      <MarginContainer>
        <ConjugationSection />
      </MarginContainer>
    </div>
  );
}

export default App;
