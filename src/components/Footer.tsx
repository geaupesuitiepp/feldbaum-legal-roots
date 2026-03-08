import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/70">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-3">
              Kanzlei Feldbaum
            </h3>
            <p className="text-sm leading-relaxed">
              Ostertorswallstraße 59<br />
              28195 Bremen
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-3">
              Kontakt
            </h3>
            <p className="text-sm leading-relaxed">
              <a href="mailto:kanzlei@feldbaum.net" className="hover:text-gold transition-colors">
                kanzlei@feldbaum.net
              </a>
              <br />
              <a href="tel:+49000000" className="hover:text-gold transition-colors">
                +49 000 000
              </a>
            </p>
            <p className="text-sm mt-2">Mo – Fr: 10:00 – 16:00 Uhr</p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-3">
              Rechtliches
            </h3>
            <div className="flex flex-col gap-1 text-sm">
              <Link to="/impressum" className="hover:text-gold transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-gold transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Kanzlei Feldbaum. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
