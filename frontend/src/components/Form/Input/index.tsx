import React, { ChangeEventHandler, Fragment, HTMLInputTypeAttribute, memo } from 'react';
import Flexbox from '../../CssLayouts/Flexbox';

import * as C from './styles';

type TInputProps = {
  label: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required: boolean;
  hasError: boolean;
  fullWidth?: boolean;
};

const Input: React.FC<TInputProps> = ({
  label,
  type,
  value,
  onChange,
  required,
  hasError,
  fullWidth
}) => {
  return (
    <Flexbox 
      flex={1} 
      flexDirection="column"
      fullWidth={fullWidth}
    >
      <C.InputLabel>
        {label}
      </C.InputLabel>

      <C.Container
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        hasError={hasError}
      />
    </Flexbox>
  );
};

export default memo(Input);