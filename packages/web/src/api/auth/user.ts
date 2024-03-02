import { useQuery } from "@tanstack/react-query";

async function authenticate() {
  const response = await fetch("/api/auth");

  if (!response.ok) {
    throw new Error("An error occurred");
  }

  console.log("response", response);

  return response.json();
}

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: authenticate,
  });
}
