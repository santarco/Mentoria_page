import React from "react";
import AnimatedSection from "./AnimatedSection";

const PillarsSection = () => {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Você só precisa de um método prático e poderoso para destravar sua
              comunicação.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              O Maestria Speakers foi criado para que você tenha clareza,
              confiança e as ferramentas certas para se expressar com autoridade,
              ocupar espaços e ser levado a sério.
            </p>
            <p className="text-foreground font-semibold text-lg">
              Você tem uma mensagem que precisa ir para o mundo. E nós vamos
              garantir que ela seja ouvida.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-xs tracking-[0.35em] uppercase text-primary/80 mb-4 font-body">
            Método Oratória Magnética™
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            O Sistema de <span className="text-gradient-gold">4 Pilares</span>{" "}
            Para Destravar
          </h2>

          <p className="text-center text-muted-foreground mb-14">
            sua oratória magnética
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative max-w-5xl mx-auto">
            {/* Ambient premium glow */}
            <div className="pointer-events-none absolute -inset-6 bg-[radial-gradient(closest-side,rgba(212,175,55,0.10),transparent_70%)] blur-2xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.06),transparent_65%)] blur-3xl" />

            <div className="relative">
              {/* MOBILE GRID */}
              <div className="grid gap-4 sm:gap-6 lg:hidden">
                <ResultCard />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <PillarCard
                    index="01"
                    title="DESTRAVE"
                    subtitle="Elimine bloqueios emocionais"
                    Icon={IconUnlock}
                  />
                  <PillarCard
                    index="02"
                    title="ESTRUTURA"
                    subtitle="Organize ideias com clareza"
                    Icon={IconStructure}
                    align="right"
                  />
                  <PillarCard
                    index="03"
                    title="PRESENÇA"
                    subtitle="Comunique com autoridade"
                    Icon={IconMic}
                    align="right"
                    bottom
                  />
                  <PillarCard
                    index="04"
                    title="LIDERANÇA"
                    subtitle="Influencie e ocupe espaços"
                    Icon={IconCrown}
                    bottom
                  />
                </div>
              </div>

              {/* DESKTOP CIRCLE (FIXED: grid 2x2 with gap, no overlapping) */}
              <div className="hidden lg:block relative mx-auto aspect-square max-w-3xl">
                {/* Create stacking context */}
                <div className="absolute inset-0 isolate">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-primary/20" />
                  <div className="absolute inset-3 rounded-full border border-primary/10" />

                  {/* QUADRANTS as GRID (no borders meeting in the center) */}
                  <div className="absolute inset-6 rounded-full overflow-hidden">
                    <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-6">
                      <PillarCard
                        index="01"
                        title="DESTRAVE"
                        subtitle="Elimine bloqueios emocionais"
                        Icon={IconUnlock}
                        className="rounded-tl-[220px]"
                      />

                      <PillarCard
                        index="02"
                        title="ESTRUTURA"
                        subtitle="Organize ideias com clareza"
                        Icon={IconStructure}
                        align="right"
                        className="rounded-tr-[220px]"
                      />

                      <PillarCard
                        index="04"
                        title="LIDERANÇA"
                        subtitle="Influencie e ocupe espaços"
                        Icon={IconCrown}
                        bottom
                        className="rounded-bl-[220px]"
                      />

                      <PillarCard
                        index="03"
                        title="PRESENÇA"
                        subtitle="Comunique com autoridade"
                        Icon={IconMic}
                        align="right"
                        bottom
                        className="rounded-br-[220px]"
                      />
                    </div>
                  </div>

                  {/* CONNECTORS */}
                  <svg
                    className="absolute inset-0 h-full w-full pointer-events-none z-[5]"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#D4AF37"
                          stopOpacity="0.55"
                        />
                        <stop
                          offset="70%"
                          stopColor="#D4AF37"
                          stopOpacity="0.12"
                        />
                        <stop
                          offset="100%"
                          stopColor="#D4AF37"
                          stopOpacity="0.0"
                        />
                      </linearGradient>
                      <marker
                        id="goldArrow"
                        markerWidth="10"
                        markerHeight="10"
                        refX="6"
                        refY="3"
                        orient="auto"
                      >
                        <polygon
                          points="0 0, 7 3, 0 6"
                          fill="#D4AF37"
                          opacity="0.45"
                        />
                      </marker>
                    </defs>

                    {/* Start points pulled away from center so they don't touch the result */}
                    <path
                      d="M 24 24 L 42 42"
                      stroke="url(#goldLine)"
                      strokeWidth="0.6"
                      fill="none"
                      markerEnd="url(#goldArrow)"
                    />
                    <path
                      d="M 76 24 L 58 42"
                      stroke="url(#goldLine)"
                      strokeWidth="0.6"
                      fill="none"
                      markerEnd="url(#goldArrow)"
                    />
                    <path
                      d="M 76 76 L 58 58"
                      stroke="url(#goldLine)"
                      strokeWidth="0.6"
                      fill="none"
                      markerEnd="url(#goldArrow)"
                    />
                    <path
                      d="M 24 76 L 42 58"
                      stroke="url(#goldLine)"
                      strokeWidth="0.6"
                      fill="none"
                      markerEnd="url(#goldArrow)"
                    />
                  </svg>

                  {/* CENTER RESULT (always on top) */}
                  <div className="absolute inset-0 flex items-center justify-center z-[10]">
                    <div className="w-[38%] aspect-square rounded-full relative">
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-background/70 to-card/50 backdrop-blur-md border border-primary/25 shadow-[0_0_0_1px_rgba(212,175,55,0.08),0_20px_50px_rgba(0,0,0,0.55)]" />
                      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
                        <p className="font-display text-xs xl:text-sm tracking-[0.35em] uppercase text-primary/90 mb-2">
                          Resultado
                        </p>
                        <p className="font-display text-lg xl:text-xl font-semibold text-foreground leading-snug">
                          Pronto para falar com clareza, segurança e presença
                        </p>
                        <div className="mt-4 h-px w-12 bg-primary/30" />
                        <p className="mt-4 text-xs xl:text-sm text-muted-foreground leading-relaxed">
                          Em público e nas redes, com autoridade e consistência.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /DESKTOP */}
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
/* Components + Icons        */
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
  className = "",
  align = "left",
  bottom = false,
}: {
  index: string;
  title: string;
  subtitle: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  align?: "left" | "right";
  bottom?: boolean;
}) {
  const isRight = align === "right";

  return (
    <div
      className={[
        "group relative overflow-hidden",
        "bg-gradient-to-br from-background/65 to-card/40 backdrop-blur-md",
        "border border-primary/18",
        "shadow-[0_0_0_1px_rgba(212,175,55,0.06),0_18px_45px_rgba(0,0,0,0.60)]",
        "transition duration-300",
        "hover:border-primary/30 hover:shadow-[0_0_0_1px_rgba(212,175,55,0.10),0_22px_60px_rgba(0,0,0,0.70)]",
        className || "rounded-2xl",
      ].join(" ")}
    >
      {/* premium highlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute -inset-10 opacity-25 bg-[conic-gradient(from_180deg,rgba(212,175,55,0.22),transparent_35%,rgba(212,175,55,0.12))] blur-2xl" />

      <div
        className={[
          "relative h-full p-6 sm:p-8 flex flex-col",
          isRight ? "items-end text-right" : "items-start text-left",
          bottom ? "justify-end" : "justify-start",
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
          <h3 className="font-display text-lg sm:text-2xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="mt-6 h-px w-10 bg-primary/20" />
      </div>
    </div>
  );
}

/* ---- Minimal premium inline icons (monochrome gold) ---- */

function IconUnlock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 11V8a5 5 0 0 1 9.6-2" />
      <rect x="6" y="11" width="12" height="10" rx="2" />
      <path d="M12 15v2" />
    </svg>
  );
}

function IconStructure(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 6h16" />
      <path d="M4 12h10" />
      <path d="M4 18h16" />
      <path d="M16 10l4 2-4 2" />
    </svg>
  );
}

function IconMic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 14a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z" />
      <path d="M19 11a7 7 0 0 1-14 0" />
      <path d="M12 18v3" />
      <path d="M9 21h6" />
    </svg>
  );
}

function IconCrown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 8l4 4 4-6 4 6 4-4v10H4V8z" />
      <path d="M4 18h16" />
    </svg>
  );
}
