import React from "react";
import { Button, Container } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Button marginBottom={1}>Conformidade</Button>
      <Button marginBottom={1}>Desenho</Button>
      <Button marginBottom={1}>Detalhes</Button>
      <Button>Características</Button>
    </Container>
  );
};

export default Sidebar;
