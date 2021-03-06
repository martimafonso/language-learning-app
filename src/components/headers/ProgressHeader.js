import React from "react";
import LeaveBtn from "../navigational-components/LeaveBtn";
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
  background-color: #00b1fd;
  padding: 5px;
`;

const Header = (props) => {
  const ProgressBarContainer = styled.div`
    position: relative;
    flex: 1;
    border: 1px solid black;
    height: 10px;
    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 10px;
      background-color: black;
    }
  `;

  return (
    <MarginContainer>
      <HeaderContainer>
        <LeaveBtn homeUrl={props.homeUrl} />
        <ProgressBarContainer>
          <div style={{ width: props.progress }}></div>
        </ProgressBarContainer>
        <DivFlex1>
          <img width="auto" height="50px" src={props.icon} alt="a logo"></img>
        </DivFlex1>
      </HeaderContainer>
    </MarginContainer>
  );
};

export default Header;
