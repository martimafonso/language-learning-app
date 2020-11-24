import React, { useState } from "react";
import Match from "../components/BasicsContainer/Match.component";
import ProgressHeader from "../components/headers/ProgressHeader";
import FinishedLesson from "../components/navigational-components/FinishedLesson";
import { Intro } from "../components/BasicsContainer/Intro.component";
import { FillInTheBlank } from "../components/BasicsContainer/FillInTheBlank.component";

const BasicsContainer3 = (props) => {
  // Intro Section
  const words = [
    { word: "Fleur", id: 1, isCorrect: false, isCurrent: false },
    { word: "Eau", id: 2, isCorrect: false, isCurrent: false },
    { word: "salle de Bains", id: 3, isCorrect: false, isCurrent: false },
    { word: "Cuisine", id: 4, isCorrect: false, isCurrent: false },
  ];
  const imgs = [
    {
      url:
        "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 1,
      isCorrect: false,
      isCurrent: false,
    },
    {
      url:
        "https://images.pexels.com/photos/1458684/pexels-photo-1458684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 2,
      isCorrect: false,
      isCurrent: false,
    },
    {
      url:
        "https://images.pexels.com/photos/105934/pexels-photo-105934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 3,
      isCorrect: false,
      isCurrent: false,
    },
    {
      url:
        "https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    { id: 1, word: "To live", isCorrect: false, isCurrent: false },
    { id: 2, word: "The husband", isCorrect: false, isCurrent: false },
    { id: 3, word: "The wife", isCorrect: false, isCurrent: false },
    { id: 4, word: "The kitchen", isCorrect: false, isCurrent: false },
  ];
  const frenchWords = [
    { id: 1, word: "vivre", isCorrect: false, isCurrent: false },
    { id: 2, word: "Le mari", isCorrect: false, isCurrent: false },
    { id: 3, word: "La femme", isCorrect: false, isCurrent: false },
    { id: 4, word: "La cuisine", isCorrect: false, isCurrent: false },
  ];
  const [cards, updateCards] = useState({
    englishWords: shuffleArray(englishWords),
    frenchWords: shuffleArray(frenchWords),
  });

  // Fill In The Blank Section
  const [fITBWord, updateFITBWord] = useState({
    word: "mari",
    englishSentence: "The wife loves her husband.",
    frenchSentencePt1: "La femme aime son ",
    frenchSentencePt2: "",
    isCorrect: false,
  });
  const [fITBWord2, updateFITBWord2] = useState({
    word: "mange",
    englishSentence: "He is eating in the kitchen.",
    frenchSentencePt1: "Le homme ",
    frenchSentencePt2: " mange dans la cuisine.",
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
      return <FinishedLesson setLesson3Completed={props.setLesson3Completed} />;
    }
  };

  return (
    <>
      <ProgressHeader
        returnToMain={props.returnToMain}
        progress={lessonProgress + "%"}
      />
      {currentSection()}
    </>
  );
};

export default BasicsContainer3;
