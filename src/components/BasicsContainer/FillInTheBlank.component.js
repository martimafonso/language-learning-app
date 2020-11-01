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
  const [input, setInput] = useState("");

  const [isCorrect, setIsCorrect] = useState({
    word1: false,
    word2: false,
    word3: false,
  });

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

  const checkAll = function (x) {
    return x.isCorrect;
  };

  if (words.every(checkAll)) {
    setTimeout(() => {
      props.updateSection();
    }, 500);
  }

  words.forEach((word) => {
    if (word.isCorrect === false) {
      if (input === word.word) {
        word.isCorrect = true;
      }
    }
  });

  console.log(input);

  return (
    <>
      {words.map((word, index) => {
        return (
          <Section className={word.isCorrect ? "correct" : ""}>
            <P>{word.englishSentence}</P>
            <P>
              {word.frenchSentencePt1}
              {word.isCorrect ? (
                <Input
                  tabIndex={index + 1}
                  readOnly
                  id={word.id}
                  type="text"
                  onChange={(e) => setInput(e.target.value)}
                />
              ) : (
                <Input
                  tabIndex={index + 1}
                  id={word.id}
                  type="text"
                  onChange={(e) => setInput(e.target.value)}
                />
              )}
              {word.frenchSentencePt2}
            </P>
          </Section>
        );
      })}
      {/* <Section className={isCorrect.word1 ? "correct" : ""}>
        <P>The dog likes Pizza.</P>
        <P>
          La{" "}
          {isCorrect.word1 ? (
            <Input
              tabIndex="1"
              readOnly
              id="1"
              type="text"
              onChange={inputHandler}
            />
          ) : (
            <Input tabIndex="1" id="1" type="text" onChange={inputHandler} />
          )}{" "}
          aime la Pizza.
        </P>
      </Section>
      <Section className={isCorrect.word2 ? "correct" : ""}>
        <P>The cat is eating the man.</P>

        <P>
          La{" "}
          {isCorrect.word2 ? (
            <Input
              tabIndex="2"
              readOnly
              id="2"
              type="text"
              onChange={inputHandler}
            />
          ) : (
            <Input tabIndex="2" id="2" type="text" onChange={inputHandler} />
          )}{" "}
          mange le Homme.
        </P>
      </Section>
      <Section className={isCorrect.word3 ? "correct" : ""}>
        <P>The girl is reading a book.</P>

        <P>
          La{" "}
          {isCorrect.word3 ? (
            <Input
              tabIndex="3"
              readOnly
              id="3"
              type="text"
              onChange={inputHandler}
            />
          ) : (
            <Input tabIndex="3" id="3" type="text" onChange={inputHandler} />
          )}{" "}
          lire un livre.
        </P>
      </Section> */}
    </>
  );
};
