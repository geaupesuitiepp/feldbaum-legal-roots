import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="border-b-2 border-foreground">
        <div className="container py-24 md:py-40">
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
            Recht.<br />Klarheit.<br />Lösung.
          </h1>
          <p className="text-muted-foreground max-w-md text-lg leading-relaxed mb-10">
            Kanzlei Feldbaum — Insolvenzrecht, Steuerberatung und Firmengründungen in Bremen.
          </p>
          <Link
            to="/kontakt"
            className="inline-block border-2 border-foreground px-8 py-3 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            Kontakt →
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="border-b-2 border-foreground">
        <div className="container py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Schwerpunkte
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground border-2 border-foreground">
            {[
              { title: "Insolvenzrecht", desc: "Regelinsolvenz, Privatinsolvenz, Restschuldbefreiung." },
              { title: "Steuerberatung", desc: "Steuerliche Betreuung für Privatpersonen und Unternehmen." },
              { title: "Firmengründung", desc: "Rechtsformwahl bis Eintragung — wir begleiten Ihre Gründung." },
            ].map((s) => (
              <div key={s.title} className="p-8">
                <h3 className="text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/leistungen"
              className="font-mono text-xs uppercase tracking-widest hover:text-muted-foreground transition-colors"
            >
              Alle Leistungen →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-20 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Erstberatung</h2>
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
            Mo – Fr, 10:00 – 16:00 Uhr. Unverbindlich.
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-foreground text-background px-8 py-3 font-mono text-xs uppercase tracking-widest hover:bg-muted-foreground transition-colors"
          >
            Jetzt kontaktieren →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
