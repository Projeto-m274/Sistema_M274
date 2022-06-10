import styled from "styled-components";
import theme from "../../theme/theme";

interface IProps {
  menuIsOpen: boolean
}

export const Container = styled.div<IProps>`
  height: 100vh;
  width: 100%;
  max-width: ${props => props.menuIsOpen ? '300px' : '0px'};

  transition: 0.3s;

  overflow: hidden;
  
  position: fixed;
  top: 0;
  left: 0;

  background-color: ${theme.colors.primary.gray};

  border: 1px solid ${theme.colors.primary.orange};
`

export const IconCloseMenu = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;

  cursor: pointer;
`

export const ContainerUserLogged = styled.div`
min-width: 300px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3rem 0 0.80rem 0;
  border-bottom: 1px solid ${theme.colors.primary.white};

  h1{
    font-size: 1rem;
    
    text-transform: uppercase;
    color: ${theme.colors.primary.white};
    text-align: center;

    margin-left: 0.5rem;

    max-width: 175px;
  }
`

export const NavContainer = styled.ul`
min-width: 300px;

  width: 100%;
  overflow: hidden;
`

export const ItemNav = styled.li`
  height: 85px;
  width: 100%;

  cursor: pointer;
  
  list-style: none;
    
  display: flex;
  align-items: center;

  padding-left: 3rem;
  border-bottom: 1px solid ${theme.colors.primary.white};
  
  transition: 0.3s;

  &:hover{
    background-color: ${theme.colors.secondary.black};
  }

  span{
    margin-left: 1rem;
    
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;

    color: ${theme.colors.primary.white};
  }
`