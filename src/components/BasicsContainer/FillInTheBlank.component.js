import React from "react";
import styled from "styled-components";
import Wrong from "./Wrong.component";

const P = styled.p``;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  width: 70px;
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
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let newWord = { ...props.word };
    if (props.input === props.word.word) {
      newWord.isCorrect = true;
      props.updateWord(newWord);
    } else {
      props.setIsWrong(true);
      setTimeout(() => {
        props.setIsWrong(false);
      }, 1000);
    }
    props.setInput("");
  };

  const onChangeHandler = (e) => {
    props.setInput(e.target.value);
  };

  if (props.word.isCorrect) {
    setTimeout(() => {
      props.updateSection();
    }, 500);
  }

  const style = {
    opacity: props.word.isCorrect ? ".5" : "1",
  };

  return (
    <>
      <h2>Fill In The Blank</h2>
      <Section style={style}>
        <form onSubmit={onSubmitHandler}>
          <P>{props.word.englishSentence}</P>
          <P>
            {props.word.frenchSentencePt1}
            <Input
              tabIndex={1}
              value={props.input}
              onChange={onChangeHandler}
              type="text"
            />
            {props.word.frenchSentencePt2}
          </P>
          <StyledButton type="submit">Check</StyledButton>
        </form>
      </Section>
      <Wrong isWrong={props.isWrong} />
    </>
  );
};
