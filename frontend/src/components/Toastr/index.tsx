import React, { memo } from 'react';
import { ToastContainer, ToastContainerProps } from 'react-toastify';

type TToastifyProps = & ToastContainerProps;

const Toastr: React.FC<TToastifyProps> = ({
  position,
  autoClose,
  hideProgressBar,
  ...rest
}) => {
  return (
    <ToastContainer 
      position={position}
      autoClose={autoClose}
      hideProgressBar={hideProgressBar}
      {...rest}
    />
  );
};

export default memo(Toastr);