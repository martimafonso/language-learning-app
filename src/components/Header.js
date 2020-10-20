import React from "react";
import "./Header.css";
import LeaveBtn from "./LeaveBtn";

const Header = () => {
  return (
    <header className="header-container">
      <LeaveBtn></LeaveBtn>
      <div className="progress-bar">Progress</div>
      <div className="logo">Logo</div>
    </header>
  );
};

export default Header;
