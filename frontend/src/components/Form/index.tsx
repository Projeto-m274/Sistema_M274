import React, { memo, ReactNode } from "react";

type FormProps = {
  onSubmit?: () => void;
  children?: ReactNode;
}

const Form: React.FC<FormProps> = ({ 
  onSubmit,
  children,
  ...rest 
}) => {
  return (
    <form 
      onSubmit={onSubmit} 
      {...rest}
    >
      {children}
    </form>
  );
};

export default memo(Form);