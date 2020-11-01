import React, { useState } from "react";
import styled from "styled-components";

const P = styled.p`
  &.correct {
    opacity: 0.25;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  width: 50px;
  text-align: center;
`;

const Section = styled.section`
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
  width: fit-content;
  margin: 10px auto;
  border-radius: 10px;
  padding: 5px 20px;
  &.correct {
    opacity: 0.25;
  }
`;

export const FillInTheBlank = (props) => {
  const [input, setInput] = useState(["", "", ""]);

  const [words, updateWords] = useState([
    {
      word: "chien",
      id: "word1",
      englishSentence: "The dog likes pizza",
      frenchSentencePt1: "La ",
      frenchSentencePt2: " aime la Pizza",
      isCorrect: false,
      isCurrent: false,
    },
    {
      word: "chat",
      id: "word2",
      englishSentence: "The cat is eating the man",
      frenchSentencePt1: "La ",
      frenchSentencePt2: " mange le homme",
      isCorrect: false,
      isCurrent: false,
    },
    {
      word: "fille",
      id: "word3",
      englishSentence: "The girl is reading a book",
      frenchSentencePt1: "La ",
      frenchSentencePt2: " lire un livre",
      isCorrect: false,
      isCurrent: false,
    },
  ]);

  const onChangeHandler = (e, index) => {
    let newInput = [...input];
    newInput[index] = e.target.value;
    setInput(newInput);
  };

  const checkAll = function (x) {
    return x.isCorrect;
  };

  if (words.every(checkAll)) {
    setTimeout(() => {
      props.updateSection();
    }, 500);
  }

  words.forEach((word, index) => {
    if (word.isCorrect === false) {
      if (input[index] === word.word) {
        word.isCorrect = true;
      }
    }
  });

  return (
    <>
      {words.map((word, index) => {
        return (
          <Section key={word.id} className={word.isCorrect ? "correct" : ""}>
            <P>{word.englishSentence}</P>
            <P>
              {word.frenchSentencePt1}
              {word.isCorrect ? (
                <Input
                  tabIndex={index + 1}
                  readOnly
                  id={word.id}
                  type="text"
                  onChange={(e) => onChangeHandler(e, index)}
                />
              ) : (
                <Input
                  tabIndex={index + 1}
                  id={word.id}
                  type="text"
                  onChange={(e) => onChangeHandler(e, index)}
                />
              )}
              {word.frenchSentencePt2}
            </P>
          </Section>
        );
      })}
    </>
  );
};
