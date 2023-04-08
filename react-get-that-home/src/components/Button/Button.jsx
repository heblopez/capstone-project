import React from 'react';
import { StyleButton } from './Buttton-UI';

const Button = ({ children, typeBtn, size, type, disabled, onshow }) => {
  return (
    <>
      <StyleButton
        className={`btn--${type || 'primary'}${
          size ? '-' + size : '-default'
        } `}
        type={typeBtn}
        disabled={disabled}
        onClick={onshow}
      >
        {children}
      </StyleButton>
    </>
  );
};

export default Button;
