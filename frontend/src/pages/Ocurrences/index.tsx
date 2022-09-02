import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Flexbox from '../../components/CssLayouts/Flexbox';
import Header from '../../components/Header';

import { Title } from './styles';

const Ocurrences: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory();

  const handleGoToOcurrencesList = () => {
    history.push("/ocurrences-list");
  };

  const handleGoToRegisterOcurrence = () => {
    history.push("/register-ocurrence");
  };

  return (
    <>
      <Header isAuthenticated />

      <Flexbox flexDirection="column">
        <Title>O que deseja ver de ocorrencias?</Title>

        <Flexbox gap={80}>
          <Button
            text="Lista de ocorrencias"
            isLoading={isLoading}
            onClick={handleGoToOcurrencesList}
          />

          <Button
            text="Registro de ocorrencia"
            isLoading={isLoading}
            onClick={handleGoToRegisterOcurrence}
          />
        </Flexbox>
      </Flexbox>
    </>
  );
}

export default Ocurrences;