import styled from "styled-components";
import theme from "../../theme/theme";

export const Container = styled.header`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    padding: 15px;

    position: relative;

    background-color: ${theme.colors.primary.gray};
`;

export const Logo = styled.img`
    margin-right: 180px;

    cursor: pointer;
`;

export const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    width: 50px;
    height: 50px;

    padding: 5px;

    left: 1rem;

    border-radius: 100px;

    &:hover {
        cursor: pointer;
        background-color: ${theme.colors.secondary.black}; 
    }       

    transition: .3s;
`;

export const MenuIcon = styled.img`
    cursor: pointer;

    &:hover {
        opacity: .8;
    }

    transition: .3s;
`;

