import { useField } from 'formik';
import React from 'react';
import { InputContainer } from './StylesInput';

const Select = ({ classLabel, label, ...props }) => {
  const [field, meta] = useField(props);
  const LabelClass = classLabel || '';
  return (
    <InputContainer>
      <label htmlFor={props.id || props.name} className={LabelClass}>
        {label}
      </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className='error'>{meta.error}</p>
      ) : null}
    </InputContainer>
  );
};

export default Select;
