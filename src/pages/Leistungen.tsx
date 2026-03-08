import Layout from "@/components/Layout";
import { Scale, FileText, Building2, Briefcase, Users, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Insolvenzrecht",
    items: [
      "Regelinsolvenzverfahren",
      "Verbraucherinsolvenz",
      "Restschuldbefreiung",
      "Insolvenzplanverfahren",
      "Beratung zur Insolvenzabwendung",
    ],
  },
  {
    icon: FileText,
    title: "Steuerberatung",
    items: [
      "Einkommensteuer & Umsatzsteuer",
      "Betriebsprüfungen",
      "Steuerliche Optimierung",
      "Jahresabschlüsse",
      "Finanzamt-Korrespondenz",
    ],
  },
  {
    icon: Building2,
    title: "Firmengründung",
    items: [
      "Rechtsformberatung (GmbH, UG, GbR)",
      "Gesellschaftsverträge",
      "Handelsregisteranmeldung",
      "Gewerbeanmeldung",
      "Gründungsberatung",
    ],
  },
  {
    icon: Briefcase,
    title: "Unternehmensberatung",
    items: [
      "Unternehmensnachfolge",
      "Restrukturierung",
      "Vertragsgestaltung",
      "Compliance-Beratung",
    ],
  },
  {
    icon: Users,
    title: "Schuldnerberatung",
    items: [
      "Außergerichtliche Schuldenregulierung",
      "Verhandlung mit Gläubigern",
      "Budgetplanung",
      "Pfändungsschutz",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Sanierungsberatung",
    items: [
      "Sanierungskonzepte",
      "Eigenverwaltung",
      "Schutzschirmverfahren",
      "Krisenmanagement",
    ],
  },
];

const Leistungen = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-2">
            Was wir bieten
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold">
            Unsere Leistungen
          </h1>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-border bg-card p-8 hover:border-gold/40 transition-colors"
            >
              <s.icon className="text-gold mb-4" size={28} />
              <h2 className="font-serif text-xl font-semibold mb-4">{s.title}</h2>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-gold mt-1 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Leistungen;
