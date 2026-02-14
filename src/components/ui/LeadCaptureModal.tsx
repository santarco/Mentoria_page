import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, Loader2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export type PricingOption = "normal" | "vip";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  option: PricingOption;
}

const CHECKOUT_URLS = {
  normal: "https://chk.eduzz.com/q5awd7n3",
  vip: "https://chk.eduzz.com/E9OODN1Q9B",
} as const;

/**
 * ✅ SAFE Pixel tracker:
 * - Não depende de arquivo externo (evita ENOENT no build)
 * - Nunca quebra o fluxo (checkout sempre segue)
 * - Usa fbq global se existir
 */
const trackInitiateCheckoutSafe = async (value: number, currency: string) => {
  try {
    if (typeof window === "undefined") return;

    // @ts-expect-error - fbq pode não existir
    const fbq = window.fbq as undefined | ((...args: any[]) => void);

    if (typeof fbq === "function") {
      fbq("track", "InitiateCheckout", { value, currency });
    }
  } catch (e) {
    console.warn("Pixel tracking failed:", e);
  }
};

const LeadCaptureModal = ({ isOpen, onClose, option }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const meta = useMemo(() => {
    if (option === "vip") {
      return {
        badge: "Plano recomendado",
        title: "Acesso Maestro VIP",
        subtitle: "Autoridade, diferenciação e aceleração real",
        priceLine: "12x de R$ 103,11",
        cashLine: "Ou à vista por R$ 997",
        pixelValue: 97,
      };
    }

    return {
      badge: "Acesso essencial",
      title: "Acesso Essencial",
      subtitle: "Para destravar e começar a se posicionar",
      priceLine: "12x de R$ 72,09",
      cashLine: "Ou à vista por R$ 697",
      pixelValue: 37,
    };
  }, [option]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendLeadToBackend = async (payload: Record<string, unknown>) => {
    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/xjAS0N2qV5TNsYN8CTqX/webhook-trigger/17c1545f-45a6-42c9-aa82-5311a6390a10",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        console.error("Error sending lead:", response.statusText);
      }
    } catch (err) {
      console.error("Error sending lead to webhook:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.telefone) {
      toast({
        title: "Preencha todos os campos",
        description: "Por favor, preencha nome, email e telefone.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      nome: formData.nome.trim(),
      email: formData.email.trim(),
      telefone: formData.telefone.trim(),
      opcao: option,
      timestamp: new Date().toISOString(),
      source: "pricing-lead-capture-modal",
    };

    try {
      await sendLeadToBackend(payload);

      // ✅ Pixel (safe)
      await trackInitiateCheckoutSafe(meta.pixelValue, "BRL");
    } finally {
      // ✅ Sempre redireciona com dados do formulário
      const params = new URLSearchParams({
        fn: formData.nome.trim(),
        em: formData.email.trim(),
        ph: formData.telefone.trim(),
      });

      window.location.href = `${CHECKOUT_URLS[option]}?${params.toString()}`;
    }
  };

  const closeModal = () => {
    if (isSubmitting) return; // evita fechar no meio do submit
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent
        className={[
          "w-[calc(100%-1.5rem)] max-w-md mx-auto p-0 overflow-hidden",
          "max-h-[85svh] overflow-y-auto rounded-xl sm:rounded-2xl",
          // Premium black/gold
          "bg-[#070708] text-foreground border border-primary/20",
          "shadow-[0_0_0_1px_rgba(212,175,55,0.10),0_35px_120px_rgba(0,0,0,0.85)]",
          "[&>button]:hidden",
        ].join(" ")}
      >
        {/* Gold ambient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.16),transparent_55%)]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_60%)] blur-2xl opacity-70" />

        {/* Header */}
        <div className="relative px-4 py-4 sm:px-6 sm:py-6 border-b border-primary/15">
          {/* Custom close button */}
          <button
            onClick={closeModal}
            disabled={isSubmitting}
            className={[
              "absolute right-2.5 top-2.5 sm:right-4 sm:top-4 z-10",
              "rounded-full p-1.5",
              "bg-black/40 border border-primary/20",
              "opacity-80 hover:opacity-100 transition",
              "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-0",
              isSubmitting ? "cursor-not-allowed opacity-40" : "",
            ].join(" ")}
          >
            <X className="h-4 w-4 text-primary/90" />
            <span className="sr-only">Fechar</span>
          </button>

          <DialogHeader>
            <div className="flex items-center justify-center">
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-black/30 px-3 py-1 text-[10px] tracking-[0.35em] uppercase text-primary/80">
                {meta.badge}
              </span>
            </div>

            <DialogTitle className="mt-3 font-display text-lg sm:text-2xl text-foreground text-center">
              Confirme seus dados para continuar
            </DialogTitle>

            <p className="font-body text-[11px] sm:text-sm text-muted-foreground text-center mt-1.5">
              Você será direcionado(a) para o checkout em seguida.
            </p>
          </DialogHeader>

          {/* Selected plan */}
          <div className="mt-4 rounded-xl border border-primary/15 bg-black/25 p-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary/70">
              Plano selecionado
            </p>

            <div className="mt-2 flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-base sm:text-lg text-foreground">
                  {meta.title}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {meta.subtitle}
                </p>
              </div>

              <div className="text-right">
                <p className="font-display text-sm sm:text-base text-primary/90">
                  {meta.priceLine}
                </p>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                  {meta.cashLine}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative px-4 py-4 sm:px-6 sm:py-6 space-y-4"
        >
          <div className="space-y-2">
            <Label
              htmlFor="nome"
              className="font-body text-xs sm:text-sm text-foreground"
            >
              Nome
            </Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              autoComplete="name"
              disabled={isSubmitting}
              className={[
                "h-11 sm:h-12",
                "bg-black/30 border-primary/20",
                "focus-visible:ring-primary/35 focus-visible:border-primary/35",
                "placeholder:text-muted-foreground/70",
              ].join(" ")}
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="font-body text-xs sm:text-sm text-foreground"
            >
              E-mail
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              disabled={isSubmitting}
              className={[
                "h-11 sm:h-12",
                "bg-black/30 border-primary/20",
                "focus-visible:ring-primary/35 focus-visible:border-primary/35",
                "placeholder:text-muted-foreground/70",
              ].join(" ")}
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="telefone"
              className="font-body text-xs sm:text-sm text-foreground"
            >
              Telefone
            </Label>
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={handleChange}
              autoComplete="tel"
              disabled={isSubmitting}
              className={[
                "h-11 sm:h-12",
                "bg-black/30 border-primary/20",
                "focus-visible:ring-primary/35 focus-visible:border-primary/35",
                "placeholder:text-muted-foreground/70",
              ].join(" ")}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className={[
              "w-full h-11 sm:h-14 mt-2 group",
              "bg-[linear-gradient(135deg,#D4AF37,rgba(212,175,55,0.72))] text-black",
              "hover:opacity-95",
              "shadow-[0_0_0_1px_rgba(212,175,55,0.25),0_18px_50px_rgba(0,0,0,0.65)]",
              "font-body font-bold tracking-wide",
            ].join(" ")}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                Continuar para o pagamento
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>

          <p className="text-[10px] sm:text-xs text-muted-foreground text-center pt-1">
            Seus dados estão seguros e não serão compartilhados.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
