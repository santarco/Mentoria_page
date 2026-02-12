import AnimatedSection from "./AnimatedSection";

const targets = [
  "É Coach, Terapeuta, Psicólogo ou Profissional do Desenvolvimento Humano que sente que tem mensagem, mas trava na hora de falar",
  "Deseja se posicionar como autoridade, mas não consegue transmitir credibilidade ao se comunicar",
  "Já tentou gravar conteúdos para redes sociais, mas não posta por medo de julgamento",
  "Perde contratos, clientes e oportunidades porque outras pessoas com menos conhecimento sabem se expressar melhor",
  "Quer dominar a oratória de forma prática, sem anos de teoria barata",
  "Sente que carrega uma mensagem forte demais para continuar travada",
  "Está cansado de ver pessoas com menos potencial ocupando os espaços que deveriam ser seus",
  "Quer parar de ser \"mais um\" e começar a ser lembrado e escolhido",
];

const TargetSection = () => {
  return (
    <section className="section-dark-alt py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Esta formação é para <span className="text-gradient-gold">você que:</span>
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Quer parar de perder oportunidades por não saber se expressar
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-4">
          {targets.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                <span className="text-primary font-bold mt-0.5 shrink-0">✔</span>
                <span className="text-muted-foreground text-sm">{t}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Transformation message */}
        <AnimatedSection delay={0.4}>
          <div className="mt-14 text-center max-w-3xl mx-auto">
            <p className="text-foreground text-lg leading-relaxed mb-4">
              Você aprenderá a Metodologia que transformou a comunicação de centenas de profissionais exatamente como você.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              São centenas de profissionais que saíram da invisibilidade e hoje ocupam espaços, palestram, lideram grupos e são respeitados por dominarem a oratória.
            </p>
            <p className="text-primary font-semibold text-xl">
              E você será o próximo.
            </p>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection delay={0.5}>
          <div className="mt-12">
            <p className="text-center text-muted-foreground text-sm mb-6 italic">
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <blockquote className="border border-border rounded-lg p-6 bg-card">
                <p className="text-foreground italic text-sm mb-4">
                  "Eu gravava 10 vezes e não postava nenhuma. Hoje eu gravo uma vez e posto com segurança.
                  A Maestria Speakers destravou algo em mim que eu nem sabia que estava preso."
                </p>
                <cite className="text-primary text-sm font-body not-italic">— João Marcos de Oliveira, Coach</cite>
              </blockquote>
              <blockquote className="border border-border rounded-lg p-6 bg-card">
                <p className="text-foreground italic text-sm mb-4">
                  "Eu perdia contratos porque não sabia me expressar. Depois da formação, minha comunicação mudou
                  completamente. Hoje sou chamado para palestrar."
                </p>
                <cite className="text-primary text-sm font-body not-italic">— Maria Cristina Souza, Terapeuta</cite>
              </blockquote>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="mt-10 text-center">
            <a
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

export default TargetSection;
