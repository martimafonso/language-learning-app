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

export const FillInTheBlank = () => {
  const [input, setInput] = useState({
    word1: "",
    word2: "",
    word3: "",
  });

  const [isCorrect, setIsCorrect] = useState({
    word1: false,
    word2: false,
    word3: false,
  });

  if (
    isCorrect.word1 === true &&
    isCorrect.word2 === true &&
    isCorrect.word3 === true
  ) {
    setTimeout(() => {
      console.log("change page");
    }, 500);
  }

  const inputHandler = (e) => {
    if (e.target.id === "1") {
      setInput({ word1: e.target.value });
    }
    if (e.target.id === "2") {
      setInput({ word2: e.target.value });
    }
    if (e.target.id === "3") {
      setInput({ word3: e.target.value });
    }
  };
  if (isCorrect.word1 === false) {
    if (input.word1 === "Hund" || input.word1 === "hund") {
      setIsCorrect((isCorrect.word1 = true));
      setInput((input.word1 = "Hund"));
    }
  }

  if (isCorrect.word2 === false) {
    if (input.word2 === "Katze" || input.word2 === "katze") {
      setIsCorrect((isCorrect.word2 = true));
      setInput((input.word2 = "Katze"));
    }
  }
  if (isCorrect.word3 === false) {
    if (input.word3 === "Vogel" || input.word3 === "vogel") {
      setIsCorrect((isCorrect.word3 = true));
      setInput((input.word3 = "Vogel"));
    }
  }

  return (
    <>
      <Section className={isCorrect.word1 ? "correct" : ""}>
        <P>The dog likes food.</P>
        <P>
          Der{" "}
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
          Essen gern.
        </P>
      </Section>
      <Section className={isCorrect.word2 ? "correct" : ""}>
        <P>The cat is eating the man.</P>

        <P>
          Die{" "}
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
          frisst der Mann
        </P>
      </Section>
      <Section className={isCorrect.word3 ? "correct" : ""}>
        <P>The bird can fly.</P>

        <P>
          Der{" "}
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
          kann fliegen.
        </P>
      </Section>
    </>
  );
};
