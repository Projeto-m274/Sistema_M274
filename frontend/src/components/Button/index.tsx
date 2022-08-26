import React, { memo } from 'react';
import LoaderAnimation from '../Animations/LoaderAnimation';

import * as C from './styles';

type TButtonProps = {
  text: string;
  isLoading: boolean;
  onClick: () => void;
}

const Button: React.FC<TButtonProps> = ({ text, onClick, isLoading, ...rest }) => {
  return (
    <C.Container onClick={onClick} {...rest}>
      {isLoading ? <LoaderAnimation /> : text}
    </C.Container>
  );
};

export default memo(Button);