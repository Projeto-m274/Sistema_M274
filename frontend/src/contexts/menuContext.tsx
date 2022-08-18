import React, { createContext, useCallback, useState } from "react";

import { IReactComponent } from "../models/ReactComponent";

interface IMenuContextData {
  menuIsOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const MenuContext = createContext<IMenuContextData>({} as IMenuContextData);

export const MenuProvider: React.FC<IReactComponent> = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  return (
    <MenuContext.Provider value={{ menuIsOpen, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
