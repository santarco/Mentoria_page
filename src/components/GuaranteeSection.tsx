import AnimatedSection from "./AnimatedSection";

const GuaranteeSection = () => {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Investimento com <span className="text-gradient-gold">Risco Zero!!!</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="border border-primary/30 rounded-lg p-8 sm:p-10 bg-card shadow-gold-sm">
            <div className="text-6xl mb-6">🛡️</div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Maestria Speakers é uma formação presencial intensa, prática e transformadora. Por isso, você conta com uma <span className="text-primary font-semibold">Garantia Incondicional</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Participe do primeiro dia completo do evento. Se por qualquer motivo sentir que a formação não é para você, basta solicitar o reembolso e devolveremos <span className="text-foreground font-semibold">100% do seu investimento</span>, de forma automática.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sem burocracia. Sem perguntas. Sem constrangimento algum.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Oferecemos essa garantia porque confiamos totalmente no método, na experiência ao vivo que você vai ter e no impacto que acontece quando você vive a Maestria Speakers na prática.
            </p>
            <div className="gold-divider my-6" />
            <p className="text-foreground font-semibold text-base">
              O único risco aqui não é financeiro. É continuar perdendo oportunidades por não se expressar com clareza e autoridade.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="mt-10">
            <a
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

export default GuaranteeSection;
