import React from "react";
import Card from "./Card.component";
import styled from "styled-components";
import Wrong from "./Wrong.component";

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

function Match(props) {
  function resetCurrent() {
    props.cards.englishWords.map((item) => {
      item.isCurrent = false;
      return item;
    });
    props.cards.frenchWords.map((item) => {
      item.isCurrent = false;
      return item;
    });
  }

  const currentEnglishWord = props.cards.englishWords.filter((item) => {
    return item.isCurrent === true;
  });

  const currentFrenchWord = props.cards.frenchWords.filter((item) => {
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
      setTimeout(() => {
        props.setIsWrong(true);
      }, 50);
      setTimeout(() => {
        props.setIsWrong(false);
      }, 1050);
      resetCurrent();
    }
  }

  const englishClickHandler = (e, index) => {
    const newCards = { ...props.cards };
    newCards.englishWords[index].isCurrent = true;
    props.updateCards(newCards);
  };
  const frenchClickHandler = (e, index) => {
    const newCards = { ...props.cards };
    newCards.frenchWords[index].isCurrent = true;
    props.updateCards(newCards);
  };

  const englishCardsList = props.cards.englishWords.map((item, index) => {
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
        tabIndex={0}
        className={cardStyle}
        click={(e) => englishClickHandler(e, index)}
        keyPress={(e) => englishClickHandler(e, index)}
        key={"english" + item.id}
        id={item.id}
        index={index}
      >
        {item.word}
      </Card>
    );
  });
  const frenchCardsList = props.cards.frenchWords.map((item, index) => {
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
        tabIndex={0}
        className={cardStyle}
        click={(e) => frenchClickHandler(e, index)}
        keyPress={(e) => frenchClickHandler(e, index)}
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

  if (props.cards.englishWords.every(checkIfAllIsCorrectIsTrue)) {
    setTimeout(() => {
      props.updateSection();
    }, 1000);
  }

  return (
    <div>
      <h2>Match the corresponding words with eachother</h2>
      <WordsContainer>
        <EnglishContainer>{englishCardsList}</EnglishContainer>
        <FrenchContainer>{frenchCardsList}</FrenchContainer>
      </WordsContainer>
      <Wrong isWrong={props.isWrong} />
    </div>
  );
}

export default Match;
