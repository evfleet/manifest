import { Link } from "react-router-dom";

export function TopNav() {
  return (
    <header className="z-50 flex h-14 items-center  px-4 shadow-md">
      <div className="flex-1 text-xl font-semibold">
        <Link to="/">Manifest</Link>
      </div>

      <nav>
        <ul className="flex gap-2">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
