import Layout from "@/components/Layout";

const services = [
  {
    title: "Insolvenzrecht",
    items: ["Regelinsolvenzverfahren", "Verbraucherinsolvenz", "Restschuldbefreiung", "Insolvenzplanverfahren", "Beratung zur Insolvenzabwendung"],
  },
  {
    title: "Steuerberatung",
    items: ["Einkommensteuer & Umsatzsteuer", "Betriebsprüfungen", "Steuerliche Optimierung", "Jahresabschlüsse", "Finanzamt-Korrespondenz"],
  },
  {
    title: "Firmengründung",
    items: ["Rechtsformberatung (GmbH, UG, GbR)", "Gesellschaftsverträge", "Handelsregisteranmeldung", "Gewerbeanmeldung", "Gründungsberatung"],
  },
  {
    title: "Unternehmensberatung",
    items: ["Unternehmensnachfolge", "Restrukturierung", "Vertragsgestaltung", "Compliance-Beratung"],
  },
  {
    title: "Schuldnerberatung",
    items: ["Außergerichtliche Schuldenregulierung", "Verhandlung mit Gläubigern", "Budgetplanung", "Pfändungsschutz"],
  },
  {
    title: "Sanierungsberatung",
    items: ["Sanierungskonzepte", "Eigenverwaltung", "Schutzschirmverfahren", "Krisenmanagement"],
  },
];

const Leistungen = () => {
  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="container py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Was wir bieten
          </p>
          <h1 className="text-4xl md:text-6xl">Leistungen</h1>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-foreground">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`p-8 ${i < services.length - 1 ? "border-b-2 md:border-b-2 border-foreground" : ""} ${i % 2 === 0 ? "md:border-r-2 md:border-foreground" : ""}`}
            >
              <h2 className="text-xl mb-4">{s.title}</h2>
              <ul className="space-y-1">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    — {item}
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
