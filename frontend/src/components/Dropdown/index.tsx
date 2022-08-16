  import React from 'react';
import { Container, Select } from './styles';

export interface IOptions {
  defaultValue: string;
  value: string;
};

type TSelectProps = {
  isLeftSpacing?: number;
  isTopSpacing?: number;
  options: IOptions[];
}

const Dropdown: React.FC<TSelectProps> = ({ isLeftSpacing, options, isTopSpacing }) => {
  return (
    <Container>
      <Select isTopSpacing={isTopSpacing} isLeftSpacing={isLeftSpacing}>
        {options.map((option: IOptions) => (
          <>
            <option key={option.value}>{option.defaultValue}</option>
            <option>{option.value}</option>
          </>
        ))}

      </Select>
    </Container>
  );
}

export default Dropdown;