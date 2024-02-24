import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

async function register<T>(params: T) {
  const response = await fetch("http://localhost:8080/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-Host": "http://localhost:8080",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error("An error occurred");
  }

  return response.json();
}

export function useRegister<T>() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: register<T>,
    onSuccess: (data) => {
      console.log("success", data);

      queryClient.setQueryData(["user"], data);

      navigate("/dashboard");
    },
    onError: (err) => {
      console.log("error", err);
    },
  });
}
