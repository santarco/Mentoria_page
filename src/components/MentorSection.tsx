import AnimatedSection from "./AnimatedSection";
import mentorImage from "@/assets/mentor-deolane.jpg";

const MentorSection = () => {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-center text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">Conheça sua mentora</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-gold">Deolane Paz</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-[360px_1fr] gap-0 border border-border rounded-lg overflow-hidden bg-card">
            {/* Photo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 border border-primary/10 z-10 pointer-events-none rounded-l-lg" />
              <img
                src={mentorImage}
                alt="Deolane Paz — Mentora e Treinadora de Oratória"
                className="w-full h-full object-cover object-top md:min-h-[480px] max-h-[520px]"
              />
              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold z-20" />
            </div>
            {/* Bio */}
            <div className="p-8 sm:p-10 flex flex-col justify-center space-y-6">
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Deolane Paz é referência nacional em formação de oradores e desenvolvimento de comunicação estratégica.
                  Treinadora de uma das maiores instituições de Desenvolvimento Humano do mundo e eleita{" "}
                  <span className="text-primary font-semibold">Coach TOP 1 de Pernambuco</span> por anos consecutivos, ela transformou a forma como centenas de profissionais se comunicam e se posicionam no mercado.
                </p>
                <p>
                  Criadora do <span className="text-foreground font-medium">Método Destrava Coach</span> e do{" "}
                  <span className="text-foreground font-medium">Método Oratória Magnética™</span>, Deolane domina a arte de
                  transformar profissionais invisíveis em autoridades reconhecidas — pessoas que não apenas falam bem,
                  mas que são ouvidas, respeitadas e escolhidas.
                </p>
                <p>
                  Sua missão é clara: formar Maestros da Oratória que dominem a estrutura de discurso, presença e comunicação magnética, ocupando espaços que hoje perdem por não saber se expressar.
                </p>
              </div>
              <blockquote className="text-foreground italic border-l-2 border-gold pl-4">
                "Profissionais que não precisam gritar para serem ouvidos — porque quando falam, todos param para escutar."
              </blockquote>
              {/* Credentials badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {["Coach TOP 1 PE", "Método Oratória Magnética™", "Treinadora Internacional"].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-body tracking-wide uppercase px-3 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MentorSection;
