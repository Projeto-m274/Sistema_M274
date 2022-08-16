import React, { memo } from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import FollowUp from "../pages/FollowUp";
import Imovel from "../pages/Imovel";
import Register from "../pages/Register";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/follow-up" component={FollowUp} />
      <Route path="/imovel" component={Imovel} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default memo(Router);
