import styled from "styled-components";
import theme from "../../../theme/theme";

export const Loader = styled.div`
  border: 5px solid ${theme.colors.primary.white};
  border-top: 5px solid transparent;
  border-radius: 50%;

  width: 35px;
  height: 35px;

  /* Safari */
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;