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
      <section className="container py-10">
        <h1 className="text-3xl md:text-4xl text-primary mb-2">Rechtsgebiete</h1>
        <p className="text-muted-foreground mb-10">Unsere Schwerpunkte im Überblick</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`py-6 pr-8 ${i % 2 === 0 ? "md:pr-10 md:border-r border-border" : "md:pl-10"} border-t border-border`}
            >
              <h2 className="text-xl text-primary mb-3">{s.title}</h2>
              <ul className="space-y-1">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
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
