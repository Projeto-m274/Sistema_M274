import React from "react";
import { AppProvider } from "./contexts/AppContext";

import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import { GlobalStyle } from './theme/globalStyle';

const App: React.FC = () => {


  return (
    <AppProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
