import React, { ComponentType, memo, useContext } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

import { UserContext } from "../contexts/userContext";

interface AuthenticatedRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
};

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { userData } = useContext(UserContext);

  return (
    <Route {...rest} 
      render={() => {
        return isPrivate === !!userData ? (
          <Component />
        ) : (
          <Redirect to={{ 
            pathname: isPrivate 
            ? "/" 
            : "/follow-up"
          }} />
        )
      }}
    />
  );
};

export default memo(AuthenticatedRoute);