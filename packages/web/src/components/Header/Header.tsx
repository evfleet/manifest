import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="z-50 bg-blue-700 shadow-md">
      <h1 className="text-xl text-white">Header</h1>

      <ul className="flex gap-2 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
}
