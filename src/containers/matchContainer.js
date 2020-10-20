import React, { useState } from "react";
import Card from "../components/Card";
import Points from "../components/Points";
import styled from "styled-components";

const WordsContainer = styled.div`
  display: flex;
`;

const EnglishContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 30px;
  align-items: flex-end;
`;

const FrenchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 30px;
`;
function MatchContainer() {
  const [points, changePoints] = useState(0);
  let matchCard = [];

  const addPoints = () => {
    changePoints(points + 10);
  };
  const removePoints = () => {
    changePoints(points - 5);
  };

  const match = (e) => {
    e.target.className = "card current";
    if (
      matchCard.length > 0 &&
      e.target.id === matchCard[0].id &&
      e.target !== matchCard[0]
    ) {
      matchCard[0].className = "card correct";
      e.target.className = "card correct";
      addPoints();
    }
    matchCard.push(e.target);
    if (matchCard.length === 2) {
      if (!e.target.classList.contains("correct")) {
        removePoints();
        matchCard.forEach((card) => {
          card.classList.add("wrong");
          setTimeout(() => {
            card.classList.remove("current");
            card.classList.remove("wrong");
          }, 500);
        });
      }
      matchCard = [];
    }
  };
  return (
    <div>
      <h2>Match the corresponding words with eachother</h2>
      <WordsContainer>
        <EnglishContainer>
          <Card click={match} id="1">
            Hello
          </Card>
          <Card click={match} id="2">
            Bye
          </Card>
          <Card click={match} id="3">
            How are you?
          </Card>
          <Card click={match} id="4">
            Where am I?
          </Card>
        </EnglishContainer>
        <FrenchContainer>
          <Card click={match} id="2">
            Au revoir
          </Card>
          <Card click={match} id="3">
            Comment ca va?
          </Card>
          <Card click={match} id="1">
            Salut
          </Card>
          <Card click={match} id="4">
            Ou je suis?
          </Card>
        </FrenchContainer>
      </WordsContainer>
      <Points>{points}</Points>
    </div>
  );
}

export default MatchContainer;
