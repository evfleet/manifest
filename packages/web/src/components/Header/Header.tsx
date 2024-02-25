import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-blue-700">
      <h1 className="text-white text-xl">Header</h1>

      <ul className="text-white flex gap-2">
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
