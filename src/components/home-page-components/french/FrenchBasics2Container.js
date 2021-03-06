import React, { useState } from "react";
import Match from "../../BasicsContainer/Match.component";
import ProgressHeader from "../../headers/ProgressHeader";
import FinishedLesson from "../../navigational-components/FinishedLesson";
import { Intro } from "../../BasicsContainer/Intro.component";
import { FillInTheBlank } from "../../BasicsContainer/FillInTheBlank.component";

const FrenchBasics2Container = (props) => {
  // Intro Section
  const words = [
    { word: "Fille", id: 1, isCorrect: false, isCurrent: false },
    { word: "Garçon", id: 2, isCorrect: false, isCurrent: false },
    { word: "Heure", id: 3, isCorrect: false, isCurrent: false },
    { word: "Vélo", id: 4, isCorrect: false, isCurrent: false },
  ];
  const imgs = [
    {
      url:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      id: 1,
      isCorrect: false,
      isCurrent: false,
    },
    {
      url:
        "https://images.pexels.com/photos/1374509/pexels-photo-1374509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      id: 2,
      isCorrect: false,
      isCurrent: false,
    },
    {
      url:
        "https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      id: 3,
      isCorrect: false,
      isCurrent: false,
    },
    {
      url:
        "https://images.pexels.com/photos/3370153/pexels-photo-3370153.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
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
    { id: 1, word: "Goodnight", isCorrect: false, isCurrent: false },
    { id: 2, word: "What", isCorrect: false, isCurrent: false },
    { id: 3, word: "My friend", isCorrect: false, isCurrent: false },
    { id: 4, word: "See you later", isCorrect: false, isCurrent: false },
  ];
  const frenchWords = [
    { id: 1, word: "Bonsoir", isCorrect: false, isCurrent: false },
    { id: 2, word: "Quel", isCorrect: false, isCurrent: false },
    { id: 3, word: "Mon ami", isCorrect: false, isCurrent: false },
    { id: 4, word: "À plus tard", isCorrect: false, isCurrent: false },
  ];
  const [cards, updateCards] = useState({
    englishWords: shuffleArray(englishWords),
    frenchWords: shuffleArray(frenchWords),
  });

  // Fill In The Blank Section
  const [fITBWord, updateFITBWord] = useState({
    word: "chat",
    englishSentence: "The cat is going to the store.",
    frenchSentencePt1: "La ",
    frenchSentencePt2: " va à l’aéroport.",
    isCorrect: false,
  });
  const [fITBWord2, updateFITBWord2] = useState({
    word: "personne",
    englishSentence: "A person is eating an orange.",
    frenchSentencePt1: "La ",
    frenchSentencePt2: " mange une orange",
    isCorrect: false,
  });
  const [fITBInput, setFITBInput] = useState("");

  // Used in all of the components
  const [isWrong, setIsWrong] = useState(false);

  const [section, updateSection] = useState(0);
  let lessonProgress = (section * 100) / 4;

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
        <FillInTheBlank
          updateSection={() => updateSection(section + 1)}
          word={fITBWord2}
          updateWord={updateFITBWord2}
          input={fITBInput}
          setInput={setFITBInput}
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
        <Match
          updateSection={() => updateSection(section + 1)}
          cards={cards}
          updateCards={updateCards}
          isWrong={isWrong}
          setIsWrong={setIsWrong}
        />
      );
    } else if (section === 4) {
      return (
        <FinishedLesson
          homeUrl={props.homeUrl}
          setLesson2Completed={props.setLesson2Completed}
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

export default FrenchBasics2Container;
