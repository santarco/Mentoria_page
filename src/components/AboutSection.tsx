import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <section className="section-dark-alt py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-6">
            Esta será a Formação que irá <span className="text-gradient-gold">transformar</span> a sua comunicação de uma vez por todas.
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground text-center text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            No Maestria Speakers, você vai aprender um método direto, prático e objetivo para dominar a arte de falar em público e se posicionar como autoridade.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto mb-10 space-y-4 text-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Não se trata apenas de aprender técnicas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Isso NÃO é um curso de oratória comum.
            </p>
            <p className="text-primary font-display text-xl font-semibold">
              É uma FORMAÇÃO COMPLETA.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="max-w-3xl mx-auto mb-10 space-y-4 text-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aqui você será testado. Aqui você será exposto. Aqui você será transformado(a).
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Porque não estamos formando pessoas que apenas "falam melhor".
            </p>
            <p className="text-primary font-display text-xl font-semibold">
              Estamos despertando líderes que carregam mensagens poderosas demais para continuarem travadas.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="text-muted-foreground text-center text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            Profissionais que têm algo importante para dizer ao mundo. Mas que até hoje não conseguiram expressar com clareza, presença e autoridade.
          </p>
          <p className="text-primary font-display text-2xl font-bold text-center mb-12">
            E isso acaba hoje.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-display text-xl font-semibold text-primary mb-6">❌ Você NÃO precisa:</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✕</span>
                Gastar anos estudando teoria de comunicação para começar a ser ouvido e respeitado
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✕</span>
                Ser extrovertido ou "ter nascido com o dom" para falar bem em público
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✕</span>
                Construir uma audiência gigante ou ter milhares de seguidores para ter autoridade
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✕</span>
                Ter experiência prévia em palestras ou ser fluente em redes sociais
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
