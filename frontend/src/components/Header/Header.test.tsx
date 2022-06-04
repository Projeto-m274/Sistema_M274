import { render, screen } from '@testing-library/react';

import Header from '.';
import { iconMenuBurguerAltText, logoAltText } from '../../constants/HeaderConstants';

describe('Header component must render correctly', () => {
    test('Header must be render into screen with a image and icon', () => {
        const _menuIconAltText = iconMenuBurguerAltText;
        const _logoAltText = logoAltText;
        
        render(<Header />);

        expect(screen.getAllByAltText(_menuIconAltText)).toBeTruthy();
        expect(screen.getAllByAltText(_logoAltText)).toBeTruthy();
    });
});