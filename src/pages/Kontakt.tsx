import Layout from "@/components/Layout";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Kontakt = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-2">
            Wir freuen uns auf Sie
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold">
            Kontakt
          </h1>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-8">So erreichen Sie uns</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-muted-foreground text-sm">
                    Ostertorswallstraße 59<br />28195 Bremen
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-medium">E-Mail</p>
                  <a href="mailto:kanzlei@feldbaum.net" className="text-muted-foreground text-sm hover:text-gold transition-colors">
                    kanzlei@feldbaum.net
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-medium">Telefon</p>
                  <a href="tel:+49000000" className="text-muted-foreground text-sm hover:text-gold transition-colors">
                    +49 000 000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-medium">Öffnungszeiten</p>
                  <p className="text-muted-foreground text-sm">
                    Montag – Freitag: 10:00 – 16:00 Uhr<br />
                    Samstag & Sonntag: Geschlossen
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-8">Standort</h2>
            <div className="border border-border overflow-hidden">
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
