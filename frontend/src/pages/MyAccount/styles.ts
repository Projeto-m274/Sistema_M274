import styled from "styled-components";
import theme from "../../theme/theme";

interface MyAccountStyledProps {
  isFirstTitle?: boolean;
}

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
    opacity: .9;
    cursor: pointer;
  }
`;

export const SuperTitle = styled.h1`
  margin-top: 50px;

  color: ${theme.colors.primary.orange}
`;

export const Title = styled.h3`
  color: #fff;

  margin-left: ${(props: MyAccountStyledProps) => !props.isFirstTitle && 90}px;
`;

export const Text = styled.p`
  color: #fff;

  font-size: 20px;
`;