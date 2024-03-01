import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Layout, Content } from "@/components/Layout";
import { useLogin } from "@/api/auth/login";
import { FormField, PasswordField } from "@/components/FormField";

type Login = {
  email: string;
  password: string;
};

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
      }),
    ),
  });

  const loginMutation = useLogin<Login>();

  function handleLogin(data: Login) {
    console.log("login", data);
    loginMutation.mutate(data);
  }

  return (
    <Layout>
      <Content className="flex items-start justify-center">
        <section className="mt-20 w-[400px] rounded-lg bg-white p-8 shadow-md ">
          <h1 className="text-xl font-semibold">Login</h1>

          <form onSubmit={handleSubmit(handleLogin)}>
            <FormField name="email" register={register} error={errors.email} />

            <PasswordField
              name="password"
              register={register}
              error={errors.password}
            />

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="bg-blue-700 px-4 py-2 text-white"
              >
                Login
              </button>
            </div>
          </form>
        </section>
      </Content>
    </Layout>
  );
}
