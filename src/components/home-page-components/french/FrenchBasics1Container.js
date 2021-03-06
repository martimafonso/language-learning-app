import React, { useState } from "react";
import Match from "../../BasicsContainer/Match.component";
import ProgressHeader from "../../headers/ProgressHeader";
import FinishedLesson from "../../navigational-components/FinishedLesson";
import { Intro } from "../../BasicsContainer/Intro.component";
import { FillInTheBlank } from "../../BasicsContainer/FillInTheBlank.component";

const FrenchBasics1Container = (props) => {
  // Intro Section
  const words = [
    { word: "Chien", id: 1, isCorrect: false, isCurrent: false },
    { word: "Chat", id: 2, isCorrect: false, isCurrent: false },
    { word: "Personne", id: 3, isCorrect: false, isCurrent: false },
    { word: "Oiseau", id: 4, isCorrect: false, isCurrent: false },
  ];
  const imgs = [
    {
      url: "https://cdn.images.express.co.uk/img/dynamic/1/590x/dog-650299.jpg",
      id: 1,
      isCorrect: false,
      isCurrent: false,
    },
    {
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
      id: 2,
      isCorrect: false,
      isCurrent: false,
    },
    {
      url:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 3,
      isCorrect: false,
      isCurrent: false,
    },
    {
      url:
        "https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 4,
      isCorrect: false,
      isCurrent: false,
    },
  ];

  const [introContent, updateIntroContent] = useState({
    words: shuffleArray(words),
    imgs: shuffleArray(imgs),
  });

  // Match Section

  const englishWords = [
    { id: 1, word: "Hello", isCorrect: false, isCurrent: false },
    { id: 2, word: "Bye", isCorrect: false, isCurrent: false },
    { id: 3, word: "How are you?", isCorrect: false, isCurrent: false },
    { id: 4, word: "Where am I?", isCorrect: false, isCurrent: false },
  ];
  const frenchWords = [
    { id: 1, word: "Salut", isCorrect: false, isCurrent: false },
    { id: 2, word: "Au revoir", isCorrect: false, isCurrent: false },
    { id: 3, word: "Comment ca va", isCorrect: false, isCurrent: false },
    { id: 4, word: "Ou je suis", isCorrect: false, isCurrent: false },
  ];

  const [cards, updateCards] = useState({
    englishWords: shuffleArray(englishWords),
    frenchWords: shuffleArray(frenchWords),
  });

  // Fill In The Blank Section
  const [fITBWord, updateFITBWord] = useState({
    word: "chien",
    englishSentence: "The dog likes pizza",
    frenchSentencePt1: "La ",
    frenchSentencePt2: " aime la Pizza",
    isCorrect: false,
  });
  const [fITBInput, setFITBInput] = useState("");

  // Used in all of the components
  const [isWrong, setIsWrong] = useState(false);

  const [section, updateSection] = useState(0);
  let lessonProgress = (section * 100) / 3;

  function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }

  let currentSection = () => {
    if (section === 0) {
      return (
        <Intro
          updateSection={() => updateSection(section + 1)}
          content={introContent}
          updateContent={updateIntroContent}
          isWrong={isWrong}
          setIsWrong={setIsWrong}
        />
      );
    } else if (section === 1) {
      return (
        <Match
          updateSection={() => updateSection(section + 1)}
          cards={cards}
          updateCards={updateCards}
          isWrong={isWrong}
          setIsWrong={setIsWrong}
        />
      );
    } else if (section === 2) {
      return (
        <FillInTheBlank
          updateSection={() => updateSection(section + 1)}
          word={fITBWord}
          updateWord={updateFITBWord}
          input={fITBInput}
          setInput={setFITBInput}
          isWrong={isWrong}
          setIsWrong={setIsWrong}
        />
      );
    } else if (section === 3) {
      return (
        <FinishedLesson
          homeUrl={props.homeUrl}
          setLesson1Completed={props.setLesson1Completed}
        />
      );
    }
  };

  return (
    <>
      <ProgressHeader
        returnToMain={props.returnToMain}
        progress={lessonProgress + "%"}
        homeUrl={props.homeUrl}
        icon={props.icon}
      />
      {currentSection()}
    </>
  );
};

export default FrenchBasics1Container;
