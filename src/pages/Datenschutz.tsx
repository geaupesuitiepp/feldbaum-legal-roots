import Layout from "@/components/Layout";

const Datenschutz = () => {
  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="container py-16 md:py-20">
          <h1 className="text-4xl md:text-6xl">Datenschutz</h1>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-2xl space-y-8 text-sm text-muted-foreground leading-relaxed">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">1. Datenschutz auf einen Blick</p>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">2. Verantwortlicher</p>
            <p>
              RA Benjamin Feldbaum<br />
              Kuehnstraße 41<br />
              22045 Hamburg<br />
              E-Mail: kanzlei@feldbaum.net<br />
              Telefon: +49 000 000
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">3. Datenerfassung auf dieser Website</p>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">4. Google Maps</p>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited.
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.
              Mehr Informationen:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                https://policies.google.com/privacy
              </a>
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">5. Ihre Rechte</p>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
