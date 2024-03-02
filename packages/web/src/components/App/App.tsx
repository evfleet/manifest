import { Outlet } from "react-router-dom";

import { useUser } from "@/api/auth/user";

export function App() {
  const { status } = useUser();

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  return <Outlet />;
}
