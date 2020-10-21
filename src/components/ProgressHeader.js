import React from "react";
import LeaveBtn from "./LeaveBtn";
import styled from "styled-components";

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivFlex1 = styled.div`
  flex: 1;
`;

const MarginContainer = styled.div`
  background-color: #ddd;
  padding: 5px;
`;

const Header = () => {
  return (
    <MarginContainer>
      <HeaderContainer>
        <LeaveBtn></LeaveBtn>
        <DivFlex1>0%</DivFlex1>
        <DivFlex1>
          <img
            width="auto"
            height="50px"
            src="https://image.flaticon.com/icons/png/512/496/496394.png"
            alt="a logo"
          ></img>
        </DivFlex1>
      </HeaderContainer>
    </MarginContainer>
  );
};

export default Header;
