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

export const FillInTheBlank = () => {
  const [input, setInput] = useState({
    word1: "",
    word2: "",
  });

  const [isCorrect, setIsCorrect] = useState({
    word1: false,
    word2: false,
  });

  const inputHandler = (e) => {
    if (e.target.id === "1") {
      setInput({ word1: e.target.value });
    }
    if (e.target.id === "2") {
      setInput({ word2: e.target.value });
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

  console.log(isCorrect);

  return (
    <>
      <div>
        <P className={isCorrect.word1 ? "correct" : ""}>The dog likes food.</P>
        <P className={isCorrect.word2 ? "correct" : ""}>
          The cat is eating the man.
        </P>
      </div>
      <div>
        <P className={isCorrect.word1 ? "correct" : ""}>
          Der{" "}
          {isCorrect.word1 ? (
            <Input readOnly id="1" type="text" onChange={inputHandler} />
          ) : (
            <Input id="1" type="text" onChange={inputHandler} />
          )}{" "}
          Essen gern.
        </P>
        <P className={isCorrect.word2 ? "correct" : ""}>
          Die{" "}
          {isCorrect.word2 ? (
            <Input readOnly id="2" type="text" onChange={inputHandler} />
          ) : (
            <Input id="2" type="text" onChange={inputHandler} />
          )}{" "}
          frisst der Mann
        </P>
      </div>
    </>
  );
};
