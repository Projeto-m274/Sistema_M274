import React, { memo, useContext } from "react";
import * as C from "./styles";

import Logo from "../../assets/images/logo.svg";
import IconMenuBurguer from "../../assets/icons/iconMenuBurguer.svg";
import {
  iconMenuBurguerAltText,
  logoAltText,
} from "../../constants/HeaderConstants";
import { AppContext } from "../../contexts/AppContext";

const Header: React.FC = () => {
  const { openMenu } = useContext(AppContext);

  return (
    <C.Container>
      <C.MenuIconContainer>
        <C.MenuIcon
          onClick={openMenu}
          src={IconMenuBurguer}
          alt={iconMenuBurguerAltText}
        />
      </C.MenuIconContainer>
      <C.Logo src={Logo} alt={logoAltText} />
    </C.Container>
  );
};

export default memo(Header);
