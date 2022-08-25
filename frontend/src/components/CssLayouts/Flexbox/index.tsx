import React, { memo, ReactNode } from "react";
import { FlexBoxModel } from "../../../models/FlexBox";
import { Container } from "./styles";

type FlexBoxProps = {
  children?: ReactNode;
}

const Flexbox: React.FC<FlexBoxModel & FlexBoxProps> = ({
  flex,
  flexDirection,
  alignItems,
  justifyContent,
  gap,
  fullWidth,
  children,
}) => {
  return (
    <Container
      flex={flex}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      fullWidth={fullWidth}
    >
      {children}
    </Container>
  );
};

export default memo(Flexbox);