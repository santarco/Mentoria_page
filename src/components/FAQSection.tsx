import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Preciso ter experiência prévia em oratória ou palestras?",
    a: "Não. A Maestria Speakers foi criada exatamente para quem trava ao falar, nunca palestrou ou sente dificuldade em se expressar com clareza. Você aprende do zero, com método prático, vivência real e correções ao vivo — não com teoria abstrata.",
  },
  {
    q: "O que exatamente eu vou aprender na Maestria Speakers?",
    a: (
      <>
        <p className="mb-3">Você vai dominar os pilares da oratória aplicada à vida real, incluindo:</p>
        <ul className="space-y-2 ml-4">
          <li>• Estrutura de fala clara e lógica</li>
          <li>• Organização de ideias para não se perder ao falar</li>
          <li>• Presença de orador e postura de autoridade</li>
          <li>• Como sustentar atenção e ser ouvido até o final</li>
        </ul>
        <p className="mt-3">Tudo isso falando de verdade, com prática, exposição e ajustes em tempo real.</p>
      </>
    ),
  },
  {
    q: "Como funciona o evento? É online ou presencial?",
    a: (
      <>
        <p className="mb-3">A Maestria Speakers é 100% presencial, nos dias 27 e 28 de fevereiro de 2026, em São José do Rio Preto – SP.</p>
        <p>A transformação acontece porque você está presente. As dinâmicas, práticas e exposições não funcionam online — por isso, a presença é indispensável.</p>
      </>
    ),
  },
  {
    q: "Quais são as opções de pagamento?",
    a: (
      <>
        <p className="mb-3">Você pode:</p>
        <ul className="space-y-2 ml-4">
          <li>• Parcelar em até 12x no cartão de crédito, ou</li>
          <li>• Pagar à vista no PIX, com desconto</li>
        </ul>
        <p className="mt-3">Aceitamos todas as principais bandeiras.</p>
      </>
    ),
  },
  {
    q: "Terei suporte durante e depois da formação?",
    a: (
      <>
        <p className="mb-3">Sim. Além da experiência presencial, você terá acesso à:</p>
        <ul className="space-y-2 ml-4">
          <li>• Área de Membros Exclusiva, com conteúdos complementares</li>
          <li>• Comunidade de Oradores, para troca, suporte e continuidade</li>
        </ul>
        <p className="mt-3">A formação não termina quando o evento acaba.</p>
      </>
    ),
  },
  {
    q: "Como funciona a Garantia Incondicional?",
    a: (
      <>
        <p className="mb-3">Você participa do primeiro dia completo da Maestria Speakers. Se por qualquer motivo sentir que a formação não é para você, basta solicitar o reembolso e devolveremos 100% do seu investimento.</p>
        <p className="mb-3">Sem perguntas. Sem burocracia. Sem constrangimento.</p>
        <p>Oferecemos essa garantia porque sabemos o que acontece quando alguém vive a experiência de verdade. 👉 Quem entra no primeiro dia, não quer sair.</p>
      </>
    ),
  },
  {
    q: "Qual a diferença entre o Acesso Essencial e o Acesso Maestro (VIP)?",
    a: (
      <>
        <p className="mb-3"><span className="font-semibold text-foreground">Essencial:</span> Você destrava a comunicação, aprende a estrutura de oratória e sai falando com mais clareza e segurança.</p>
        <p className="mb-3"><span className="font-semibold text-foreground">Maestro (VIP):</span> Além de tudo do Essencial, você recebe:</p>
        <ul className="space-y-2 ml-4 mb-3">
          <li>• Mapeamento comportamental do orador</li>
          <li>• Reprogramação avançada de bloqueios</li>
          <li>• Mentoria de posicionamento como autoridade</li>
          <li>• Palestra estruturada pronta</li>
          <li>• Gravação do evento por 180 dias</li>
          <li>• Prioridade nas práticas</li>
          <li>• Kit VIP e comunidade exclusiva</li>
        </ul>
        <p>É para quem quer acelerar, se diferenciar e se posicionar como referência.</p>
      </>
    ),
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
            <p className="text-muted-foreground mb-3">Ainda tem dúvidas? Nossa equipe está pronta para te ajudar.</p>
            <a href="#" className="text-primary font-body font-semibold hover:underline inline-block mb-6">
              👉 FALAR COM SUPORTE
            </a>
            <div>
              <a
                href="#inscricao"
                className="inline-block bg-gradient-gold text-primary-foreground font-body font-bold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                QUERO GARANTIR MINHA VAGA AGORA!
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
