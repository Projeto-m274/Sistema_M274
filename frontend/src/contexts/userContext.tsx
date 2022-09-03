import React, { createContext, useState } from "react";

import { AxiosError, AxiosResponse } from "axios";

import { IReactComponent } from "../models/ReactComponent";
import { IUserRegister, IUserResponse } from "../models/User";

import api from "../services/api";

interface IUserContextData {
  userData: IUserResponse | undefined;
  userLogin: (username: string, password: string) => void;
  userLogout: () => void;
  createUser: (userData: IUserRegister) => void;
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
        localStorage.setItem("@token", response?.data?.token);
        localStorage.setItem("@UserLogged", "true");
        setUserData(response?.data)
      }).catch((error: AxiosError) => {
        localStorage.setItem("@UserLogged", "false");
        console.error(error);
      });
  };

  const userLogout = () => {
    localStorage.removeItem("@UserLogged");
  }

  const createUser = async (userData: IUserRegister) => {
    const createUserRequestParameter: IUserRegister = {
      nome: userData.nome,
      userName: userData.userName,
      email: userData.email,
      password: userData.password,
      perfilId: userData.perfilId,
    };

    await api.post("/Usuario", createUserRequestParameter).then(() => {
      setUserCreated(true);
      localStorage.setItem("@registerSuccessful", "true");
    }).catch((error: AxiosError) => {
      console.error(error);
      setUserCreated(false);
      localStorage.setItem("@registerSuccessful", "true");
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

