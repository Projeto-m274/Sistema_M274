import React, { memo } from 'react';

import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />
    </Switch>
  );
};

export default memo(Router);