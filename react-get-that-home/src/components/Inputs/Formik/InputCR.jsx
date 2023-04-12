import { useField } from 'formik';
import React from 'react';
import { ContainerCR } from './StylesInput';

const InputCR = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props });
  return (
    <ContainerCR>
      <label className={`form-control`}>
        <input {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <p className='error'>{meta.error}</p>
      ) : null}
    </ContainerCR>
  );
};

export default InputCR;
