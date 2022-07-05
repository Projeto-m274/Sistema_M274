import styled from "styled-components";
import theme from "../../theme/theme";

interface IDropdownStyles {
  isLeftSpacing?: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Select = styled.select`
  width: 12rem;
  height: 2.5rem;

  border: 1px solid ${theme.colors.secondary.orange};
  border-radius: 8px;

  cursor: pointer;

  margin-left: ${(props: IDropdownStyles) => props.isLeftSpacing || 0}rem;
  margin-top: 8rem;
`