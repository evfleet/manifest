import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Layout, Content } from "@/components/Layout";
import { useRegister } from "@/api/auth/register";
import { FormField, PasswordField } from "@/components/FormField";

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
      }),
    ),
  });

  const registerMutation = useRegister<Register>();

  function handleRegister(data: Register) {
    console.log("register", data);

    registerMutation.mutate(data);
  }

  return (
    <Layout>
      <Content className="flex items-start justify-center">
        <section className="mt-20 rounded-lg bg-white p-8 shadow-md">
          <h1 className="text-xl font-semibold">Register</h1>

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

            <button type="submit" className="bg-blue-700 px-4 py-2 text-white">
              Register
            </button>
          </form>
        </section>
      </Content>
    </Layout>
  );
}
