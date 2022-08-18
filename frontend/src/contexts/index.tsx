import React, { Fragment } from 'react';
import { IReactComponent } from '../models/ReactComponent';
import { MenuProvider } from './menuContext';
import { UserProvider } from './userContext';

export const GlobalContexts: React.FC<IReactComponent> = ({ children }) => {
  return (
    <Fragment>
      <UserProvider>
        <MenuProvider>
          {children}
        </MenuProvider>
      </UserProvider>
    </Fragment>
  );
};