import Layout from "@/components/Layout";

const UeberUns = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-2">
            Lernen Sie uns kennen
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold">
            Über uns
          </h1>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl font-bold mb-6">
            Kanzlei Feldbaum – Ihr Anwalt in Bremen
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Die Kanzlei Feldbaum mit Sitz in Bremen ist spezialisiert auf Insolvenzrecht,
              Steuerberatung und Firmengründungen. Rechtsanwalt Benjamin Feldbaum verbindet
              fundierte juristische Expertise mit praxisnaher Beratung.
            </p>
            <p>
              Unser Ziel ist es, Mandanten in schwierigen finanziellen und rechtlichen Situationen
              kompetent und vertrauensvoll zur Seite zu stehen. Ob Unternehmensgründung,
              Insolvenzverfahren oder steuerliche Fragestellungen – wir finden gemeinsam die
              beste Lösung für Ihre Situation.
            </p>
            <p>
              Wir legen großen Wert auf persönliche Betreuung, transparente Kommunikation
              und eine vertrauensvolle Zusammenarbeit mit unseren Mandanten.
            </p>
          </div>

          <div className="mt-12 border-l-2 border-gold pl-6">
            <blockquote className="font-serif text-xl italic text-foreground">
              „Unser Anspruch ist es, für jeden Mandanten die bestmögliche Lösung zu finden –
              mit Kompetenz, Engagement und Diskretion."
            </blockquote>
            <p className="mt-3 text-sm font-medium text-gold">
              — RA Benjamin Feldbaum
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
