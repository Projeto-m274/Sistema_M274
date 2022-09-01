import React from 'react';

import { Container, Select } from './styles';

export interface IOptions {
  id: number;
  defaultValue: string;
  value: string;
};

type TSelectProps = {
  isLeftSpacing?: number;
  isTopSpacing?: number;
  options: IOptions[];
}

const Dropdown: React.FC<TSelectProps> = ({
  isLeftSpacing,
  options,
  isTopSpacing,
}) => {
  return (
    <Container>
      <Select isTopSpacing={isTopSpacing} isLeftSpacing={isLeftSpacing}>
        {options.map(option => (
          <>
            <option key={option.id}></option>
            <option>{option.value}</option>
          </>
        ))}
      </Select>
    </Container>
  );
}

export default Dropdown;