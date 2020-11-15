import React from "react";
import MainHeader from "../headers/MainHeader";
import LanguagesLinks from "./LanguagesLinks.component";

const Languages = () => {
  return (
    <div>
      <MainHeader />
      <h2> Your Languages </h2>
      <LanguagesLinks />
    </div>
  );
};

export default Languages;
