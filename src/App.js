import React, { useState } from "react";
import "./App.css";
import BasicsContainer from "./containers/BasicsContainer";
import MainHeader from "./components/mainContainer/MainHeader";
import MainNavigationSection from "./components/mainContainer/homeSection/MainNavigationSection";
import Contact from "./components/Contact";
import Friends from "./components/Friends";
import Languages from "./components/Languages";

function App() {
  const [page, currentPage] = useState("main");
  const [navSection, changeNavSection] = useState("home");

  const thisPage = () => {
    if (page === "main") {
      if (navSection === "home") {
        return (
          <>
            <MainHeader
              selectHome={() => changeNavSection("home")}
              selectContact={() => changeNavSection("contact")}
              selectFriends={() => changeNavSection("friends")}
              selectLanguage={() => changeNavSection("language")}
            />
            <MainNavigationSection selectBasics={() => currentPage("basics")} />
          </>
        );
      }
      if (navSection === "contact") {
        return (
          <>
            <MainHeader
              selectHome={() => changeNavSection("home")}
              selectContact={() => changeNavSection("contact")}
              selectFriends={() => changeNavSection("friends")}
              selectLanguage={() => changeNavSection("language")}
            />
            <Contact />
          </>
        );
      }
      if (navSection === "friends") {
        return (
          <>
            <MainHeader
              selectHome={() => changeNavSection("home")}
              selectContact={() => changeNavSection("contact")}
              selectFriends={() => changeNavSection("friends")}
              selectLanguage={() => changeNavSection("language")}
            />
            <Friends />
          </>
        );
      }
      if (navSection === "language") {
        return (
          <>
            <MainHeader
              selectHome={() => changeNavSection("home")}
              selectContact={() => changeNavSection("contact")}
              selectFriends={() => changeNavSection("friends")}
              selectLanguage={() => changeNavSection("language")}
            />
            <Languages />
          </>
        );
      }
    } else if (page === "basics") {
      return <BasicsContainer returnToMain={() => currentPage("main")} />;
    }
  };

  return <div className="App">{thisPage()}</div>;
}

export default App;
