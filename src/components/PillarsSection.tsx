import React from "react";
import AnimatedSection from "./AnimatedSection";

type Align = "left" | "right";

const PillarsSection = () => {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Você só precisa de um método prático e poderoso para destravar sua comunicação.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              O Maestria Speakers foi criado para que você tenha clareza, confiança e as ferramentas certas
              para se expressar com autoridade, ocupar espaços e ser levado a sério.
            </p>
            <p className="text-foreground font-semibold text-lg">
              Você tem uma mensagem que precisa ir para o mundo. E nós vamos garantir que ela seja ouvida.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-xs tracking-[0.35em] uppercase text-primary/80 mb-4 font-body">
            Método Oratória Magnética™
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            O Sistema de <span className="text-gradient-gold">4 Pilares</span> Para Destravar
          </h2>

          <p className="text-center text-muted-foreground mb-14">sua oratória magnética</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative max-w-5xl mx-auto">
            {/* Ambient premium glow */}
            <div className="pointer-events-none absolute -inset-6 bg-[radial-gradient(closest-side,rgba(212,175,55,0.10),transparent_70%)] blur-2xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.06),transparent_65%)] blur-3xl" />

            <div className="relative">
              {/* MOBILE / TABLET (cards + result) */}
              <div className="grid gap-4 sm:gap-6 lg:hidden">
                <ResultCard />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <PillarCard
                    index="03"
                    title="DESTRAVE"
                    subtitle="Elimine bloqueios emocionais"
                    Icon={IconUnlock}
                  />
                  <PillarCard
                    index="01"
                    title="ESTRUTURA"
                    subtitle="Organize ideias com clareza"
                    Icon={IconStructure}
                    align="right"
                  />
                  <PillarCard
                    index="02"
                    title="PRESENÇA"
                    subtitle="Comunique com autoridade"
                    Icon={IconMic}
                    align="right"
                  />
                  <PillarCard
                    index="04"
                    title="LIDERANÇA"
                    subtitle="Influencie e ocupe espaços"
                    Icon={IconCrown}
                  />
                </div>
              </div>

              {/* DESKTOP (orbit layout: responsive across resolutions) */}
              <div className="hidden lg:block">
                <OrbitDiagram />
              </div>
            </div>

            <div className="h-8" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PillarsSection;

/* ------------------------- */
/* Desktop Orbit Diagram     */
/* ------------------------- */

function OrbitDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[920px] aspect-square flex items-center justify-center">
      {/* Decorative rings */}
      <div className="absolute inset-0 rounded-full border border-primary/20" />
      <div className="absolute inset-6 rounded-full border border-primary/10" />
      <div className="absolute inset-10 rounded-full border border-primary/5" />

      {/* Soft inner vignette */}
      <div className="pointer-events-none absolute inset-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.10),transparent_62%)] blur-[2px]" />

      {/* Connectors */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <marker id="goldArrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
            <polygon points="0 0, 7 3, 0 6" fill="#D4AF37" opacity="0.38" />
          </marker>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lines end before the center circle for clarity */}
        <path d="M 26 26 L 41.5 41.5" stroke="url(#goldLine)" strokeWidth="0.6" fill="none" markerEnd="url(#goldArrow)" filter="url(#softGlow)" />
        <path d="M 74 26 L 58.5 41.5" stroke="url(#goldLine)" strokeWidth="0.6" fill="none" markerEnd="url(#goldArrow)" filter="url(#softGlow)" />
        <path d="M 74 74 L 58.5 58.5" stroke="url(#goldLine)" strokeWidth="0.6" fill="none" markerEnd="url(#goldArrow)" filter="url(#softGlow)" />
        <path d="M 26 74 L 41.5 58.5" stroke="url(#goldLine)" strokeWidth="0.6" fill="none" markerEnd="url(#goldArrow)" filter="url(#softGlow)" />
      </svg>

      {/* Center */}
      <div className="relative z-10 w-[38%] min-w-[260px] max-w-[360px] aspect-square rounded-full">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-background/80 to-card/60 backdrop-blur-md border border-primary/25 shadow-[0_0_0_1px_rgba(212,175,55,0.08),0_20px_60px_rgba(0,0,0,0.65)]" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
          <p className="font-display text-xs tracking-[0.35em] uppercase text-primary/80 mb-3">
            Resultado
          </p>
          <p className="font-display text-lg xl:text-xl font-semibold text-foreground leading-snug">
            Pronto para falar com clareza, segurança e presença
          </p>
          <div className="mt-4 h-px w-12 bg-primary/30" />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Em público e nas redes, com autoridade e consistência.
          </p>
        </div>
      </div>

      {/* Orbit items (angle positions) */}
      <OrbitItem angle={-135} align="left">
        <PillarCard
          index="01"
          title="DESTRAVE"
          subtitle="Elimine bloqueios emocionais"
          Icon={IconUnlock}
          compact
        />
      </OrbitItem>

      <OrbitItem angle={-45} align="right">
        <PillarCard
          index="02"
          title="ESTRUTURA"
          subtitle="Organize ideias com clareza"
          Icon={IconStructure}
          align="right"
          compact
        />
      </OrbitItem>

      <OrbitItem angle={45} align="right">
        <PillarCard
          index="03"
          title="PRESENÇA"
          subtitle="Comunique com autoridade"
          Icon={IconMic}
          align="right"
          compact
        />
      </OrbitItem>

      <OrbitItem angle={135} align="left">
        <PillarCard
          index="04"
          title="LIDERANÇA"
          subtitle="Influencie e ocupe espaços"
          Icon={IconCrown}
          compact
        />
      </OrbitItem>
    </div>
  );
}

