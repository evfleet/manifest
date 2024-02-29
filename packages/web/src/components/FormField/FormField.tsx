import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";
import { InputHTMLAttributes } from "react";

import { ErrorMessage } from "./ErrorMessage";
import { Label } from "./Label";
import { Input } from "./Input";

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
    <div className="my-2 flex flex-col">
      <Label name={name} label={label || name} />
      <Input name={name} type={type} register={register} error={error} />
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}
