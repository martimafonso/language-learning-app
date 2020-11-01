import React, { useState } from "react";
import styled from "styled-components";
import Wrong from "./Wrong.component";

const LiInline = styled.li`
  display: inline;
  box-shadow: 2px 2px 5px gray;
  margin: 5px;
  padding: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  width: 50px;
  cursor: pointer;
  text-align: center;
  font-size: 0.9rem;
  &:hover {
    background-color: #ddd;
  }
  &:focus {
    outline: none;
  }
`;

const Conjugation = (props) => {
  const [words, updateWords] = useState([
    { id: 1, inputWord: "suis", setup: "Je", isCorrect: false },
    { id: 2, inputWord: "es", setup: "Tu", isCorrect: false },
    { id: 3, inputWord: "sommes", setup: "Nous", isCorrect: false },
    { id: 4, inputWord: "sont", setup: "Ils", isCorrect: false },
  ]);

  const [isWrong, setIsWrong] = useState(false);

  function checkIfFinished(item) {
    return item.isCorrect === true;
  }

  let comparingItems = [];

  const clickHandler = (e) => {
    comparingItems.push(e.target);
    e.target.style.color = "red";
    if (
      comparingItems.length === 2 &&
      comparingItems[0].id === comparingItems[1].id &&
      comparingItems[0] !== comparingItems[1]
    ) {
      const newCorrect = words.map((item) => {
        if (item.id + "" === e.target.id) {
          item.isCorrect = true;
          return item;
        }
        return item;
      });
      updateWords(newCorrect);
    } else if (comparingItems.length === 2) {
      setIsWrong(true);
      setTimeout(() => {
        setIsWrong(false);
      }, 1000);
    }
    // reset compareArray also reset colors
    if (comparingItems.length === 2) {
      comparingItems.forEach((item) => {
        item.style.color = "black";
      });

      comparingItems = [];
    }
  };

  if (words.every(checkIfFinished)) {
    // added a setTimeout because React NEEDED to render this page before changing to the next
    setTimeout(() => {
      props.updateSection();
    }, 1000);
  }

  return (
    <div>
      <h2>Place the correct words in their correct positions</h2>
      <div>
        <ul>
          {words.map((word) =>
            word.isCorrect ? null : (
              <LiInline id={word.id} onClick={clickHandler}>
                {word.inputWord}
              </LiInline>
            )
          )}
        </ul>
      </div>
      <div>
        {words.map((word) => {
          return (
            <p>
              {word.setup}
              <Input
                id={word.id}
                readOnly
                value={word.isCorrect ? word.inputWord : ""}
                onClick={clickHandler}
                type="text"
              ></Input>
            </p>
          );
        })}
      </div>
      <Wrong isWrong={isWrong} />
    </div>
  );
};

export default Conjugation;
