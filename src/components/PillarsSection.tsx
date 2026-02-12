import AnimatedSection from "./AnimatedSection";

const PillarsSection = () => {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Você só precisa de um método prático e poderoso para destravar sua comunicação.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              O Maestria Speakers foi criado para que você tenha clareza, confiança e as ferramentas certas para se expressar com autoridade, ocupar espaços e ser levado a sério.
            </p>
            <p className="text-foreground font-semibold text-lg">
              Você tem uma mensagem que precisa ir para o mundo. E nós vamos garantir que ela seja ouvida.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">Método Oratória Magnética™</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            O Sistema de <span className="text-gradient-gold">4 Pilares</span> Para Destravar
          </h2>
          <p className="text-center text-muted-foreground mb-16">sua oratória Magnética</p>
        </AnimatedSection>

        {/* Circular Diagram */}
        <AnimatedSection delay={0.2}>
          <div className="relative max-w-2xl mx-auto mb-16">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl"></div>
            
            {/* Main circular container */}
            <div className="relative aspect-square">
              {/* Center circle - Result */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] aspect-square rounded-full bg-gradient-to-br from-background to-card border-2 border-primary/30 flex flex-col items-center justify-center z-10 shadow-lg">
                <p className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">RESULTADO</p>
                <p className="text-xs sm:text-sm text-center text-muted-foreground px-4 leading-tight">
                  Pronto para Falar em Público e nas Redes Sociais com Clareza, Segurança e Presença
                </p>
              </div>

              {/* Pilar 1 - DESTRAVE (Top Left - Red) */}
              <div className="absolute top-0 left-0 w-[50%] h-[50%] flex items-start justify-start">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-tl-[200px] blur-sm"></div>
                  <div className="relative bg-gradient-to-br from-red-600 to-red-800 rounded-tl-[200px] p-6 sm:p-8 w-full h-full border-2 border-red-500/50">
                    <div className="flex flex-col items-start">
                      <p className="text-xs sm:text-sm text-red-200 mb-1">PILAR 1</p>
                      <h3 className="font-display text-lg sm:text-2xl font-bold text-white mb-2">DESTRAVE</h3>
                      <p className="text-xs sm:text-sm text-red-100">Elimine Bloqueios Emocionais</p>
                      <div className="mt-3 text-2xl">🔓</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pilar 2 - ESTRUTURA (Top Right - Blue) */}
              <div className="absolute top-0 right-0 w-[50%] h-[50%] flex items-start justify-end">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/20 to-blue-800/20 rounded-tr-[200px] blur-sm"></div>
                  <div className="relative bg-gradient-to-bl from-blue-600 to-blue-800 rounded-tr-[200px] p-6 sm:p-8 w-full h-full border-2 border-blue-500/50">
                    <div className="flex flex-col items-end text-right">
                      <p className="text-xs sm:text-sm text-blue-200 mb-1">PILAR 2</p>
                      <h3 className="font-display text-lg sm:text-2xl font-bold text-white mb-2">ESTRUTURA</h3>
                      <p className="text-xs sm:text-sm text-blue-100">Organize Ideias com Clareza</p>
                      <div className="mt-3 text-2xl">📋</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pilar 3 - PRESENÇA (Bottom Right - Orange/Gold) */}
              <div className="absolute bottom-0 right-0 w-[50%] h-[50%] flex items-end justify-end">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tl from-amber-600/20 to-orange-600/20 rounded-br-[200px] blur-sm"></div>
                  <div className="relative bg-gradient-to-tl from-amber-600 to-orange-600 rounded-br-[200px] p-6 sm:p-8 w-full h-full border-2 border-amber-500/50">
                    <div className="flex flex-col items-end text-right h-full justify-end">
                      <div className="mt-3 text-2xl mb-2">🎤</div>
                      <p className="text-xs sm:text-sm text-amber-200 mb-1">PILAR 3</p>
                      <h3 className="font-display text-lg sm:text-2xl font-bold text-white mb-2">PRESENÇA</h3>
                      <p className="text-xs sm:text-sm text-amber-100">Comunique com Autoridade</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pilar 4 - LIDERANÇA (Bottom Left - Purple) */}
              <div className="absolute bottom-0 left-0 w-[50%] h-[50%] flex items-end justify-start">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-purple-800/20 rounded-bl-[200px] blur-sm"></div>
                  <div className="relative bg-gradient-to-tr from-purple-600 to-purple-800 rounded-bl-[200px] p-6 sm:p-8 w-full h-full border-2 border-purple-500/50">
                    <div className="flex flex-col items-start h-full justify-end">
                      <div className="mt-3 text-2xl mb-2">♟️</div>
                      <p className="text-xs sm:text-sm text-purple-200 mb-1">PILAR 4</p>
                      <h3 className="font-display text-lg sm:text-2xl font-bold text-white mb-2">LIDERANÇA</h3>
                      <p className="text-xs sm:text-sm text-purple-100">Influencie e Ocupe Espaços</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrows connecting to center */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {/* Arrow from Pilar 1 to center */}
                <path d="M 25 25 L 45 45" stroke="url(#gradient1)" strokeWidth="0.5" fill="none" markerEnd="url(#arrowhead1)" />
                {/* Arrow from Pilar 2 to center */}
                <path d="M 75 25 L 55 45" stroke="url(#gradient2)" strokeWidth="0.5" fill="none" markerEnd="url(#arrowhead2)" />
                {/* Arrow from Pilar 3 to center */}
                <path d="M 75 75 L 55 55" stroke="url(#gradient3)" strokeWidth="0.5" fill="none" markerEnd="url(#arrowhead3)" />
                {/* Arrow from Pilar 4 to center */}
                <path d="M 25 75 L 45 55" stroke="url(#gradient4)" strokeWidth="0.5" fill="none" markerEnd="url(#arrowhead4)" />
                
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient2">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient3">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient4">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                  </linearGradient>
                  <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#ef4444" opacity="0.6" />
                  </marker>
                  <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#3b82f6" opacity="0.6" />
                  </marker>
                  <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#f59e0b" opacity="0.6" />
                  </marker>
                  <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#a855f7" opacity="0.6" />
                  </marker>
                </defs>
              </svg>

              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PillarsSection;
