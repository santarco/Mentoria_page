import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const CTA_LINK = "#pricing";

const HeroSection = () => {
  const [vagas, setVagas] = useState(70);

  useEffect(() => {
    if (vagas <= 47) return;
    const timeout = setTimeout(() => {
      setVagas((v) => v - 1);
    }, 80 + Math.random() * 120);
    return () => clearTimeout(timeout);
  }, [vagas]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Palco do evento Maestria Speakers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-24">
        {/* Urgency bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <span className="text-sm font-body tracking-widest uppercase text-primary border border-primary/30 rounded-full px-5 py-2">
            ⚠ Vagas disponíveis: <s className="text-muted-foreground">70</s> … <span className="font-bold tabular-nums">{vagas}</span>
          </span>
        </motion.div>

        {/* Date & Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          27 e 28 de Fevereiro de 2026 &bull; São José do Rio Preto – SP
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
        >
          Domine a Oratória em 2 Dias e Transforme sua Comunicação em{" "}
          <span className="text-gradient-gold">Autoridade, Contratos e Oportunidades</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-body text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Saia preparado para falar em público e nas redes sociais com clareza, segurança e presença,
          mesmo que hoje você trave, sue frio na hora de falar ou tenha sido ignorado a vida toda.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a href={CTA_LINK} className="btn-gold text-base sm:text-lg animate-pulse-gold">
            QUERO GARANTIR MINHA VAGA!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
