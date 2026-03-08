import Layout from "@/components/Layout";

const UeberUns = () => {
  return (
    <Layout>
      <section className="container py-10">
        <h1 className="text-3xl md:text-4xl text-primary mb-2">Die Kanzlei</h1>
        <p className="text-muted-foreground mb-10">Wer wir sind</p>

        <div className="max-w-2xl space-y-5 text-muted-foreground leading-relaxed">
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

        <div className="mt-12 border-l-4 border-primary pl-6 max-w-xl">
          <p className="text-lg italic leading-relaxed">
            „Für jeden Mandanten die bestmögliche Lösung — mit Kompetenz, Engagement und Diskretion."
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            — RA Benjamin Feldbaum
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
