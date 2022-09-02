import React from 'react';
import Flexbox from '../../../components/CssLayouts/Flexbox';
import Header from '../../../components/Header';
import { Title } from './styles';

const OcurrencesList: React.FC = () => {
  return (
    <>
      <Header isAuthenticated />

      <Flexbox flexDirection="column">
        <Title>Lista de ocorrencias</Title>
      </Flexbox>
    </>
  );
}

export default OcurrencesList;