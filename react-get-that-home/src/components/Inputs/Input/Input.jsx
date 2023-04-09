import React from 'react';
import InpuytStyle from './Input-UI';

const Input = ({
  label,
  id,
  name,
  placeholder = '',
  type,
  required = false,
  value = false,
}) => {
  return (
    <InpuytStyle>
      {label ? <label htmlFor={id}> {label}</label> : ''}
      <div>
        <input
          type={type ? type : 'text'}
          placeholder={placeholder}
          id={id}
          name={name ? name : id}
          value={value ? value : ''}
          required={required}
        />
      </div>
    </InpuytStyle>
  );
};

export default Input;
