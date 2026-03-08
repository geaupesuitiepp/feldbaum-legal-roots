import Layout from "@/components/Layout";

const UeberUns = () => {
  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="container py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Wer wir sind
          </p>
          <h1 className="text-4xl md:text-6xl">Über uns</h1>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-2xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Die Kanzlei Feldbaum mit Sitz in Bremen ist spezialisiert auf Insolvenzrecht,
            Steuerberatung und Firmengründungen. Rechtsanwalt Benjamin Feldbaum verbindet
            fundierte juristische Expertise mit praxisnaher Beratung.
          </p>
          <p>
            Unser Ziel ist es, Mandanten in schwierigen finanziellen und rechtlichen Situationen
            kompetent und vertrauensvoll zur Seite zu stehen.
          </p>
          <p>
            Wir legen großen Wert auf persönliche Betreuung, transparente Kommunikation
            und eine vertrauensvolle Zusammenarbeit.
          </p>
        </div>

        <div className="mt-16 border-l-2 border-foreground pl-6 max-w-xl">
          <p className="text-xl leading-relaxed">
            „Für jeden Mandanten die bestmögliche Lösung — mit Kompetenz, Engagement und Diskretion."
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            — RA Benjamin Feldbaum
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
