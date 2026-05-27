import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const focusRingClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { label: "Personal", to: "/personal" },
    { label: "Projects", to: "/projects" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  const linkClassName = ({ isActive }) =>
    `px-1 py-2 text-sm uppercase tracking-[0.22em] transition duration-300 ${focusRingClass} ${
      isActive ? "text-white" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed left-0 top-0 z-[80] w-full max-w-full overflow-x-clip border-b border-white/10 bg-black/35 text-gray-300 backdrop-blur-md"
    >
      <div className="box-border flex h-20 w-full max-w-full items-center justify-between gap-4 pl-5 pr-8 md:px-10">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className={`min-w-0 shrink cursor-pointer font-teko text-3xl uppercase tracking-[0.18em] text-white ${focusRingClass}`}
        >
          PF-JUSTIN
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={linkClassName}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center text-gray-200 transition hover:text-white ${focusRingClass} md:hidden`}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-20 z-[75] max-h-[calc(100dvh-5rem)] max-w-full overflow-y-auto overflow-x-hidden border-t border-white/10 bg-gradient-to-b from-black via-gray-950 to-gray-900 px-5 py-10 md:hidden"
        >
          <ul className="flex flex-col gap-7">
            {links.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 font-teko text-5xl uppercase tracking-wider transition ${focusRingClass} ${
                      isActive
                        ? "text-white"
                        : "text-gray-200 hover:text-white"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
