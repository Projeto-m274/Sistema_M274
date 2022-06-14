import styled from "styled-components";
import theme from "../../theme/theme";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-top: 5rem;
`;

export const ColumnStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  max-width: 19rem;
`;

export const Label = styled.p`
  margin-top: 3rem;
`;