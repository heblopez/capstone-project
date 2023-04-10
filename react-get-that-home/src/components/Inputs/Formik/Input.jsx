import { useField } from 'formik';
import { InputContainer, IconContainer } from './StylesInput';

const Field = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <InputContainer>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={`${children && 'holder'}`} {...field} {...props} />
      {children && <IconContainer>{children}</IconContainer>}
      {meta.touched && meta.error ? (
        <p className='error'>{meta.error}</p>
      ) : null}
    </InputContainer>
  );
};

export default Field;
