import styled from "styled-components";
import theme from "../../theme/theme";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: 250px;

  margin: 150px;

  box-shadow: 4px 4px 4px 4px #c0c0c0;

  background: ${theme?.colors?.secondary?.orange};

  border-radius: 10px;

  transition: .2s;

  &:hover {
    opacity: .8;
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  color: #fff;
`;

export const Text = styled.p`
  color: #fff;
`;