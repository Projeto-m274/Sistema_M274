import React, { memo } from 'react';

import * as C from './styles';

type TButtonProps = {
  text: string;
  onClick: () => void;
}

const Button: React.FC<TButtonProps> = ({ text, onClick, ...rest }) => {
  return (
    <C.Container onClick={onClick} {...rest}>
      {text}
    </C.Container>
  );
};

export default memo(Button);