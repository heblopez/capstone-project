import { useField } from 'formik';
import React from 'react';
import { ContainerCR } from './StylesInput';

const InputCR = ({ LabelClass = '', children, ...props }) => {
  const [field, meta] = useField({ ...props });
  return (
    <ContainerCR>
      <label className={`form-control ${LabelClass}`}>
        <input {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </ContainerCR>
  );
};

export default InputCR;
