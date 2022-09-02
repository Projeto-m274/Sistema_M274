import styled from "styled-components";
import theme from "../../theme/theme";

interface IDropdownStyles {
  isTopSpacing?: number;
  isLeftSpacing?: number;
  fullWidth?: boolean;
  customBorderColor?: string;
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
  width: ${(props: IDropdownStyles) => props?.fullWidth ? '19rem' : '12rem'};
  height: 2.9rem;

  padding: 15px;

  background-color: ${theme.colors.secondary.gray};

  border: 1px solid ${(props: IDropdownStyles) => props?.customBorderColor || theme.colors.secondary.orange};
  border-radius: 8px;

  cursor: pointer;

  margin-left: ${(props: IDropdownStyles) => props.isLeftSpacing || 0}rem;
  margin-top: ${(props: IDropdownStyles) => props.isTopSpacing || 0}rem;
`