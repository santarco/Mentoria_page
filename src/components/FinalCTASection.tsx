import AnimatedSection from "./AnimatedSection";

const FinalCTASection = () => {
  return (
    <section className="section-dark py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            ⚠ ATENÇÃO: VAGAS EXTREMAMENTE LIMITADAS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Por se tratar de uma formação presencial, prática e com correções individuais, apenas <span className="text-gradient-gold">70 participantes</span> serão aceitos.
          </h2>
          <p className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Não aceitamos qualquer pessoa. Aceitamos quem tem mensagem e está disposto a sair da invisibilidade.
          </p>
          <p className="text-foreground font-medium mb-10">
            Porque não estamos formando apenas oradores. Estamos despertando líderes que vão impactar multidões.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <a href="#pricing" className="btn-gold text-lg animate-pulse-gold">
            QUERO ME TORNAR UM MAESTRO DA ORATÓRIA
          </a>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <p className="mt-8 text-muted-foreground text-sm">
            Garanta sua vaga agora antes que as vagas se esgotem e as inscrições sejam encerradas.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTASection;
