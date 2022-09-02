import React, { memo } from "react";

import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import FollowUp from "../pages/FollowUp";
import Imovel from "../pages/Imovel";
import Register from "../pages/Register";
import MyAccount from "../pages/MyAccount";
import NotFound from "../pages/NotFound";
import Ocurrences from "../pages/Ocurrences";
import RegisterOcurrence from "../pages/Ocurrences/RegisterOcurrence";
import OcurrencesList from "../pages/Ocurrences/OcurrencesList";

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
        path="/ocurrences-list"
        component={OcurrencesList}
      />

      <Route
        path="/register-ocurrence"
        component={RegisterOcurrence}
      />

      <Route
        path="/404"
        component={NotFound}
      />

      <Route 
        path="*"
        component={NotFound} 
      />
    </Switch>
  );
};

export default memo(Router);
