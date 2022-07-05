import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import FollowUp from '../pages/FollowUp';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />
      <Route path='/follow-up' component={FollowUp} />
    </Switch>
  );
};

export default memo(Router);