import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-serif text-base font-semibold text-primary mb-2">Adresse</p>
            <p className="text-muted-foreground leading-relaxed">
              RA Benjamin Feldbaum<br />
              Ostertorswallstraße 59<br />28195 Bremen
            </p>
          </div>
          <div>
            <p className="font-serif text-base font-semibold text-primary mb-2">Kontakt</p>
            <p className="text-muted-foreground leading-relaxed">
              <a href="mailto:kanzlei@feldbaum.net" className="hover:text-primary transition-colors">
                kanzlei@feldbaum.net
              </a>
              <br />
              <a href="tel:+49000000" className="hover:text-primary transition-colors">
                +49 000 000
              </a>
            </p>
          </div>
          <div>
            <p className="font-serif text-base font-semibold text-primary mb-2">Rechtliches</p>
            <div className="flex flex-col gap-1 text-muted-foreground">
              <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img src={logo} alt="Kanzlei Feldbaum" className="h-8" />
          <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} Kanzlei Feldbaum — Rechtsanwalt in Bremen</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
