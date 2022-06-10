import { render, screen } from "@testing-library/react";

import MenuContainer from ".";

describe("MenuContainer component must render correctly", () => {
  test('MenuContainer component should have a "Inicio" button', () => {
    const {container} = render(<MenuContainer closeMenu={() => {}} menuIsOpen={false} />);
    expect(container.getElementsByClassName('Home')).toBeTruthy();
  });

  test('MenuContainer component should have a "Minha conta" button', () => {
    const {container} = render(<MenuContainer closeMenu={() => {}} menuIsOpen={false} />);
    expect(container.getElementsByClassName('myAccount')).toBeTruthy();
  });

  test('MenuContainer component should have a "Follow up" button', () => {
    const {container} = render(<MenuContainer closeMenu={() => {}} menuIsOpen={false} />);
    expect(container.getElementsByClassName('followUp')).toBeTruthy();
  });

  test('MenuContainer component should have a "Ocorrências" button', () => {
    const {container} = render(<MenuContainer closeMenu={() => {}} menuIsOpen={false} />);
    expect(container.getElementsByClassName('occurrence')).toBeTruthy();
  });

  test('MenuContainer component should have a "Imóveis" button', () => {
    const {container} = render(<MenuContainer closeMenu={() => {}} menuIsOpen={false} />);
    expect(container.getElementsByClassName('immobile')).toBeTruthy();
  });
});
