import React, { useState } from "react";
import styled from "styled-components";
import "./Intro.component.css";

const WordsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4vh;
`;

const Word = styled.div`
  background-color: #efefef;
  padding: 5px;
  line-height: 0;
  margin: auto;
  border-radius: 10px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const ImgsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4vh;
`;

const Img = styled.img`
  max-width: 150px;
  height: 150px;
  margin: 5px;
  border-radius: 10px;
  border: 3px white solid;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    border-color: black;
  }
`;

const MarginContainer = styled.div`
  width: 1000px;

  margin: auto;
`;

export const Intro = () => {
  const [content, updateContent] = useState({
    words: [
      { word: "Hund", id: 1, isCorrect: false, isCurrent: false },
      { word: "Katze", id: 2, isCorrect: false, isCurrent: false },
      { word: "Person", id: 3, isCorrect: false, isCurrent: false },
      { word: "Vogel", id: 4, isCorrect: false, isCurrent: false },
      { word: "Auto", id: 5, isCorrect: false, isCurrent: false },
      { word: "Zeit", id: 6, isCorrect: false, isCurrent: false },
    ],
    imgs: [
      {
        url:
          "https://cdn.images.express.co.uk/img/dynamic/1/590x/dog-650299.jpg",
        id: 1,
        isCorrect: false,
        isCurrent: false,
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
        id: 2,
        isCorrect: false,
        isCurrent: false,
      },
      {
        url:
          "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        id: 3,
        isCorrect: false,
        isCurrent: false,
      },
      {
        url:
          "https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        id: 4,
        isCorrect: false,
        isCurrent: false,
      },
      {
        url:
          "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        id: 5,
        isCorrect: false,
        isCurrent: false,
      },
      {
        url:
          "https://images.pexels.com/photos/1198264/pexels-photo-1198264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        id: 6,
        isCorrect: false,
        isCurrent: false,
      },
    ],
  });

  const resetCurrent = () => {
    let words = content.words.map((word) => {
      word.isCurrent = false;
      return word;
    });
    let imgs = content.imgs.map((img) => {
      img.isCurrent = false;
      return img;
    });
    console.log("reseting isCurrent");
    updateContent({ words: [...words], imgs: [...imgs] });
  };

  const clickHandler = (obj) => {
    // Return word/img if they have isCurrent === true
    let isCurrent = function () {
      let words = content.words.filter((word) => {
        return word.isCurrent === true;
      });
      let imgs = content.imgs.filter((img) => {
        return img.isCurrent === true;
      });
      return [...imgs, ...words];
    };

    // Finding the word/img if clicked on and making isCurrent = true
    let words = content.words.map((word) => {
      if (word === obj) {
        word.isCurrent = true;
        return word;
      } else {
        return word;
      }
    });
    let imgs = content.imgs.map((img) => {
      if (img === obj) {
        img.isCurrent = true;
        return img;
      } else {
        return img;
      }
    });

    // Comparing the img and word together
    const compareArr = isCurrent();
    if (compareArr.length === 2) {
      // If both ids equal eachother they get IsCorrect = true
      // It then resets currentArr to nothing
      if (compareArr[0].id === compareArr[1].id) {
        compareArr[0].isCorrect = true;
        compareArr[1].isCorrect = true;
      }
      resetCurrent();
      console.log("compare arr is empty");
    }
    updateContent({ words: [...words], imgs: [...imgs] });
  };

  return (
    <MarginContainer>
      <WordsContainer>
        {content.words.map((word) => {
          return (
            <Word
              key={"word" + word.id}
              className={word.isCorrect ? "correct" : ""}
              onClick={() => clickHandler(word)}
            >
              <p>{word.word}</p>
            </Word>
          );
        })}
      </WordsContainer>
      <ImgsContainer>
        {content.imgs.map((img) => {
          return (
            <Img
              key={"img" + img.id}
              className={img.isCorrect ? "correct" : ""}
              onClick={() => clickHandler(img)}
              src={img.url}
              alt="a corresponding picture for each word"
            />
          );
        })}
      </ImgsContainer>
    </MarginContainer>
  );
};
