import React, { CSSProperties } from "react";

// import { Container } from './styles';

interface ICheckboxProps {
  inputStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  label?: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  inputStyle,
  labelStyle,
  label,
}) => {
  {
    return (
      <>
        <input id="checkboxInput" type="checkbox" style={inputStyle} />
        {label && (
          <label htmlFor="checkboxInput" style={labelStyle}>
            {label}
          </label>
        )}
      </>
    );
  } 
};

export default Checkbox;
