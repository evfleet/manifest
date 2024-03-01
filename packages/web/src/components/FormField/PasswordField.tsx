import { useState } from "react";
import { FieldValues } from "react-hook-form";

import { FormFieldProps } from "./FormField";
import { ErrorMessage } from "./ErrorMessage";
import { Label } from "./Label";
import { Input } from "./Input";

export function PasswordField<T extends FieldValues>({
  name,
  label,
  register,
  error,
}: FormFieldProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword((showPassword) => !showPassword);
  }

  return (
    <div className="my-2 flex flex-col">
      <Label name={name} label={label || name} />

      <div className="relative mt-2">
        <Input
          name={name}
          type={showPassword ? "text" : "password"}
          register={register}
          error={error}
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-2 top-0 h-full"
        >
          {showPassword ? "hide" : "show"}
        </button>
      </div>
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}
