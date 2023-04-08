import React from 'react';
import { StyleButton } from './Buttton-UI';

const Button = ({ children, typeBtn, size, type, disabled }) => {
  return (
    <div>
      <StyleButton
        className={`btn--${type || 'primary'}${
          size ? '-' + size : '-default'
        } `}
        typeBtn={type}
        disabled={disabled}
      >
        {children}
      </StyleButton>
    </div>
  );
};

export default Button;
