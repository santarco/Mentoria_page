import AnimatedSection from "./AnimatedSection";

const TransformSection = () => {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Imagine como será sua vida <span className="text-gradient-gold">depois do evento…</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="text-muted-foreground space-y-4 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            <p>Você não pensa mais duas vezes antes de falar.</p>
            <p>Não mede palavras com medo de julgamento.</p>
            <p>Você se expressa com clareza. As pessoas escutam até o final.</p>
            <p className="text-foreground font-medium">
              E quando você termina de falar, algo muda no ambiente: respeito e admiração.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-display text-lg font-bold text-destructive mb-4">TUDO ISSO SEM:</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>❌ Passar anos estudando teoria de comunicação</li>
                <li>❌ Precisar ser extrovertido ou ter "dom natural"</li>
                <li>❌ Depender de grande audiência nas redes sociais</li>
                <li>❌ Ter experiência prévia em palestras</li>
                <li>❌ Fazer "mais um curso" que você não aplica</li>
              </ul>
            </div>
            <div className="border border-primary/30 rounded-lg p-6 bg-card shadow-gold-sm">
              <h3 className="font-display text-lg font-bold text-primary mb-4">COM O MAESTRIA SPEAKERS:</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Comunicação clara e confiante em público e nas redes sociais</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Posicionamento como autoridade no seu segmento</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Mais convites, contratos e oportunidades</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TransformSection;
