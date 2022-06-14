import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import { GlobalStyle } from './theme/globalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;