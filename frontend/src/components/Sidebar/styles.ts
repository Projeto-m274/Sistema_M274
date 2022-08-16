import styled from "styled-components";
import theme from "../../theme/theme";

interface IImovelStyles {
  marginBottom?: number;
}

export const Container = styled.aside`
  display: flex;
  flex-direction: column;

  margin-right: 5rem;
`;

export const Button = styled.button`
  width: 14rem;
  height: 4rem;


  margin-bottom: ${(props: IImovelStyles) => props.marginBottom || 0}rem;

  color: ${theme.colors.primary.orange};
  font-size: 1.1rem;

  background-color: ${theme.colors.primary.white};

  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.primary.orange};
`;
