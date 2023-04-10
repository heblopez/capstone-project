import React from 'react';
import InpuytStyle from './Input-UI';

const Input = ({
  label,
  id,
  name,
  placeholder = '',
  type,
  required = false,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <InpuytStyle>
      {label && type !== 'checkbox' && type !== 'radio' ? (
        <label className='overline' htmlFor={id}>
          {label}
        </label>
      ) : (
        ''
      )}
      <div className='input'>
        <input
          className='input-general'
          id={id}
          name={name || id}
          type={type || 'text'}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
        />
        {type === 'checkbox' || type === 'radio' ? (
          <label className='checkbox-radio' htmlFor={id}>
            {label}
          </label>
        ) : (
          ''
        )}
      </div>
    </InpuytStyle>
  );
};

export default Input;
