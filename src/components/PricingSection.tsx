import AnimatedSection from "./AnimatedSection";

const PricingSection = () => {
  return (
    <section id="pricing" className="section-dark-alt py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-center text-sm tracking-[0.3em] uppercase text-primary mb-3 font-body">
            Edição: São José do Rio Preto – SP
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            A decisão que vai <span className="text-gradient-gold">mudar o rumo</span> da sua vida
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
            Tudo o que você precisa fazer AGORA é dar o primeiro passo para se tornar um Maestro da Oratória.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Essencial */}
          <AnimatedSection delay={0.1}>
            <div className="border border-border rounded-lg bg-card flex flex-col h-full">
              <div className="p-8 flex-1">
                <h3 className="font-display text-2xl font-bold mb-1">Acesso Essencial</h3>
                <p className="text-muted-foreground text-sm mb-6">Para quem quer destravar e começar a se posicionar</p>

                <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Imersão Presencial – 2 Dias Intensivos</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Método Oratória Magnética Aplicado ao Vivo</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Treinamento de Estrutura de Oratória</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Dinâmicas Práticas de Destrave Emocional</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Avaliação do Orador</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Playbook Físico da Formação</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Área de Membros Exclusiva</li>
                </ul>

                <div className="mb-6">
                  <p className="text-muted-foreground text-sm line-through">De R$ 2.497</p>
                  <p className="text-foreground text-lg font-body">12x de <span className="text-primary font-bold text-2xl">R$ 49,66</span></p>
                  <p className="text-muted-foreground text-sm">Ou à vista por <span className="text-foreground font-semibold">R$ 497</span></p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <a href="#" className="btn-gold-outline w-full text-center block">
                  QUERO O ACESSO ESSENCIAL
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Maestro VIP */}
          <AnimatedSection delay={0.2}>
            <div className="border border-primary/40 rounded-lg bg-card flex flex-col h-full relative overflow-hidden shadow-gold">
              <div className="bg-gradient-gold text-center py-2">
                <span className="font-body text-xs font-bold text-primary-foreground tracking-widest uppercase">
                  ⭐ Mais Escolhido
                </span>
              </div>
              <div className="p-8 flex-1">
                <h3 className="font-display text-2xl font-bold mb-1">Acesso Maestro <span className="text-primary">(VIP)</span></h3>
                <p className="text-muted-foreground text-sm mb-6">Para quem quer autoridade, diferenciação e aceleração real</p>

                <p className="text-xs text-primary font-body font-semibold mb-3 uppercase tracking-wide">Tudo do Plano Essencial, MAIS:</p>
                <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> HMI – Mapeamento Comportamental do Orador</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Sessão Avançada de Reprogramação de Bloqueios</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Estratégia de Posicionamento no Instagram</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Modelo de Palestra Estruturada Pronta</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Gravação Completa do Evento (12 meses)</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Kit VIP Exclusivo no dia do evento</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Blueprint Profissional de Palestra em IE</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Comunidade VIP Privada "Maestros da Oratória"</li>
                </ul>

                <div className="mb-6">
                  <p className="text-muted-foreground text-sm line-through">De R$ 3.497</p>
                  <p className="text-foreground text-lg font-body">12x de <span className="text-primary font-bold text-2xl">R$ 99,66</span></p>
                  <p className="text-muted-foreground text-sm">Ou à vista por <span className="text-foreground font-semibold">R$ 997</span></p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <a href="#" className="btn-gold w-full text-center block animate-pulse-gold">
                  QUERO O ACESSO MAESTRO VIP
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
