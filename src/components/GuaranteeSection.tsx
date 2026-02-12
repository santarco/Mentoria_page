import AnimatedSection from "./AnimatedSection";

const GuaranteeSection = () => {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Investimento com <span className="text-gradient-gold">Risco Zero</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="border border-primary/30 rounded-lg p-8 sm:p-10 bg-card shadow-gold-sm">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="font-display text-xl font-bold text-primary mb-4">Garantia Incondicional</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Participe do primeiro dia completo do evento. Se por qualquer motivo sentir que a formação não é para você,
              basta solicitar o reembolso e devolveremos <span className="text-foreground font-semibold">100% do seu investimento</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sem burocracia. Sem perguntas. Sem constrangimento algum.
            </p>
            <div className="gold-divider my-6" />
            <p className="text-foreground italic text-sm">
              O único risco aqui não é financeiro. É continuar perdendo oportunidades por não se expressar com clareza e autoridade.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GuaranteeSection;
