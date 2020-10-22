import React from "react";
import styled from "styled-components";

const Header = styled.div`
  max-width: 1200px;
  height: 70px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  > a {
    flex: 1;
    height: 100%;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: #c1c1c1;
    }
  }
`;

const MarginContainer = styled.div`
  background-color: #ddd;
`;

const A = styled.a`
  color: black;
  text-decoration: none;
  i {
    font-size: 2.4rem;
    position: relative;
    top: 15px;
  }
  img {
    position: relative;
    top: 15px;
  }
`;

const MainHeader = (props) => {
  return (
    <MarginContainer>
      <Header>
        <A href="#" onClick={props.selectHome}>
          <i className="fas fa-home"></i>
        </A>
        <A href="#" onClick={props.selectContact}>
          <i className="fas fa-phone"></i>
        </A>
        <A href="#" onClick={props.selectFriends}>
          <i className="fas fa-users"></i>
        </A>
        <A href="#" onClick={props.selectLanguage}>
          <img
            height="40px"
            src="https://image.flaticon.com/icons/png/512/496/496394.png"
          />
        </A>
      </Header>
    </MarginContainer>
  );
};

export default MainHeader;
