import React, { Fragment, memo, useContext } from "react";

import * as C from "./styles";

import Logo from "../../assets/images/logo.svg";
import IconMenuBurguer from "../../assets/icons/iconMenuBurguer.svg";
import {
  iconMenuBurguerAltText,
  logoAltText,
} from "../../constants/HeaderConstants";
import { MenuContext } from "../../contexts/menuContext";
import SideMenu from "../SideMenu";

type THeaderProps = {
  isAuthenticated: boolean;
}

const Header: React.FC<THeaderProps> = ({ isAuthenticated }) => {
  const { openMenu } = useContext(MenuContext);

  return (
    <Fragment>
      <C.Container>
        {isAuthenticated && (
          <C.MenuIconContainer>
            <C.MenuIcon
              onClick={openMenu}
              src={IconMenuBurguer}
              alt={iconMenuBurguerAltText}
            />
          </C.MenuIconContainer>
        )}
        <C.Logo src={Logo} alt={logoAltText} />
      </C.Container>

      <SideMenu />
    </Fragment>
  );
};

export default memo(Header);
