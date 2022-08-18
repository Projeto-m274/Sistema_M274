import { AxiosError, AxiosResponse } from "axios";
import React, { createContext, useState } from "react";

import { IReactComponent } from "../models/ReactComponent";
import { IUser } from "../models/User";
import api from "../services/api";

interface IUserContextData {
  userData: IUser | undefined;
  userLogin: (username: string, password: string) => void;
  createUser: (userData: IUser) => void;
  updateUser: (userData: IUser) => void;
  userCreated: boolean;
  userLoggedIn: boolean;
};

export const UserContext = createContext<IUserContextData>({} as IUserContextData);

export const UserProvider: React.FC<IReactComponent> = ({ children }) => {
  const [userData, setUserData] = useState<IUser>();
  const [userCreated, setUserCreated] = useState<boolean>(false);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  const userLogin = async (username: string, password: string) => {
    const loginUserRequestParameter = {
      username,
      password
    }

    await api.post("/Account/login", loginUserRequestParameter)
      .then(() => {
        setUserLoggedIn(true);
      }).catch((error: AxiosError) => {
        console.error(error);
        setUserLoggedIn(false);
      });
  };

  const createUser = async (userData: IUser) => {
    const createUserRequestParameter: IUser = {
      name: userData?.name,
      username: userData?.username,
      email: userData?.email,
      password: userData?.password,
      profileId: userData?.profileId,
    };

    await api.post("/Usuario", createUserRequestParameter).then(() => {
      setUserCreated(true);
    }).catch((error: AxiosError) => {
      console.error(error);
      setUserCreated(false);
    });
  }

  const updateUser = (userData: IUser) => {
    setUserData(userData);
  };

  return (
    <UserContext.Provider value={{ 
      userData, 
      userLogin,
      createUser, 
      updateUser, 
      userCreated,
      userLoggedIn, 
    }}>
      {children}
    </UserContext.Provider>
  );
};

