import React from 'react';
import TargerCont from './Target-UI';

const Target = ({ children }) => {
  return (
    <TargerCont>
      <div className='container'>{children}</div>
    </TargerCont>
  );
};

export default Target;
