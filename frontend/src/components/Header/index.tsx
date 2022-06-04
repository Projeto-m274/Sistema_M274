import React, { memo } from 'react';
import * as C from './styles';

import Logo from '../../assets/images/logo.svg';
import IconMenuBurguer from '../../assets/icons/iconMenuBurguer.svg';
import { iconMenuBurguerAltText, logoAltText } from '../../constants/HeaderConstants';

const Header: React.FC = () => {
    return (
        <C.Container>
            <C.MenuIconContainer>
                <C.MenuIcon
                    src={IconMenuBurguer}
                    alt={iconMenuBurguerAltText}
                />
            </C.MenuIconContainer>
            <C.Logo
                src={Logo}
                alt={logoAltText}
            />
        </C.Container>
    );
};

export default memo(Header);