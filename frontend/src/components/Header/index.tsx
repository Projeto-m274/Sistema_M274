import React, { Fragment, memo, useContext } from "react";

import * as C from "./styles";

import Logo from "../../assets/images/logo.svg";
import IconMenuBurguer from "../../assets/icons/iconMenuBurguer.svg";
import {
  iconMenuBurguerAltText,
  logoAltText,
} from "../../constants/HeaderConstants";
import { AppContext } from "../../contexts/AppContext";
import MenuContainer from "../MenuContainer";

type THeaderProps = {
  isAuthenticated: boolean;
}

const Header: React.FC<THeaderProps> = ({ isAuthenticated }) => {
  const { openMenu } = useContext(AppContext);

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

      <MenuContainer />
    </Fragment>
  );
};

export default memo(Header);
