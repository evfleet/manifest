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

  console.log("needs semantic tags and aria attributes");

  return (
    <div className="relative" ref={menuRef}>
      <button ref={buttonRef} onClick={toggleMenu}>
        Menu
      </button>
      <div
        className={clsx([
          isOpen ? "block" : "hidden",
          "bg-red-500",
          "absolute",
          "top-10",
          "right-0",
          "w-48",
          "h-48",
        ])}
      >
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}
