import { Link } from "react-router-dom";

import { useUser } from "@/api/auth/user";

export function TopNav() {
  const { data: user } = useUser();

  console.log("user", user);

  return (
    <header className="z-50 flex h-14 items-center bg-white px-4 shadow-md">
      <div className="flex-1 text-xl font-semibold">
        <Link to="/">Manifest</Link>
      </div>

      <nav>
        {user ? (
          <ul className="flex gap-2">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-2">
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
