import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import heroDesktop from "@/assets/mjkiul_11zon.webp";
import heroMobile from "@/assets/sadgfasdasa.webp";

const CTA_LINK = "#pricing";

const HeroSection = () => {
  const [vagas, setVagas] = useState(70);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (vagas <= 47) return;
    const timeout = setTimeout(() => setVagas((v) => v - 1), 80 + Math.random() * 120);
    return () => clearTimeout(timeout);
  }, [vagas]);

  const bgAnim = useMemo(() => {
    if (reduceMotion) return {};
    return {
      initial: { scale: 1.06, x: 0, y: 0 },
      animate: { scale: 1.12, x: -10, y: 6 },
      transition: { duration: 18, ease: "easeInOut" as const },
    };
  }, [reduceMotion]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Image (responsive + LCP optimized) */}
        <motion.div
          className="absolute inset-0 brightness-110 contrast-105"
          {...bgAnim}
        >
          <picture>
            {/* Desktop */}
            <source media="(min-width: 768px)" srcSet={heroDesktop} />
            {/* Mobile fallback */}
            <img
              src={heroMobile}
              alt="Palco do evento Maestria Speakers"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </motion.div>

        {/* ✅ Overlays (mais claros e premium) */}
        {/* Base dark wash (reduzido) */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Vignette suave */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,0,0,0.10),rgba(0,0,0,0.55)_75%)]" />

        {/* Gold glow leve */}
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15),transparent_65%)] blur-3xl opacity-70" />
        <div className="absolute -bottom-52 right-[-140px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.10),transparent_60%)] blur-3xl opacity-60" />

        {/* Gradiente inferior sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center py-24 sm:py-28">
          {/* Availability */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center justify-center mb-8"
          >
            <span
              className={[
                "inline-flex items-center gap-2",
                "text-[12px] sm:text-sm font-body tracking-[0.25em] uppercase",
                "text-primary/90",
                "border border-primary/25",
                "bg-black/35 backdrop-blur-md",
                "rounded-full px-5 py-2",
                "shadow-[0_0_0_1px_rgba(212,175,55,0.10),0_18px_50px_rgba(0,0,0,0.45)]",
              ].join(" ")}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/80" />
              Vagas disponíveis:
              <s className="text-muted-foreground/70 tabular-nums">70</s>
              <span className="text-foreground/90">→</span>
              <span className="font-semibold text-primary tabular-nums">
                {vagas}
              </span>
            </span>
          </motion.div>

          {/* Date & Location */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-body text-[11px] sm:text-sm tracking-[0.32em] uppercase text-muted-foreground mb-6"
          >
            27 e 28 de Fevereiro de 2026 &bull; São José do Rio Preto – SP
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.75, ease: "easeOut" }}
            className={[
              "font-display",
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
              "font-bold leading-[1.08] mb-8",
              "[text-shadow:0_10px_30px_rgba(0,0,0,0.65)]",
            ].join(" ")}
          >
            Domine a Oratória em 2 Dias e Transforme sua Comunicação em{" "}
            <span className="text-gradient-gold">
              Autoridade, Contratos e Oportunidades
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7, ease: "easeOut" }}
            className="font-body text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Saia preparado para falar em público e nas redes sociais com clareza,
            segurança e presença, mesmo que hoje você trave, sue frio na hora de
            falar ou tenha sido ignorado a vida toda.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.58, duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href={CTA_LINK}
              className={[
                "btn-gold",
                "text-base sm:text-lg",
                "px-7 sm:px-9",
                "py-3.5 sm:py-4",
                "rounded-lg",
                "shadow-[0_0_0_1px_rgba(212,175,55,0.18),0_24px_80px_rgba(0,0,0,0.65)]",
                reduceMotion ? "" : "animate-pulse-gold",
              ].join(" ")}
            >
              QUERO GARANTIR MINHA VAGA
            </a>

            <p className="text-[11px] sm:text-xs text-muted-foreground/90">
              Pagamento seguro • Confirmação imediata
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
