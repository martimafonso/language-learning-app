import React from "react";
import styled from "styled-components";
import "./Intro.component.css";
import Wrong from "./Wrong.component";

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
  transition: all 0.25s ease;
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
  width: auto;
  height: 150px;
  margin: 5px;
  border-radius: 10px;
  border: 3px white solid;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.25s ease;
  &:hover {
    border-color: black;
  }
`;

const MarginContainer = styled.div`
  width: 1000px;
  margin: auto;
`;

/* If I get the backend running, I will make something
   to randomize what either gets placed into the content hook
   OR will create the function inside of here.
*/

export const Intro = (props) => {
  const resetCurrent = () => {
    let words = props.content.words.map((word) => {
      word.isCurrent = false;
      return word;
    });
    let imgs = props.content.imgs.map((img) => {
      img.isCurrent = false;
      return img;
    });
    console.log("reseting isCurrent");
    props.updateContent({ words: [...words], imgs: [...imgs] });
  };

  // A large function for handling updating state and
  // comparing objects
  const clickHandler = (obj) => {
    // Return word/img if they have isCurrent === true
    let isCurrent = function () {
      let words = props.content.words.filter((word) => {
        return word.isCurrent === true;
      });
      let imgs = props.content.imgs.filter((img) => {
        return img.isCurrent === true;
      });
      return [...imgs, ...words];
    };

    // Finding the word/img if clicked on and making isCurrent = true
    let words = props.content.words.map((word) => {
      if (word === obj) {
        word.isCurrent = true;
        return word;
      } else {
        return word;
      }
    });
    let imgs = props.content.imgs.map((img) => {
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
      } else {
        props.setIsWrong(true);
        setTimeout(() => {
          props.setIsWrong(false);
        }, 1000);
      }
      resetCurrent();
      console.log("compare arr is empty");
    }
    props.updateContent({ words: [...words], imgs: [...imgs] });
  };

  function compare(item) {
    return item.isCorrect === true;
  }

  if (props.content.words.every(compare)) {
    setTimeout(() => {
      props.updateSection();
    }, 500);
  }

  return (
    <MarginContainer>
      <h2>Match each word to their image</h2>
      <WordsContainer>
        {props.content.words.map((word, index) => {
          return (
            <Word
              tabIndex={word.isCorrect ? null : 0}
              style={word.isCurrent ? { color: "red" } : { color: "black" }}
              key={"word" + word.id}
              className={word.isCorrect ? "correct" : ""}
              onClick={() => clickHandler(word)}
              onKeyPress={() => clickHandler(word)}
            >
              <p>{word.word}</p>
            </Word>
          );
        })}
      </WordsContainer>
      <ImgsContainer>
        {props.content.imgs.map((img, index) => {
          return (
            <Img
              tabIndex={img.isCorrect ? null : 0}
              style={
                img.isCurrent ? { borderColor: "red" } : { color: "black" }
              }
              key={"img" + img.id}
              className={img.isCorrect ? "correct" : ""}
              onClick={() => clickHandler(img)}
              onKeyPress={() => clickHandler(img)}
              onEnter
              src={img.url}
              alt="a corresponding picture for each word"
            />
          );
        })}
      </ImgsContainer>
      <Wrong isWrong={props.isWrong} />
    </MarginContainer>
  );
};
