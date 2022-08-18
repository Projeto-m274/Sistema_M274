import React from "react";

import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import { GlobalStyle } from './theme/globalStyle';
import { GlobalContexts } from "./contexts";

const App: React.FC = () => {

  return (
    <GlobalContexts>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GlobalContexts>
  );
};

export default App;
