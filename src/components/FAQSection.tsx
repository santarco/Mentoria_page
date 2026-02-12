import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Preciso ter experiência prévia em oratória ou palestras?",
    a: "Não. A Maestria Speakers foi criada exatamente para quem trava ao falar, nunca palestrou ou sente dificuldade em se expressar com clareza. Você aprende do zero, com método prático e vivência real.",
  },
  {
    q: "O que exatamente eu vou aprender?",
    a: "Estrutura de fala clara e lógica, organização de ideias, presença de orador e postura de autoridade, como sustentar atenção e ser ouvido até o final. Tudo com prática, exposição e ajustes em tempo real.",
  },
  {
    q: "Como funciona o evento? É online ou presencial?",
    a: "A Maestria Speakers é 100% presencial, nos dias 27 e 28 de fevereiro de 2026, em São José do Rio Preto – SP. As dinâmicas e práticas não funcionam online — a presença é indispensável.",
  },
  {
    q: "Quais são as opções de pagamento?",
    a: "Você pode parcelar em até 12x no cartão de crédito, ou pagar à vista no PIX, com desconto. Aceitamos todas as principais bandeiras.",
  },
  {
    q: "Terei suporte durante e depois da formação?",
    a: "Sim. Além da experiência presencial, você terá acesso à Área de Membros Exclusiva com conteúdos complementares e à Comunidade de Oradores para troca e suporte contínuo.",
  },
  {
    q: "Como funciona a Garantia Incondicional?",
    a: "Você participa do primeiro dia completo. Se sentir que não é para você, basta solicitar o reembolso e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia.",
  },
  {
    q: "Qual a diferença entre o Acesso Essencial e o Maestro (VIP)?",
    a: "Essencial: destrava a comunicação e aprende a estrutura de oratória. Maestro (VIP): além de tudo do Essencial, inclui mapeamento comportamental, reprogramação avançada, palestra estruturada pronta, gravação do evento, kit VIP e comunidade exclusiva.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-dark-alt py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
            Dúvidas <span className="text-gradient-gold">Frequentes</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border border-border rounded-lg bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-body text-sm font-medium text-foreground pr-4">{faq.q}</span>
                  <span className="text-primary text-xl shrink-0">{open === i ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Support CTA */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-3">Ainda tem dúvidas?</p>
            <a href="#" className="text-primary font-body font-semibold hover:underline">
              👉 FALAR COM SUPORTE
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
