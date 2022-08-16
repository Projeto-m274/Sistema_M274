import React, { memo, ReactNode } from "react";

type FormProps = {
  children?: ReactNode;
}

const Form: React.FC<FormProps> = ({ 
  children,
  ...rest 
}) => {
  return (
    <form {...rest}>
      {children}
    </form>
  );
};

export default memo(Form);