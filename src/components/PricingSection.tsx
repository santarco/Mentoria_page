import AnimatedSection from "./AnimatedSection";

const PricingSection = () => {
  return (
    <section id="pricing" className="section-dark-alt py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            A decisão que vai <span className="text-gradient-gold">mudar o rumo</span> da sua vida.
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Tudo o que você precisa fazer AGORA é dar o primeiro passo para se tornar um Maestro da Oratória e começar a colher os frutos dessa transformação pessoal e profissional.
          </p>
          <h3 className="font-display text-2xl font-bold text-center mb-3">
            Escolha seu melhor acesso ao <span className="text-primary">Maestria Speakers</span>
          </h3>
          <p className="text-center text-sm tracking-[0.3em] uppercase text-primary mb-14 font-body">
            Edição: São José do Rio Preto - SP
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Essencial */}
          <AnimatedSection delay={0.1}>
            <div className="border border-border rounded-lg bg-card flex flex-col h-full">
              <div className="p-8 flex-1">
                <h3 className="font-display text-2xl font-bold mb-1">Acesso Essencial</h3>
                <p className="text-muted-foreground text-sm mb-6">Para quem quer destravar e começar a se posicionar</p>

                <p className="text-sm font-semibold text-foreground mb-4">O que você recebe:</p>
                <ul className="space-y-4 text-sm text-muted-foreground mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Imersão Presencial – 2 Dias Intensivos</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Treinamento prático com exposição real, dinâmicas de destrave e construção de presença</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Método Oratória Magnética Aplicado ao Vivo</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Você não anota para fazer depois. Você pratica até virar padrão.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Treinamento de Estrutura de Oratória</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Como organizar ideias, abrir falas, conduzir raciocínio e fechar com impacto</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Dinâmicas Práticas de Destrave Emocional</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Quebra de medo, vergonha, julgamento e bloqueios inconscientes</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Avaliação do Orador</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Diagnóstico claro do seu nível atual de comunicação e como evoluir rapidamente</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Playbook Físico da Formação</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Guia prático de oratória, estrutura de discurso e exercícios de treino contínuo</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Área de Membros Exclusiva</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Conteúdos complementares para reforçar o aprendizado pós-evento</span>
                    </div>
                  </li>
                </ul>

                <div className="mb-6 p-4 bg-secondary/30 rounded-lg">
                  <p className="text-sm font-semibold text-foreground mb-2">RESULTADO DO ACESSO ESSENCIAL:</p>
                  <p className="text-muted-foreground text-xs mb-1">Você sai capaz de:</p>
                  <ul className="text-muted-foreground text-xs space-y-1 ml-4">
                    <li>• Falar em público sem travar</li>
                    <li>• Se expressar com clareza em reuniões, atendimentos e redes sociais</li>
                    <li>• Ser ouvido até o final</li>
                    <li>• Transmitir mais segurança e credibilidade</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-muted-foreground text-sm line-through">De R$ 2.497</p>
                  <p className="text-foreground text-lg font-body">12x de <span className="text-primary font-bold text-2xl">R$ 49,66</span></p>
                  <p className="text-muted-foreground text-sm">Ou à vista por: <span className="text-foreground font-semibold">R$ 497</span></p>
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
                <ul className="space-y-4 text-sm text-muted-foreground mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">HMI – Mapeamento Comportamental do Orador</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Raio-X completo do seu perfil de comunicação, influência e liderança</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Sessão Avançada de Reprogramação de Bloqueios de Oratória</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Trabalho direto em: medo de julgamento, medo de errar, insegurança ao se expor, sensação de "não sou bom(a) o suficiente"</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Estratégia de Posicionamento como Orador no Instagram</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Como usar a sua oratória no instagram para construir autoridade, atrair oportunidades e transformar comunicação em faturamento previsível.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Modelo de palestra Estruturada Pronta</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Você sai com uma palestra organizada, clara e adaptável para eventos, empresas ou redes sociais</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Acesso à Gravação Completa do Evento por 12 meses.</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Reveja as aulas, reviva as práticas e reforce o aprendizado quantas vezes precisar</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <span className="font-semibold text-foreground">Kit VIP Exclusivo no dia do evento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Blueprint Profissional de Palestra em Inteligência Emocional</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Arquitetura validada para uso em palcos, eventos e conteúdos estratégicos</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Comunidade VIP Privada no WhatsApp "Maestros da Oratória"</span>
                      <br />
                      <span className="text-muted-foreground text-xs">Acesso direto a uma rede de profissionais que também decidiram parar de se esconder e começar a ocupar espaços</span>
                    </div>
                  </li>
                </ul>

                <div className="mb-6 p-4 bg-secondary/30 rounded-lg">
                  <p className="text-sm font-semibold text-foreground mb-2">RESULTADO DO PLANO MAESTRO:</p>
                  <p className="text-muted-foreground text-xs mb-1">Você sai:</p>
                  <ul className="text-muted-foreground text-xs space-y-1 ml-4">
                    <li>• Dominando estrutura de fala</li>
                    <li>• Comunicando com autoridade e clareza</li>
                    <li>• Preparado para palestrar, liderar grupos e se posicionar profissionalmente</li>
                    <li>• Muito mais próximo de transformar oratória em contratos, clientes e renda</li>
                    <li>• Com sua mensagem pronta para impactar multidões</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-muted-foreground text-sm line-through">De R$ 3.497</p>
                  <p className="text-foreground text-lg font-body">12x de <span className="text-primary font-bold text-2xl">R$ 99,66</span></p>
                  <p className="text-muted-foreground text-sm">Ou à vista por: <span className="text-foreground font-semibold">R$ 997</span></p>
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

        {/* Why Participate Section */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 max-w-3xl mx-auto text-center space-y-4">
            <h3 className="font-display text-2xl font-bold mb-6">
              Por que participar da <span className="text-primary">Maestria Speakers</span>?
            </h3>
            <p className="text-foreground font-semibold text-lg mb-4">
              Porque quem não sabe se expressar, perde oportunidades.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Você pode ter o melhor conteúdo, a melhor formação, o maior propósito, mas se não consegue transmitir isso com clareza e autoridade em cada palavra que sai da sua boca, você será ignorado(a).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              E enquanto isso, pessoas com menos conhecimento e menos profundidade ocupam os espaços que poderiam ser seus.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Não porque são melhores que você.
            </p>
            <p className="text-foreground font-semibold">
              Mas porque sabem falar e se expressar melhor.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-6">
              Você tem uma mensagem que precisa ir para o mundo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              E se você não aprender a expressá-la com clareza e presença, ela morrerá com você.
            </p>
            <p className="text-primary font-semibold text-lg mt-6">
              Nos próximos dias 27 e 28 de Fevereiro de 2026, você pode mudar isso de uma vez por todas.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 text-center">
            
              href="#inscricao"
              className="inline-block bg-gradient-gold text-primary-foreground font-body font-bold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              QUERO GARANTIR MINHA VAGA AGORA!
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
