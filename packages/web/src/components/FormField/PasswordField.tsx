import { useState } from "react";
import { FieldValues } from "react-hook-form";

import { FormFieldProps } from "./FormField";

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
    <div className="my-2">
      <label htmlFor="" className="mr-2">
        {label || name}
      </label>
      <input type={showPassword ? "text" : "password"} {...register(name)} />
      {error && <span className="error-message">{error.message}</span>}
      <button type="button" onClick={togglePassword}>
        {showPassword ? "hide" : "show"}
      </button>
    </div>
  );
}
