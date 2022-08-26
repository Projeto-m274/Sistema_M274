import React, { useContext, useMemo } from "react";

import { useHistory } from "react-router-dom";
import { 
  MdAccountCircle,
  MdHome, 
  MdManageAccounts,
  MdLogout,
  MdGroupAdd, 
  MdArrowCircleUp,
  MdError,
  MdHouse,
} from "react-icons/md";

import { MenuContext } from "../../contexts/menuContext";
import { UserContext } from "../../contexts/userContext";

import * as C from "./styles";

const SideMenu: React.FC = () => {

  const { menuIsOpen, closeMenu } = useContext(MenuContext);
  const { userLogout, userData } = useContext(UserContext);

  const history = useHistory();

  const handleSignOut = () => {
    closeMenu();
    userLogout();
    history.push("/");
  }

  const handleToRoute = (pathname: string) => {
    closeMenu();
    history.push(pathname);
  }

  const user = useMemo(() => {
    return userData?.usuario?.nome || "usuário";
  }, [userData]);

  return (
    <C.Container menuIsOpen={menuIsOpen}>
      <C.IconCloseMenu 
        size={28}
        color="#fff"
        onClick={closeMenu} 
      />

      <C.ContainerUserLogged>
        <MdAccountCircle size={38} color="#fff" />
        <h1>Seja bem vindo(a) {user}</h1>
      </C.ContainerUserLogged>

      <C.NavContainer>
        <C.ItemNav className="home" onClick={() => handleToRoute("/follow-up")}>
          <MdHome size={28} color="#fff" />
          <span>Inicio</span>
        </C.ItemNav>
        <C.ItemNav className="myAccount" onClick={() => handleToRoute("/my-account")}>
          <MdManageAccounts size={28} color="#fff" />
          <span>Minha conta</span>
        </C.ItemNav>
        <C.ItemNav className="registerUser" onClick={() => handleToRoute("/register")}>
          <MdGroupAdd size={28} color="#fff" />
          <span>Cadastrar usuário</span>
        </C.ItemNav>
        <C.ItemNav className="followUp" onClick={() => handleToRoute("/follow-up")}>
          <MdArrowCircleUp size={28} color="#fff" />
          <span>Follow up</span>
        </C.ItemNav>
        <C.ItemNav className="occurrence" onClick={() => handleToRoute("/404")}>
          <MdError size={28} color="#fff" />
          <span>Ocorrências</span>
        </C.ItemNav>
        <C.ItemNav className="immobile">
          <MdHouse size={28} color="#fff" />
          <span>Imóveis</span>
        </C.ItemNav>
        <C.ItemNav className="signOut" onClick={handleSignOut}>
          <MdLogout color="#fff" size={28} />
          <span>Sair</span>
        </C.ItemNav>
      </C.NavContainer>
    </C.Container>
  );
};

export default SideMenu;
