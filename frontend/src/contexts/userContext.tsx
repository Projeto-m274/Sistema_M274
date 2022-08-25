import React, { createContext, useState } from "react";

import { AxiosError, AxiosResponse } from "axios";

import { IReactComponent } from "../models/ReactComponent";
import { IUser, IUserResponse } from "../models/User";

import api from "../services/api";

interface IUserContextData {
  userData: IUserResponse | undefined;
  userLogin: (username: string, password: string) => void;
  userLogout: () => void;
  createUser: (userData: IUser) => void;
  userCreated: boolean;
};

export const UserContext = createContext<IUserContextData>({} as IUserContextData);

export const UserProvider: React.FC<IReactComponent> = ({ children }) => {
  const [userData, setUserData] = useState<IUserResponse>();
  const [userCreated, setUserCreated] = useState<boolean>(false);

  const userLogin = async (username: string, password: string) => {
    const loginUserRequestParameter = {
      username,
      password
    }

    await api.post("/Account/login", loginUserRequestParameter)
      .then((response: AxiosResponse<IUserResponse>) => {
        localStorage.setItem("@UserLogged", "true");
        setUserData(response?.data)
      }).catch((error: AxiosError) => {
        console.error(error);
        localStorage.setItem("@UserLogged", "false");
      });
  };

  const userLogout = () => {
    localStorage.removeItem("@UserLogged");
  }

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

  return (
    <UserContext.Provider value={{ 
      userData, 
      userLogin,
      userLogout,
      createUser, 
      userCreated,
    }}>
      {children}
    </UserContext.Provider>
  );
};

