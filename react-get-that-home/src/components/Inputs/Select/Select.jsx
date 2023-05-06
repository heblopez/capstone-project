import React from 'react';
import { SelectCnt } from './Select-UI';

const Select = ({ id, name, label, children }) => {
  return (
    <SelectCnt>
      <label htmlFor={id || name}>{label}</label>
      <select name={id || name} id={id || name}>
        {children}
      </select>
    </SelectCnt>
  );
};

export default Select;
