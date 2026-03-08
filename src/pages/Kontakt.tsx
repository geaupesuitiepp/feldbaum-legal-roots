import Layout from "@/components/Layout";

const Kontakt = () => {
  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="container py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Sprechen Sie uns an
          </p>
          <h1 className="text-4xl md:text-6xl">Kontakt</h1>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-2">Adresse</p>
              <p className="text-muted-foreground">
                Ostertorswallstraße 59<br />28195 Bremen
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-2">E-Mail</p>
              <a href="mailto:kanzlei@feldbaum.net" className="text-muted-foreground hover:text-foreground transition-colors">
                kanzlei@feldbaum.net
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-2">Telefon</p>
              <a href="tel:+49000000" className="text-muted-foreground hover:text-foreground transition-colors">
                +49 000 000
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-2">Öffnungszeiten</p>
              <p className="text-muted-foreground">
                Montag – Freitag: 10:00 – 16:00 Uhr<br />
                Samstag & Sonntag: Geschlossen
              </p>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-4">Standort</p>
            <div className="border-2 border-foreground overflow-hidden">
              <iframe
                title="Kanzlei Feldbaum Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2397.8!2d8.8234!3d53.0734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1281f5f6e7b1d%3A0x0!2sOstertorswallstra%C3%9Fe+59%2C+28195+Bremen!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
