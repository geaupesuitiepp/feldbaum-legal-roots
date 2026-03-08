import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-3">Adresse</p>
            <p className="text-muted-foreground leading-relaxed">
              Ostertorswallstraße 59<br />28195 Bremen
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-3">Kontakt</p>
            <p className="text-muted-foreground leading-relaxed">
              <a href="mailto:kanzlei@feldbaum.net" className="hover:text-foreground transition-colors">
                kanzlei@feldbaum.net
              </a>
              <br />
              <a href="tel:+49000000" className="hover:text-foreground transition-colors">
                +49 000 000
              </a>
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-3">Rechtliches</p>
            <div className="flex flex-col gap-1 text-muted-foreground">
              <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kanzlei Feldbaum
        </div>
      </div>
    </footer>
  );
};

export default Footer;
