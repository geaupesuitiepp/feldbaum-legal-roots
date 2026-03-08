import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Startseite" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-primary">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-xl font-bold tracking-wide text-primary-foreground">
            Kanzlei Feldbaum
          </span>
          <span className="text-xs tracking-widest uppercase text-gold-light">
            Rechtsanwalt
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
                location.pathname === item.to
                  ? "text-gold"
                  : "text-primary-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border/20 bg-primary pb-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
                location.pathname === item.to
                  ? "text-gold"
                  : "text-primary-foreground/80"
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
