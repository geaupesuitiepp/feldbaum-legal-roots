import Layout from "@/components/Layout";

const Kontakt = () => {
  return (
    <Layout>
      <section className="container py-10">
        <h1 className="text-3xl md:text-4xl text-primary mb-2">Kontakt</h1>
        <p className="text-muted-foreground mb-10">Sprechen Sie uns an</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-serif font-semibold text-primary mb-1">Adresse</h3>
              <p className="text-muted-foreground text-sm">
                RA Benjamin Feldbaum<br />
                Ostertorswallstraße 59<br />28195 Bremen
              </p>
            </div>
            <div>
              <h3 className="text-base font-serif font-semibold text-primary mb-1">E-Mail</h3>
              <a href="mailto:kanzlei@feldbaum.net" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                kanzlei@feldbaum.net
              </a>
            </div>
            <div>
              <h3 className="text-base font-serif font-semibold text-primary mb-1">Telefon</h3>
              <a href="tel:+49000000" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +49 000 000
              </a>
            </div>
            <div>
              <h3 className="text-base font-serif font-semibold text-primary mb-1">Öffnungszeiten</h3>
              <p className="text-sm text-muted-foreground">
                Montag – Freitag: 10:00 – 16:00 Uhr<br />
                Samstag & Sonntag: Geschlossen
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-serif font-semibold text-primary mb-3">Standort</h3>
            <div className="overflow-hidden border border-border">
              <iframe
                title="Kanzlei Feldbaum Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2397.8!2d8.8234!3d53.0734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1281f5f6e7b1d%3A0x0!2sOstertorswallstra%C3%9Fe+59%2C+28195+Bremen!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="350"
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
