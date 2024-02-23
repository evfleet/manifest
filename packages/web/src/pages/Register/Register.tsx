import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useRegister } from "../../api/auth/register";
import { FormField } from "../../components/FormField";
import { PasswordField } from "../../components/PasswordField";

type Register = {
  email: string;
  username: string;
  password: string;
};

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
      })
    ),
  });

  const registerMutation = useRegister<Register>();

  function handleRegister(data: Register) {
    console.log("register", data);

    registerMutation.mutate(data);
  }

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit(handleRegister)}>
        <FormField name="email" register={register} error={errors.email} />

        <FormField
          name="username"
          register={register}
          error={errors.username}
        />

        <PasswordField
          name="password"
          register={register}
          error={errors.password}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
