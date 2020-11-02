import React, { useState } from "react";
import styled from "styled-components";
import Wrong from "./Wrong.component";

const P = styled.p``;

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
  transition: all 0.3s ease;
`;

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  background-color: #bbb;
  transition: all 0.2s ease;
  &:hover {
    background-color: gray;
  }
  &:active {
    background-color: lightGray;
  }
`;

export const FillInTheBlank = (props) => {
  const [input, setInput] = useState("");

  const [isWrong, setIsWrong] = useState(false);

  const [word, updateWord] = useState({
    word: "chien",
    englishSentence: "The dog likes pizza",
    frenchSentencePt1: "La ",
    frenchSentencePt2: " aime la Pizza",
    isCorrect: false,
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let newWord = { ...word };
    if (input === word.word) {
      newWord.isCorrect = true;
      updateWord(newWord);
    } else {
      setIsWrong(true);
      setTimeout(() => {
        setIsWrong(false);
      }, 1000);
    }
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  if (word.isCorrect) {
    setTimeout(() => {
      props.updateSection();
    }, 500);
  }

  const style = {
    opacity: word.isCorrect ? ".5" : "1",
  };

  return (
    <>
      <Section style={style}>
        <form onSubmit={onSubmitHandler}>
          <P>{word.englishSentence}</P>
          <P>
            {word.frenchSentencePt1}
            <Input tabIndex={1} onChange={onChangeHandler} type="text" />
            {word.frenchSentencePt2}
          </P>
          <StyledButton type="submit">Check</StyledButton>
        </form>
      </Section>
      <Wrong isWrong={isWrong} />
    </>
  );
};
