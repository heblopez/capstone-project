import React from 'react';
import { StyleButton } from './Buttton-UI';

const Button = ({ children, clase }) => {
  return (
    <div>
      <StyleButton className={clase}>{children}</StyleButton>
    </div>
  );
};

export default Button;
