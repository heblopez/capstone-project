import { useField } from "formik";
import { InputContainer, IconContainer } from "./StylesInput";

const Input = ({
  children,
  classLabel,
  classInput,
  classError,
  label,
  ...props
}) => {
  const [field, meta] = useField(props);

  const HolderClass = children ? "holder" : "";
  const LabelClass = classLabel || "";
  const InputClass = classInput || "";
  const ErrorClass = classError || "";

  return (
    <InputContainer>
      <label className={LabelClass} htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className={`${InputClass} ${HolderClass}`} {...field} {...props} />
      <IconContainer>{children}</IconContainer>
      {meta.touched && meta.error ? (
        <p className={ErrorClass}>{meta.error}</p>
      ) : null}
    </InputContainer>
  );
};

export default Input;
