import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import FollowUp from '../pages/FollowUp';
import Imovel from '../pages/Imovel';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />
      <Route path='/follow-up' component={FollowUp} />
      <Route path='/imovel' component={Imovel} />
    </Switch>
  );
};

export default memo(Router);