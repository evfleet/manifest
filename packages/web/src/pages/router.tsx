import { createBrowserRouter } from "react-router-dom";

import { Landing } from "./Landing";
import { Login } from "./Login";
import { Register } from "./Register";
import { Dashboard } from "./Dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/dashboard", element: <Dashboard /> },
]);
