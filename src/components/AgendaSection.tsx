import AnimatedSection from "./AnimatedSection";

const AgendaSection = () => {
  return (
    <section className="section-dark-alt py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Veja o que vai acontecer nos <span className="text-gradient-gold">2 dias mais intensos</span> da sua vida
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-10" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Day 1 */}
          <AnimatedSection delay={0.1}>
            <div className="border border-border rounded-lg p-8 bg-card h-full">
              <div className="inline-block bg-gradient-gold rounded px-4 py-1 mb-4">
                <span className="font-body text-sm font-bold text-primary-foreground tracking-wide">DIA 01</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Destrave e Estruture</h3>
              <p className="text-primary text-sm font-body mb-6">Quebra de Bloqueios e Construção da Base</p>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Identificar e eliminar as barreiras emocionais que te fazem travar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Compreender de onde vêm seus bloqueios — e superá-los na prática</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Desenvolver confiança verdadeira através de dinâmicas de destrave ao vivo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Dominar a estrutura de oratória que prende atenção do início ao fim</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Day 2 */}
          <AnimatedSection delay={0.2}>
            <div className="border border-primary/30 rounded-lg p-8 bg-card h-full shadow-gold-sm">
              <div className="inline-block bg-gradient-gold rounded px-4 py-1 mb-4">
                <span className="font-body text-sm font-bold text-primary-foreground tracking-wide">DIA 02</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Pratique e Lidere</h3>
              <p className="text-primary text-sm font-body mb-6">Método Oratória Magnética Aplicado ao Vivo</p>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Realizar práticas reais de fala com correção em tempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Transformar completamente a forma como você se comunica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Aprender a sustentar atenção, transmitir autoridade e ser lembrado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Construir presença de orador que abre portas e fecha contratos</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Warning block */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center border border-border rounded-lg p-8 bg-card">
            <h3 className="font-display text-2xl font-bold text-primary mb-4">⚠ ATENÇÃO: ISSO NÃO É TEORIA</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Durante os 2 dias, você será colocado à prova. Você vai falar. Vai errar. Vai ajustar.
              Vai evoluir em 2 dias o que levaria 10 anos.{" "}
              <span className="text-foreground font-medium">
                Porque não estamos formando apenas oradores. Estamos despertando líderes que vão impactar multidões.
              </span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AgendaSection;
