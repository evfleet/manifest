import { createBrowserRouter } from "react-router-dom";

import { App } from "@/components/App";
import { Landing } from "./Landing";
import { Login } from "./Login";
import { Register } from "./Register";
import { Dashboard } from "./Dashboard";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);
