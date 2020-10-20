import React from "react";
import LeaveBtn from "./LeaveBtn";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Flex1 = styled.div`
   {
    flex: 1;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeaveBtn></LeaveBtn>
      <Flex1>Progress</Flex1>
      <Flex1>Logo</Flex1>
    </HeaderContainer>
  );
};

export default Header;
