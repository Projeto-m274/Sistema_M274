import React, { memo } from "react";

import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import FollowUp from "../pages/FollowUp";
import Imovel from "../pages/Imovel";
import Register from "../pages/Register";
import MyAccount from "../pages/MyAccount";
import NotFound from "../pages/NotFound";
import Ocurrences from "../pages/Ocurrences";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route 
        path="/" 
        exact 
        component={SignIn} 
      />

      <Route 
        path="/my-account" 
        component={MyAccount} 
      />

      <Route 
        path="/follow-up" 
        component={FollowUp} 
      />

      <Route 
        path="/imovel" 
        component={Imovel} 
      />

      <Route 
        path="/register" 
        component={Register} 
      />

      <Route 
        path="/ocurrences"
        component={Ocurrences}
      />

      <Route 
        path="/404"
        component={NotFound}
      />
    </Switch>
  );
};

export default memo(Router);
