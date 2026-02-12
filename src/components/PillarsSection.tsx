import AnimatedSection from "./AnimatedSection";

const pillars = [
  { num: "01", title: "DESTRAVE", desc: "Elimine Bloqueios Emocionais" },
  { num: "02", title: "ESTRUTURA", desc: "Organize Ideias com Clareza" },
  { num: "03", title: "PRESENÇA", desc: "Comunique com Autoridade" },
  { num: "04", title: "LIDERANÇA", desc: "Influencie e Ocupe Espaços" },
];

const PillarsSection = () => {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-center text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">Método Oratória Magnética™</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Sistema de <span className="text-gradient-gold">4 Pilares</span> Para Destravar
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
            Pronto para Falar em Público e nas Redes Sociais com Clareza, Segurança e Presença
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.num} delay={i * 0.1}>
              <div className="relative group border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-all duration-500 h-full">
                <span className="font-display text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors absolute top-4 right-4">
                  {p.num}
                </span>
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-primary mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
