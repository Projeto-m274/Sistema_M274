import React, { ChangeEventHandler, HTMLInputTypeAttribute, memo } from 'react';

import * as C from './styles';

type TInputProps = {
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  htmlRequired: boolean;
  hasError: boolean;
};

const Input: React.FC<TInputProps> = ({ 
  type,
  value,
  onChange, 
  htmlRequired,
  hasError,
}) => {
  return (
    <C.Container 
      type={type} 
      value={value} 
      onChange={onChange}
      required={htmlRequired}
      hasError={hasError}
    />
  );
};

export default memo(Input);