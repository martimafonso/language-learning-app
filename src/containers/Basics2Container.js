import React, { useState } from "react";
import Conjugation from "../components/BasicsContainer/Conjugation.component";
import Match from "../components/BasicsContainer/Match.component";
import ProgressHeader from "../components/headers/ProgressHeader";
import FinishedLesson from "../components/navigational-components/FinishedLesson";
import { Intro } from "../components/BasicsContainer/Intro.component";
import { FillInTheBlank } from "../components/BasicsContainer/FillInTheBlank.component";

const BasicsContainer2 = (props) => {
  // Intro Section
  const [introContent, updateIntroContent] = useState({
    words: [
      { word: "Fille", id: 1, isCorrect: false, isCurrent: false },
      { word: "Garçon", id: 2, isCorrect: false, isCurrent: false },
      { word: "Heure", id: 3, isCorrect: false, isCurrent: false },
      { word: "Vélo", id: 4, isCorrect: false, isCurrent: false },
    ],
    imgs: [
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
    ],
  });

  // Match Section
  const [cards, updateCards] = useState({
    englishWords: [
      { id: 1, word: "Goodnight", isCorrect: false, isCurrent: false },
      { id: 2, word: "What", isCorrect: false, isCurrent: false },
      { id: 3, word: "My friend", isCorrect: false, isCurrent: false },
      { id: 4, word: "See you later", isCorrect: false, isCurrent: false },
    ],
    frenchWords: [
      { id: 1, word: "Bonsoir", isCorrect: false, isCurrent: false },
      { id: 2, word: "Quel", isCorrect: false, isCurrent: false },
      { id: 3, word: "Mon ami", isCorrect: false, isCurrent: false },
      { id: 4, word: "À plus tard", isCorrect: false, isCurrent: false },
    ],
  });

  // Conjugation Section
  const [conjugationWords, updateConjugationWords] = useState([
    { id: 1, inputWord: "vais", setup: "Je", isCorrect: false },
    { id: 2, inputWord: "vas", setup: "Tu", isCorrect: false },
    { id: 3, inputWord: "allons", setup: "Nous", isCorrect: false },
    { id: 4, inputWord: "vont", setup: "Elles", isCorrect: false },
  ]);

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
  let lessonProgress = (section * 100) / 5;

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
        <Conjugation
          updateSection={() => updateSection(section + 1)}
          content={conjugationWords}
          updateContent={updateConjugationWords}
          isWrong={isWrong}
          setIsWrong={setIsWrong}
        />
      );
    } else if (section === 3) {
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
    } else if (section === 4) {
      return (
        <Match
          updateSection={() => updateSection(section + 1)}
          cards={cards}
          updateCards={updateCards}
          isWrong={isWrong}
          setIsWrong={setIsWrong}
        />
      );
    } else if (section === 5) {
      return <FinishedLesson returnToMain={props.returnToMain} />;
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

export default BasicsContainer2;
