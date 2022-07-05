import React, { Fragment } from 'react';
import Checkbox from '../../components/Checkbox';
import Dropdown, { IOptions } from '../../components/Dropdown';
import { Row } from '../../components/Dropdown/styles';
import Header from '../../components/Header';

const FollowUp: React.FC = () => {
  const unitOptions: IOptions = {
    defaultValue: 'UNIDADES',
    value: 'UNIDADE 1'
  };

  const clientOptions: IOptions = {
    defaultValue: 'CLIENTES',
    value: 'CLIENTE 1'
  };

  return (
    <Fragment>
      <Header isAuthenticated />
      <Row>
        <Dropdown 
          isLeftSpacing={15} 
          options={[unitOptions]}
        />

        <Dropdown 
          isLeftSpacing={2} 
          options={[clientOptions]}
        />

        <Checkbox 
          inputStyle={{ 
            marginLeft: '8rem', 
            marginTop: '8rem', 
            cursor: 'pointer',
            height: '1rem' 
          }} 

          labelStyle={{ 
            marginLeft: '1rem', 
            marginTop: '8rem', 
            cursor: 'pointer' 
          }}
           
          label='Concluído'
        />
      </Row>
    </Fragment>
  );
}

export default FollowUp;