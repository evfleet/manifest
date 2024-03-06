import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function UserButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setIsOpen(false);
    buttonRef.current?.focus();
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (!isOpen) {
          return;
        }
        closeMenu();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return (
    <nav
      ref={menuRef}
      role="navigation"
      aria-label="User menu"
      className="relative flex"
    >
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="user-menu"
      >
        <div className="size-8 rounded-full bg-blue-500"></div>
        <span className="sr-only">User Menu</span>
      </button>
      <ul
        id="user-menu"
        className={clsx([
          !isOpen && "hidden",
          "absolute right-0 top-8",
          "min-w-36",
          "border-2 border-black bg-white",
        ])}
      >
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}
