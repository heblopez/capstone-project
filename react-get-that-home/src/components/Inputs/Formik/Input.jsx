import { useField } from 'formik';
import { InputContainer, IconContainer } from './StylesInput';

const Input = ({
  children,
  classLabel = '',
  classInput = '',
  label,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <InputContainer>
      <label className={classLabel} htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className={`${classInput} ${children && 'holder'}`}
        {...field}
        {...props}
      />
      <IconContainer>{children}</IconContainer>
      {meta.touched && meta.error ? (
        <p className='error'>{meta.error}</p>
      ) : null}
    </InputContainer>
  );
};

export default Input;