function OrbitItem({
  angle,
  align,
  children,
}: {
  angle: number;
  align: Align;
  children: React.ReactNode;
}) {
  // translateY controls orbit radius (increase/decrease to taste)
  // -42% works well across many screen sizes inside an aspect-square container.
  const translate = "-42%";

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        transform: `rotate(${angle}deg) translateY(${translate}) rotate(${-angle}deg)`,
      }}
    >
      <div
        className={[
          // Responsive width that adapts across resolutions
          "w-[clamp(240px,22vw,320px)]",
          align === "right" ? "text-right" : "text-left",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------- */
/* Shared Cards              */
/* ------------------------- */

function ResultCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/18 bg-gradient-to-br from-background/70 to-card/45 backdrop-blur-md shadow-[0_0_0_1px_rgba(212,175,55,0.08),0_18px_40px_rgba(0,0,0,0.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="relative p-6 sm:p-8 text-center">
        <p className="font-display text-xs tracking-[0.35em] uppercase text-primary/85 mb-3">
          Resultado
        </p>
        <p className="font-display text-xl sm:text-2xl font-semibold text-foreground leading-snug">
          Pronto para falar com clareza, segurança e presença
        </p>
        <div className="mx-auto mt-4 h-px w-14 bg-primary/30" />
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Em público e nas redes, com autoridade e consistência.
        </p>
      </div>
    </div>
  );
}

function PillarCard({
  index,
  title,
  subtitle,
  Icon,
  align = "left",
  compact = false,
}: {
  index: string;
  title: string;
  subtitle: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  align?: Align;
  compact?: boolean;
}) {
  const isRight = align === "right";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-background/65 to-card/40 backdrop-blur-md",
        "border border-primary/18",
        "shadow-[0_0_0_1px_rgba(212,175,55,0.06),0_18px_45px_rgba(0,0,0,0.60)]",
        "transition duration-300",
        "hover:border-primary/30 hover:shadow-[0_0_0_1px_rgba(212,175,55,0.10),0_22px_60px_rgba(0,0,0,0.70)]",
      ].join(" ")}
    >
      {/* premium highlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute -inset-10 opacity-20 bg-[conic-gradient(from_180deg,rgba(212,175,55,0.18),transparent_35%,rgba(212,175,55,0.10))] blur-2xl" />

      <div
        className={[
          "relative flex flex-col",
          compact ? "p-5 xl:p-6" : "p-6 sm:p-8",
          isRight ? "items-end text-right" : "items-start text-left",
        ].join(" ")}
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl border border-primary/18 bg-black/20 flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary/90" />
          </div>
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary/70">
            Pilar {index}
          </p>
        </div>

        <div className="mt-4">
          <h3 className={["font-display font-semibold text-foreground leading-tight", compact ? "text-lg xl:text-xl" : "text-lg sm:text-2xl"].join(" ")}>
            {title}
          </h3>
          <p className={["mt-2 text-muted-foreground leading-relaxed", compact ? "text-sm" : "text-xs sm:text-sm"].join(" ")}>
            {subtitle}
          </p>
        </div>

        <div className="mt-6 h-px w-12 bg-primary/20" />
      </div>
    </div>
  );
}

/* ------------------------- */
/* Icons (monochrome gold)   */
/* ------------------------- */

function IconUnlock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 11V8a5 5 0 0 1 9.6-2" />
      <rect x="6" y="11" width="12" height="10" rx="2" />
      <path d="M12 15v2" />
    </svg>
  );
}

function IconStructure(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h10" />
      <path d="M4 18h16" />
      <path d="M16 10l4 2-4 2" />
    </svg>
  );
}

function IconMic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 14a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z" />
      <path d="M19 11a7 7 0 0 1-14 0" />
      <path d="M12 18v3" />
      <path d="M9 21h6" />
    </svg>
  );
}

function IconCrown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 8l4 4 4-6 4 6 4-4v10H4V8z" />
      <path d="M4 18h16" />
    </svg>
  );
}
