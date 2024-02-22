import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";
import { InputHTMLAttributes } from "react";

export type FormFieldProps<T extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    name: Path<T>;
    label?: string;
    register: UseFormRegister<T>;
    error?: FieldError;
  };

export function FormField<T extends FieldValues>({
  name,
  type,
  label,
  register,
  error,
}: FormFieldProps<T>) {
  return (
    <div>
      <label htmlFor="">{label || name}</label>
      <input type={type} {...register(name)} />
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
}
