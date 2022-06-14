import styled from "styled-components";
import theme from "../../theme/theme";

export const Container = styled.button`
  margin-top: 2rem;

  width: 10rem;

  padding: .8rem;

  background-color: ${theme.colors.primary.orange};

  border: 0;
  border-radius: 8px;

  color: ${theme.colors.primary.white};

  cursor: pointer;

  &:hover {
    opacity: .8;
  }

  transition: .2s;
`;