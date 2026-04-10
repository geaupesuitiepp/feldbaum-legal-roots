import Layout from "@/components/Layout";

const Datenschutz = () => {
  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="container py-16 md:py-20">
          <h1 className="text-4xl md:text-6xl">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-2xl space-y-8 text-sm text-muted-foreground leading-relaxed">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">1. Datenschutz auf einen Blick</p>
            <p className="mb-3">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <p>
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">2. Verantwortlicher</p>
            <p className="mb-3">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer
              datenschutzrechtlicher Bestimmungen ist:
            </p>
            <p>
              RA Benjamin Feldbaum<br />
              Kuehnstraße 41<br />
              22045 Hamburg<br />
              E-Mail: kanzlei@feldbaum.net<br />
              Telefon: +49 40 85539775
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">3. Datenerfassung auf dieser Website</p>
            <p className="font-semibold text-foreground mb-1">Server-Log-Dateien</p>
            <p className="mb-3">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die
              Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher
              Maßnahmen gestattet.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">4. Kontaktaufnahme</p>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
              daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
              Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">5. Google Maps</p>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland
              Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der
              Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese
              Informationen werden in der Regel an einen Server von Google in den USA übertragen
              und dort gespeichert. Die Nutzung von Google Maps erfolgt im Interesse einer
              ansprechenden Darstellung unserer Online-Angebote (Art. 6 Abs. 1 lit. f DSGVO).
              Mehr Informationen:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                https://policies.google.com/privacy
              </a>
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">6. Ihre Rechte</p>
            <p className="mb-3">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p>
              Wenn Sie der Auffassung sind, dass die Verarbeitung Ihrer personenbezogenen Daten
              gegen das Datenschutzrecht verstößt, haben Sie das Recht, sich bei einer
              Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständige Aufsichtsbehörde ist
              der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">7. SSL-/TLS-Verschlüsselung</p>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://"
              auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;