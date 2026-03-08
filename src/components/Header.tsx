import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Startseite" },
  { to: "/leistungen", label: "Rechtsgebiete" },
  { to: "/ueber-uns", label: "Kanzlei" },
  { to: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background">
      {/* Top bar with logo */}
      <div className="container py-8 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-primary" />
            <div className="w-3 h-3 bg-primary" />
          </div>
          <div>
            <Link to="/" className="block">
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-tight">
                Feldbaum
              </span>
              <span className="block text-sm text-muted-foreground tracking-wide">
                Rechtsanwalt
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="border-y border-border bg-background">
        <div className="container">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-5 py-3 text-sm tracking-wide transition-colors hover:bg-primary hover:text-primary-foreground ${
                  location.pathname === item.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-full py-3 text-sm text-left"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕ Menü schließen" : "☰ Menü"}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-b border-border bg-background">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm border-b border-border last:border-b-0 hover:bg-muted ${
                location.pathname === item.to ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
