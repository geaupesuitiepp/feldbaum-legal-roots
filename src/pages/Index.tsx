import { Link } from "react-router-dom";
import { Scale, Building2, FileText, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Scale,
    title: "Insolvenzrecht",
    desc: "Kompetente Beratung und Vertretung bei Regelinsolvenz, Privatinsolvenz und Restschuldbefreiung.",
  },
  {
    icon: FileText,
    title: "Steuerberatung",
    desc: "Umfassende steuerliche Betreuung für Privatpersonen und Unternehmen.",
  },
  {
    icon: Building2,
    title: "Firmengründung",
    desc: "Von der Rechtsformwahl bis zur Eintragung – wir begleiten Ihre Gründung.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Rechtsanwalt in Bremen
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Recht. Klarheit.{" "}
              <span className="text-gold">Vertrauen.</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8 max-w-lg">
              Kanzlei Feldbaum – Ihr Partner für Insolvenzrecht, Steuerberatung und Firmengründungen in Bremen.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-6 py-3 font-medium text-sm tracking-wide uppercase hover:bg-gold-light transition-colors"
            >
              Kontakt aufnehmen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container py-20">
        <p className="text-gold text-sm font-medium tracking-widest uppercase mb-2">
          Unsere Schwerpunkte
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">
          Kompetenz in drei Bereichen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-border bg-card p-8 hover:border-gold/40 transition-colors group"
            >
              <s.icon className="text-gold mb-4" size={32} />
              <h3 className="font-serif text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors uppercase tracking-wide"
          >
            Alle Leistungen ansehen <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card border-y border-border">
        <div className="container py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Erstberatung vereinbaren
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Wir sind Montag bis Freitag von 10:00 bis 16:00 Uhr für Sie da.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium text-sm tracking-wide uppercase hover:bg-navy-light transition-colors"
          >
            Jetzt kontaktieren <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
