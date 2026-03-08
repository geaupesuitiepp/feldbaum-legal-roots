import Layout from "@/components/Layout";

const Impressum = () => {
  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="container py-16 md:py-20">
          <h1 className="text-4xl md:text-6xl">Impressum</h1>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-2xl space-y-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-2">Angaben gemäß § 5 TMG</p>
            <p className="text-muted-foreground leading-relaxed">
              RA Benjamin Feldbaum<br />
              Ostertorswallstraße 59<br />
              28195 Bremen
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-2">Kontakt</p>
            <p className="text-muted-foreground leading-relaxed">
              E-Mail: <a href="mailto:kanzlei@feldbaum.net" className="hover:text-foreground transition-colors">kanzlei@feldbaum.net</a><br />
              Telefon: <a href="tel:+49000000" className="hover:text-foreground transition-colors">+49 000 000</a>
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-2">Berufsbezeichnung</p>
            <p className="text-muted-foreground leading-relaxed">
              Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-2">Zuständige Kammer</p>
            <p className="text-muted-foreground leading-relaxed">
              Hanseatische Rechtsanwaltskammer Bremen<br />
              Ostertorswallstraße 25<br />
              28195 Bremen
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-2">Berufsrechtliche Regelungen</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bundesrechtsanwaltsordnung (BRAO)<br />
              Berufsordnung für Rechtsanwälte (BORA)<br />
              Rechtsanwaltsvergütungsgesetz (RVG)<br />
              Fachanwaltsordnung (FAO)
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-2">Streitschlichtung</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                https://ec.europa.eu/consumers/odr
              </a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
