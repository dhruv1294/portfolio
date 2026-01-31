"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/chat", label: "Chat with AI" },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-[var(--toggle-track)] border border-[var(--border-color)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Track icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        {/* Sun icon (left side) */}
        <svg
          className={`w-4 h-4 transition-all duration-300 ${
            isDark ? "opacity-50 text-gray-400" : "opacity-100 text-amber-500"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
        {/* Moon icon (right side) */}
        <svg
          className={`w-4 h-4 transition-all duration-300 ${
            isDark ? "opacity-100 text-blue-300" : "opacity-50 text-gray-500"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
      {/* Toggle knob */}
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-7" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-[var(--text-primary)]">
            Dhruv
          </Link>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-[var(--accent)] ${
                  pathname === item.href
                    ? "text-[var(--text-primary)] font-medium"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
