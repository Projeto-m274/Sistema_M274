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
  fullWidth?: boolean;
  customBorderColor?: string;
  options: IOptions[];
}

const Dropdown: React.FC<TSelectProps> = ({
  isLeftSpacing,
  isTopSpacing,
  fullWidth,
  customBorderColor,
  options,
}) => {
  return (
    <Container>
      <Select 
        isTopSpacing={isTopSpacing} 
        isLeftSpacing={isLeftSpacing}
        fullWidth={fullWidth}
        customBorderColor={customBorderColor}
      >
        {options.map(option => (
          <>
            <option key={option.id}>{option.defaultValue}</option>
            <option>{option.value}</option>
          </>
        ))}
      </Select>
    </Container>
  );
}

export default Dropdown;