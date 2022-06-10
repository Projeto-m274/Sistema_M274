import React, { useState } from "react";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import { GlobalStyle } from "./theme/globalStyle";

const App: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function openMenu() {
    setMenuIsOpen(true);
  }

  function closeMenu() {
    setMenuIsOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header openMenu={openMenu}/>
      <MenuContainer closeMenu={closeMenu} menuIsOpen={menuIsOpen} />
    </>
  );
};

export default App;
