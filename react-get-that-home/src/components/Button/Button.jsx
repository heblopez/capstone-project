import React from 'react';
import { StyleButton } from './Buttton-UI';

const Button = ({ children, clase, type }) => {
  return (
    <div>
      <StyleButton className={clase} type={type}>
        {children}
      </StyleButton>
    </div>
  );
};

export default Button;
