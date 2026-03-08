import Layout from "@/components/Layout";

const Datenschutz = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20">
          <h1 className="text-3xl md:text-5xl font-serif font-bold">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-2xl space-y-8 text-sm text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              2. Verantwortlicher
            </h2>
            <p>
              RA Benjamin Feldbaum<br />
              Ostertorswallstraße 59<br />
              28195 Bremen<br />
              E-Mail: kanzlei@feldbaum.net<br />
              Telefon: +49 000 000
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-sans font-semibold text-foreground mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              4. Google Maps
            </h2>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
              („Google"), Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen
              von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen
              werden in der Regel an einen Server von Google in den USA übertragen und dort
              gespeichert. Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
              Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
              jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema
              Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
