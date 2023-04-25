import React, { useMemo } from 'react';
import { StyleButton } from './Buttton-UI';

const Button = ({ children, typeBtn, size, type, disabled }) => {
  const className = useMemo(
    () => `btn--${type || 'primary'}${size ? '-' + size : '-default'}`,
    [type, size]
  );

  return (
    <>
      <StyleButton className={className} type={typeBtn} disabled={disabled}>
        {children}
      </StyleButton>
    </>
  );
};

export default Button;
