import React, { memo, useContext } from "react";

import Flexbox from "../../components/CssLayouts/Flexbox";
import Header from "../../components/Header";

import { UserContext } from "../../contexts/userContext";

import { Title, Text, Box, SuperTitle } from "./styles";

const MyAccount: React.FC = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <Header isAuthenticated />

      <Flexbox>
        <SuperTitle>Seus Dados</SuperTitle>
      </Flexbox>

      <Box>
        <Flexbox justifyContent="center" flex={1} gap={10}>
          <Title isFirstTitle>Nome:</Title>
          <Text>{userData?.usuario?.nome}</Text>

          <Title>Email:</Title>
          <Text>{userData?.usuario?.email}</Text>

          <Title>Usuário:</Title>
          <Text>{userData?.usuario?.userName}</Text>
        </Flexbox>
      </Box>
    </div>
  );
};

export default memo(MyAccount);