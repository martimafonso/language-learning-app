import React, { useState } from "react";
import Card from "../components/Card";
import Points from "../components/Points";
import styled from "styled-components";
import ProgressHeader from "../components/ProgressHeader";

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

function MatchContainer(props) {
  const [points, changePoints] = useState(0);

  const [cards, updateCards] = useState({
    englishWords: [
      { id: 1, word: "Hello", isCorrect: false, isCurrent: false },
      { id: 2, word: "Bye", isCorrect: false, isCurrent: false },
      { id: 3, word: "How are you?", isCorrect: false, isCurrent: false },
      { id: 4, word: "Where am I?", isCorrect: false, isCurrent: false },
    ],
    frenchWords: [
      { id: 1, word: "Salut", isCorrect: false, isCurrent: false },
      { id: 2, word: "Au revoir", isCorrect: false, isCurrent: false },
      { id: 3, word: "Comment ca va", isCorrect: false, isCurrent: false },
      { id: 4, word: "Ou je suis", isCorrect: false, isCurrent: false },
    ],
  });

  // const engArr = cards.englishWords.map((item) => {
  //   return item.isCurrent;
  // });

  // const frenchArr = cards.frenchWords.map((item) => {
  //   return item.isCurrent;
  // });

  // const isCurrentArray = [...engArr, ...frenchArr];

  // if (current.length === 2) {
  //   if (current[0] !== current[1]) {
  //     addToCurrent([]);
  //   } else if (current[0].id === current[1].id) {
  //     let resetCurrent = { ...cards };
  //     resetCurrent.englishWords.forEach((item) => {
  //       item.isCurrent = false;
  //     });
  //     resetCurrent.frenchWords.forEach((item) => {
  //       item.isCurrent = false;
  //     });
  //     updateCards(resetCurrent);
  //   }
  // }

  function resetCurrent() {
    cards.englishWords.map((item) => {
      item.isCurrent = false;
      return item;
    });
    cards.frenchWords.map((item) => {
      item.isCurrent = false;
      return item;
    });
  }

  const currentEnglishWord = cards.englishWords.filter((item) => {
    return item.isCurrent === true;
  });

  const currentFrenchWord = cards.frenchWords.filter((item) => {
    return item.isCurrent === true;
  });

  const currentWords = [...currentEnglishWord, ...currentFrenchWord];

  if (currentEnglishWord.length > 1 || currentFrenchWord.length > 1) {
    resetCurrent();
  }

  if (currentWords[0] !== undefined && currentWords[1] !== undefined) {
    if (currentWords[0].id === currentWords[1].id) {
      currentWords[0].isCorrect = true;
      currentWords[1].isCorrect = true;
      resetCurrent();
    } else {
      resetCurrent();
    }
  }

  const englishClickHandler = (e, index) => {
    const newCards = { ...cards };
    newCards.englishWords[index].isCurrent = true;
    updateCards(newCards);
  };
  const frenchClickHandler = (e, index) => {
    const newCards = { ...cards };
    newCards.frenchWords[index].isCurrent = true;
    updateCards(newCards);
  };

  const englishCardsList = cards.englishWords.map((item, index) => {
    let cardStyle = "";
    if (item.isCurrent) {
      cardStyle = "card current";
    } else if (item.isCorrect) {
      cardStyle = "card correct";
    } else {
      cardStyle = "card";
    }
    return (
      <Card
        className={cardStyle}
        click={(e) => englishClickHandler(e, index)}
        key={"english" + item.id}
        id={item.id}
        index={index}
      >
        {item.word}
      </Card>
    );
  });
  const frenchCardsList = cards.frenchWords.map((item, index) => {
    let cardStyle = "";
    if (item.isCurrent) {
      cardStyle = "card current";
    } else if (item.isCorrect) {
      cardStyle = "card correct";
    } else {
      cardStyle = "card";
    }
    return (
      <Card
        className={cardStyle}
        click={(e) => frenchClickHandler(e, index)}
        key={"french" + item.id}
        id={item.id}
        index={index}
      >
        {item.word}
      </Card>
    );
  });

  function checkIfAllIsCorrectIsTrue(item) {
    return item.isCorrect === true;
  }

  if (cards.englishWords.every(checkIfAllIsCorrectIsTrue)) {
    setTimeout(() => {
      props.changeState();
    }, 1000);
  }

  return (
    <div>
      <ProgressHeader />
      <h2>Match the corresponding words with eachother</h2>
      <WordsContainer>
        <EnglishContainer>{englishCardsList}</EnglishContainer>
        <FrenchContainer>{frenchCardsList}</FrenchContainer>
      </WordsContainer>
      <Points>{points}</Points>
    </div>
  );
}

export default MatchContainer;
