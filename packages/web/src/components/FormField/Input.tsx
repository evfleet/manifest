import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";
import { InputHTMLAttributes } from "react";

export type InputProps<T extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    name: Path<T>;
    label?: string;
    register: UseFormRegister<T>;
    error?: FieldError;
  };

export function Input<T extends FieldValues>({
  name,
  register,
  type,
}: InputProps<T>) {
  return <input type={type} {...register(name)} className="w-full border-2" />;
}
