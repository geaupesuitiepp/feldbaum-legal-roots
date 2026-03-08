import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Start" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="font-mono text-lg font-bold uppercase tracking-widest">
          Feldbaum
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-muted-foreground ${
                location.pathname === item.to
                  ? "underline underline-offset-4"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden font-mono text-xs uppercase tracking-widest"
          onClick={() => setOpen(!open)}
        >
          {open ? "[Schließen]" : "[Menü]"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t-2 border-foreground bg-background pb-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-mono text-xs uppercase tracking-widest hover:text-muted-foreground ${
                location.pathname === item.to ? "underline underline-offset-4" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
