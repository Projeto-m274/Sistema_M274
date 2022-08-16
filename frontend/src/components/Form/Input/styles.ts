import styled from "styled-components";
import theme from "../../../theme/theme";

interface IInputStyledProps {
  hasError: boolean;
}

export const Group = styled.div``;

export const Container = styled.input<IInputStyledProps>`
  padding: 15px;

  width: 100%;
  max-width: 300px;

  border: ${(props) => props.hasError ? '1px solid red' : 0};
  border-radius: 8px;

  background-color: ${theme.colors.secondary.gray};
`;

export const InputLabel = styled.p`
  margin-top: 3rem;
  margin-bottom: 1rem;
`;