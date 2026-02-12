import AnimatedSection from "./AnimatedSection";

const AgendaSection = () => {
  return (
    <section className="section-dark-alt py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Veja o que vai acontecer nos <span className="text-gradient-gold">2 dias mais intensos</span> da sua vida:
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
              <p className="text-muted-foreground text-sm mb-4 font-medium">Durante o primeiro dia, você vai:</p>
              <ul className="space-y-5 text-muted-foreground text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-foreground">Identificar e eliminar as barreiras emocionais que te fazem travar</span>
                    <br />
                    <span className="text-muted-foreground">Medo de julgamento. Medo de errar. Sensação de "não sou bom o suficiente". Vamos desmontar isso na raiz.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-foreground">Compreender de onde vêm seus bloqueios de comunicação — e superá-los na prática</span>
                    <br />
                    <span className="text-muted-foreground">Não com teoria. Com exposição real, gradual e direcionada.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-foreground">Desenvolver confiança verdadeira através de dinâmicas de destrave ao vivo</span>
                    <br />
                    <span className="text-muted-foreground">Você vai falar. Vai errar. Vai ajustar. E vai sentir a transformação acontecendo em tempo real.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-foreground">Dominar a estrutura de oratória que organiza ideias e prende atenção do início ao fim</span>
                    <br />
                    <span className="text-muted-foreground">Como abrir uma fala. Como conduzir o raciocínio. Como fechar com impacto.</span>
                  </div>
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
              <p className="text-muted-foreground text-sm mb-4 font-medium">No segundo dia, você vai:</p>
              <ul className="space-y-5 text-muted-foreground text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-foreground">Realizar práticas reais de fala com correção em tempo real</span>
                    <br />
                    <span className="text-muted-foreground">Você não vai anotar para "fazer em casa". Você vai fazer ALI. Na frente de todos. Até virar padrão.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-foreground">Transformar completamente a forma como você se comunica</span>
                    <br />
                    <span className="text-muted-foreground">Em reuniões. Em atendimentos. Nas redes sociais. Em qualquer ambiente.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-foreground">Aprender a sustentar atenção, transmitir autoridade e ser lembrado</span>
                    <br />
                    <span className="text-muted-foreground">Não é sobre falar alto. É sobre falar com uma presença magnética.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-foreground">Dominar a arte de conduzir raciocínio e fechar com impacto</span>
                    <br />
                    <span className="text-muted-foreground">Para que as pessoas não apenas te ouçam. Mas sejam movidas pelo que você diz.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-foreground">Construir presença de orador que abre portas, fecha contratos e gera respeito instantâneo</span>
                    <br />
                    <span className="text-muted-foreground">Pessoas que falam bem não pedem oportunidades. Recebem.</span>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Warning block */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center border border-border rounded-lg p-8 bg-card">
            <h3 className="font-display text-2xl font-bold text-primary mb-4">⚠ ATENÇÃO: ISSO NÃO É TEORIA</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              Durante os 2 dias, você será colocado à prova.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              Você vai falar. Você vai errar. Você vai ajustar. Você vai evoluir em 2 dias o que levaria 10 anos.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              Sem teoria barata. Sem romantização. Com prática real, exposição real e vivência intensa.
            </p>
            <p className="text-foreground font-semibold max-w-2xl mx-auto leading-relaxed">
              Porque não estamos formando apenas oradores. Estamos despertando líderes que vão impactar multidões.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-8 text-center">
            
              href="#inscricao"
              className="inline-block bg-gradient-gold text-primary-foreground font-body font-bold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              QUERO GARANTIR MINHA VAGA!
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AgendaSection;
