import React, { useState } from "react";
import styled from "styled-components";

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

const ConjugationSection = (props) => {
  const [correct, addToCorrect] = useState([
    { id: 1, isCorrect: false },
    { id: 2, isCorrect: false },
    { id: 3, isCorrect: false },
    { id: 4, isCorrect: false },
  ]);

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
      const newCorrect = correct.map((item) => {
        if (item.id + "" === e.target.id) {
          item.isCorrect = true;
          return item;
        }
        return item;
      });
      addToCorrect(newCorrect);
    }
    // if correct did not get updated, reset compareArray
    // also reset colors
    if (comparingItems.length === 2) {
      comparingItems.forEach((item) => {
        item.style.color = "black";
      });
      comparingItems = [];
    }
  };

  if (correct.every(checkIfFinished)) {
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
          {correct[0].isCorrect ? null : (
            <LiInline id="1" onClick={clickHandler}>
              suis
            </LiInline>
          )}
          {correct[1].isCorrect ? null : (
            <LiInline id="2" onClick={clickHandler}>
              es
            </LiInline>
          )}
          {correct[2].isCorrect ? null : (
            <LiInline id="3" onClick={clickHandler}>
              sommes
            </LiInline>
          )}
          {correct[3].isCorrect ? null : (
            <LiInline id="4" onClick={clickHandler}>
              sont
            </LiInline>
          )}
        </ul>
      </div>
      <div>
        <p>
          Je
          <Input
            id="1"
            readOnly
            value={correct[0].isCorrect ? "suis" : ""}
            onClick={clickHandler}
          ></Input>
        </p>
        <p>
          Tu
          <Input
            id="2"
            readOnly
            value={correct[1].isCorrect ? "es" : ""}
            onClick={clickHandler}
            type="text"
          ></Input>
        </p>
        <p>
          Nous
          <Input
            id="3"
            readOnly
            value={correct[2].isCorrect ? "sommes" : ""}
            onClick={clickHandler}
          ></Input>
        </p>
        <p>
          Ils
          <Input
            id="4"
            readOnly
            value={correct[3].isCorrect ? "sont" : ""}
            onClick={clickHandler}
            type="text"
          ></Input>
        </p>
      </div>
    </div>
  );
};

export default ConjugationSection;
