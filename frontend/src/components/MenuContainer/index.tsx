import React, { useContext } from "react";
import * as C from "./styles";
import IconUser from "../../assets/icons/IconUser.svg";
import IconCloseMenu from "../../assets/icons/IconCloseMenu.svg";
import IconHome from "../../assets/icons/IconHome.svg";
import IconMyAccount from "../../assets/icons/IconMyAccount.svg";
import IconFollowUp from "../../assets/icons/IconFollowUp.svg";
import IconOccurrence from "../../assets/icons/IconOccurrence.svg";
import IconImmobile from "../../assets/icons/IconImmobile.svg";
import {
  iconCloseMenuAltText,
  iconUserAltText,
  iconHomeAltText,
  iconMyAccountAltText,
  iconFollowUpAltText,
  iconOccurrencesAltText,
  iconImmobileAltText,
} from "../../constants/MenuContainerConstants";
import { AppContext } from "../../contexts/AppContext";

const MenuContainer: React.FC = () => {

  const {menuIsOpen, closeMenu} = useContext(AppContext)

  return (
    <C.Container menuIsOpen={menuIsOpen}>
      <C.IconCloseMenu onClick={closeMenu} src={IconCloseMenu} alt={iconCloseMenuAltText} />

      <C.ContainerUserLogged>
        <img src={IconUser} alt={iconUserAltText} />
        <h1>Seja bem vindo(a) Mirian Teles</h1>
      </C.ContainerUserLogged>

      <C.NavContainer>
        <C.ItemNav className="home">
          <img src={IconHome} alt={iconHomeAltText} />
          <span>Inicio</span>
        </C.ItemNav>
        <C.ItemNav className="myAccount">
          <img src={IconMyAccount} alt={iconMyAccountAltText} />
          <span>Minha conta</span>
        </C.ItemNav>
        <C.ItemNav className="followUp">
          <img src={IconFollowUp} alt={iconFollowUpAltText} />
          <span>Follow up</span>
        </C.ItemNav>
        <C.ItemNav className="occurrence">
          <img src={IconOccurrence} alt={iconOccurrencesAltText} />
          <span>Ocorrências</span>
        </C.ItemNav>
        <C.ItemNav className="immobile">
          <img src={IconImmobile} alt={iconImmobileAltText} />
          <span>Imóveis</span>
        </C.ItemNav>
      </C.NavContainer>
    </C.Container>
  );
};

export default MenuContainer;
