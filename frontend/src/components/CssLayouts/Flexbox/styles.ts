import styled from "styled-components";

import { FlexBoxModel } from "../../../models/FlexBox";

export const Container = styled.div<FlexBoxModel>`
  display: flex;
  flex: ${(props: FlexBoxModel) => props?.flex || 0};
  flex-direction: ${(props: FlexBoxModel) => props?.flexDirection || "row"};
  align-items: ${(props: FlexBoxModel) => props?.alignItems || "center"};
  justify-content: ${(props: FlexBoxModel) => props?.justifyContent || "center"};

  width: ${(props: FlexBoxModel) => props?.fullWidth && "100%"};
`;