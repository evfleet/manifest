import { useQuery } from "@tanstack/react-query";

type APIResponse = {
  data: Record<string, unknown>;
};

async function authenticate() {
  const response = await fetch("/api/auth");

  if (!response.ok) {
    if (response.status === 401) {
      return false;
    }

    throw new Error("An error authenticating user");
  }

  const { data }: APIResponse = await response.json();

  return data;
}

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: authenticate,
  });
}
