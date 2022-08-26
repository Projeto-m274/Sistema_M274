import React, { memo } from "react";

import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import FollowUp from "../pages/FollowUp";
import Imovel from "../pages/Imovel";
import Register from "../pages/Register";
import MyAccount from "../pages/MyAccount";
import AuthenticatedRoute from "./AuthenticatedRoute";

const Router: React.FC = () => {
  return (
    <Switch>
      <AuthenticatedRoute 
        path="/" 
        exact 
        component={SignIn} 
      />

      <AuthenticatedRoute 
        path="/my-account" 
        component={MyAccount} 
        isPrivate
      />

      <AuthenticatedRoute 
        path="/follow-up" 
        component={FollowUp} 
        isPrivate
      />

      <AuthenticatedRoute 
        path="/imovel" 
        component={Imovel} 
        isPrivate
      />

      <AuthenticatedRoute 
        path="/register" 
        component={Register} 
        isPrivate
      />
    </Switch>
  );
};

export default memo(Router);
