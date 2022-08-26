import React, { Fragment, memo, useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Flexbox from "../../components/CssLayouts/Flexbox";
import Header from "../../components/Header";

import { Text } from "./styles";

const NotFound: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory();

  const handleBackSignInPage = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      history.push("/");
    }, 2000);
  };

  return (
    <Fragment>
      <Header isAuthenticated={false} />
      <Flexbox 
        flex={1} 
        flexDirection="column"
        alignItems="center" 
        justifyContent="center"
      >
        <Text>Página não encontrada</Text>

        <Button 
          text="voltar para o login" 
          isLoading={isLoading}
          onClick={handleBackSignInPage}
        />
      </Flexbox>
    </Fragment>
  );
};

export default memo(NotFound);