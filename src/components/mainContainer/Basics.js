import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  cursor: pointer;
  width: 100px;
  padding: 10px 10px 1px;
  margin: auto;
  border-radius: 10px;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 2px 4px 10px gray;
  }
`;

const Basics = (props) => {
  return (
    <ImgContainer onClick={props.click}>
      <img
        height="100px"
        src="https://cdn1.iconfinder.com/data/icons/user-interface-basics/512/BI_095_box-512.png"
        alt="whatever"
      />
      <p>Basics</p>
    </ImgContainer>
  );
};

export default Basics;
