import Layout from "@/components/Layout";

const Impressum = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20">
          <h1 className="text-3xl md:text-5xl font-serif font-bold">Impressum</h1>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-2xl space-y-8">
          <div>
            <h2 className="font-serif text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="text-muted-foreground leading-relaxed">
              RA Benjamin Feldbaum<br />
              Ostertorswallstraße 59<br />
              28195 Bremen
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold mb-3">Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed">
              E-Mail:{" "}
              <a href="mailto:kanzlei@feldbaum.net" className="text-gold hover:text-gold-light transition-colors">
                kanzlei@feldbaum.net
              </a>
              <br />
              Telefon:{" "}
              <a href="tel:+49000000" className="text-gold hover:text-gold-light transition-colors">
                +49 000 000
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold mb-3">Berufsbezeichnung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold mb-3">Zuständige Kammer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hanseatische Rechtsanwaltskammer Bremen<br />
              Ostertorswallstraße 25<br />
              28195 Bremen
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold mb-3">Berufsrechtliche Regelungen</h2>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>Bundesrechtsanwaltsordnung (BRAO)</li>
              <li>Berufsordnung für Rechtsanwälte (BORA)</li>
              <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
              <li>Fachanwaltsordnung (FAO)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold mb-3">Streitschlichtung</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
