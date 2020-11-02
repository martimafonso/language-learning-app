import React, { useState } from "react";
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

export const Intro = ({ updateSection }) => {
  const [introContent, updateIntroContent] = useState({
    words: [
      { word: "Chien", id: 1, isCorrect: false, isCurrent: false },
      { word: "Chat", id: 2, isCorrect: false, isCurrent: false },
      { word: "Personne", id: 3, isCorrect: false, isCurrent: false },
      { word: "Oiseau", id: 4, isCorrect: false, isCurrent: false },
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
    ],
  });

  const [isWrong, setIsWrong] = useState(false);

  const resetCurrent = () => {
    let words = introContent.words.map((word) => {
      word.isCurrent = false;
      return word;
    });
    let imgs = introContent.imgs.map((img) => {
      img.isCurrent = false;
      return img;
    });
    console.log("reseting isCurrent");
    updateIntroContent({ words: [...words], imgs: [...imgs] });
  };

  // A large function for handling updating state and
  // comparing objects
  const clickHandler = (obj) => {
    // Return word/img if they have isCurrent === true
    let isCurrent = function () {
      let words = introContent.words.filter((word) => {
        return word.isCurrent === true;
      });
      let imgs = introContent.imgs.filter((img) => {
        return img.isCurrent === true;
      });
      return [...imgs, ...words];
    };

    // Finding the word/img if clicked on and making isCurrent = true
    let words = introContent.words.map((word) => {
      if (word === obj) {
        word.isCurrent = true;
        return word;
      } else {
        return word;
      }
    });
    let imgs = introContent.imgs.map((img) => {
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
        setIsWrong(true);
        setTimeout(() => {
          setIsWrong(false);
        }, 1000);
      }
      resetCurrent();
      console.log("compare arr is empty");
    }
    updateIntroContent({ words: [...words], imgs: [...imgs] });
  };

  function compare(item) {
    return item.isCorrect === true;
  }

  if (introContent.words.every(compare)) {
    setTimeout(() => {
      updateSection();
    }, 500);
  }

  return (
    <MarginContainer>
      <h2>Match each word to their image</h2>
      <WordsContainer>
        {introContent.words.map((word) => {
          return (
            <Word
              style={word.isCurrent ? { color: "red" } : { color: "black" }}
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
        {introContent.imgs.map((img) => {
          return (
            <Img
              style={
                img.isCurrent ? { borderColor: "red" } : { color: "black" }
              }
              key={"img" + img.id}
              className={img.isCorrect ? "correct" : ""}
              onClick={() => clickHandler(img)}
              src={img.url}
              alt="a corresponding picture for each word"
            />
          );
        })}
      </ImgsContainer>
      <Wrong isWrong={isWrong} />
    </MarginContainer>
  );
};
