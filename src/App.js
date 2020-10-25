import React, { useState } from "react";
import "./App.css";
import { Intro } from "./components/BasicsContainer/Intro.component";
// import BasicsContainer from "./containers/BasicsContainer";
// import MainHeader from "./components/headers/MainHeader";
// import MainNavigationSection from "./components/home-page-components/MainNavigationSection";
// import Contact from "./components/contact-components/Contact";
// import Friends from "./components/friends-components/Friends";
// import Languages from "./components/languages-components/Languages";

import ProgressHeader from "./components/headers/ProgressHeader";

function App() {
  // const [page, currentPage] = useState("main");
  // const [navSection, changeNavSection] = useState("home");

  // const thisPage = () => {
  //   if (page === "main") {
  //     if (navSection === "home") {
  //       return (
  //         <>
  //           <MainHeader
  //             selectHome={() => changeNavSection("home")}
  //             selectContact={() => changeNavSection("contact")}
  //             selectFriends={() => changeNavSection("friends")}
  //             selectLanguage={() => changeNavSection("language")}
  //           />
  //           <MainNavigationSection selectBasics={() => currentPage("basics")} />
  //         </>
  //       );
  //     }
  //     if (navSection === "contact") {
  //       return (
  //         <>
  //           <MainHeader
  //             selectHome={() => changeNavSection("home")}
  //             selectContact={() => changeNavSection("contact")}
  //             selectFriends={() => changeNavSection("friends")}
  //             selectLanguage={() => changeNavSection("language")}
  //           />
  //           <Contact />
  //         </>
  //       );
  //     }
  //     if (navSection === "friends") {
  //       return (
  //         <>
  //           <MainHeader
  //             selectHome={() => changeNavSection("home")}
  //             selectContact={() => changeNavSection("contact")}
  //             selectFriends={() => changeNavSection("friends")}
  //             selectLanguage={() => changeNavSection("language")}
  //           />
  //           <Friends />
  //         </>
  //       );
  //     }
  //     if (navSection === "language") {
  //       return (
  //         <>
  //           <MainHeader
  //             selectHome={() => changeNavSection("home")}
  //             selectContact={() => changeNavSection("contact")}
  //             selectFriends={() => changeNavSection("friends")}
  //             selectLanguage={() => changeNavSection("language")}
  //           />
  //           <Languages />
  //         </>
  //       );
  //     }
  //   } else if (page === "basics") {
  //     return <BasicsContainer returnToMain={() => currentPage("main")} />;
  //   }
  // };

  return (
    <div className="App">
      <ProgressHeader />
      <Intro />
    </div>
  );
}

export default App;
