import React, { createContext, useCallback, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IAppContextProps {
  menuIsOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const AppContext = createContext<IAppContextProps>({} as IAppContextProps);

export const AppProvider: React.FC<IProps> = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  return (
    <AppContext.Provider value={{ menuIsOpen, openMenu, closeMenu }}>
      {children}
    </AppContext.Provider>
  );
};
