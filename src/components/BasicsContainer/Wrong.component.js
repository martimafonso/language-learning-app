import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  color: red;
  font-size: 1.6rem;
  transition: all 0.1s ease;
`;

function Wrong({ isWrong }) {
  const style = {
    opacity: isWrong ? "1" : "0",
  };
  return (
    <StyledP tabIndex={0} style={style}>
      Incorrect
    </StyledP>
  );
}

export default Wrong;
