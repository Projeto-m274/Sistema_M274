import React, { useState } from "react";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import { AppProvider } from "./contexts/AppContext";
import { GlobalStyle } from "./theme/globalStyle";

const App: React.FC = () => {


  return (
    <AppProvider>
      <GlobalStyle />
      <Header />
      <MenuContainer  />
    </AppProvider>
  );
};

export default App;
