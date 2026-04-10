import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-office.jpg";

const rechtsgebiete = [
  { title: "Insolvenzrecht", to: "/leistungen" },
  { title: "Steuerberatung", to: "/leistungen" },
  { title: "Firmengründung", to: "/leistungen" },
  { title: "Unternehmensberatung", to: "/leistungen" },
  { title: "Schuldnerberatung", to: "/leistungen" },
  { title: "Sanierungsberatung", to: "/leistungen" },
  { title: "Verbraucherinsolvenz", to: "/leistungen" },
  { title: "Restrukturierung", to: "/leistungen" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Image */}
      <section className="container py-6">
        <div className="w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Kanzlei Feldbaum — Bürogebäude in Hamburg"
            className="w-full h-[280px] md:h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Rechtsgebiete Grid */}
      <section className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {rechtsgebiete.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group border-t border-border py-4 pr-4 hover:text-primary transition-colors"
            >
              <span className="text-sm md:text-base font-sans">{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* About / Intro */}
      <section className="bg-card border-y border-border">
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl mb-4 text-primary">
              Ihre Kanzlei in Hamburg
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Die Kanzlei Feldbaum berät Privatpersonen und Unternehmen in allen Fragen
              des Insolvenzrechts, der Steuerberatung und bei Firmengründungen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Rechtsanwalt Benjamin Feldbaum verbindet fundierte juristische Expertise
              mit praxisnaher, persönlicher Beratung.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <blockquote className="border-l-4 border-primary pl-6">
              <p className="text-lg italic leading-relaxed text-foreground">
                „Für jeden Mandanten die bestmögliche Lösung — mit Kompetenz,
                Engagement und Diskretion."
              </p>
              <footer className="mt-3 text-sm text-muted-foreground">
                — RA Benjamin Feldbaum
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg mb-2 text-primary">Erstberatung</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Montag – Freitag, 10:00 – 16:00 Uhr.
              <br />Unverbindlich und vertraulich.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-2 text-primary">Kontakt</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <a href="tel:+494085539775" className="hover:text-primary transition-colors">+49 40 85539775</a>
              <br />
              <a href="mailto:kanzlei@feldbaum.net" className="hover:text-primary transition-colors">kanzlei@feldbaum.net</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-2 text-primary">Standort</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              RA Benjamin Feldbaum
              <br />Kuehnstraße 41
              <br />22045 Hamburg
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link
            to="/kontakt"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Kontakt aufnehmen →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
