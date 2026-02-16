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
  normal: "https://sun.eduzz.com/797735219E",
  vip: "https://sun.eduzz.com/69KAJ2V80O",
} as const;

/**
 * Pixel seguro:
 * Nunca quebra o fluxo de venda
 */
const trackInitiateCheckoutSafe = async (
  value: number,
  currency: string
) => {
  try {
    if (typeof window === "undefined") return;

    // @ts-ignore
    if (typeof window.fbq === "function") {
      // @ts-ignore
      window.fbq("track", "InitiateCheckout", { value, currency });
    }
  } catch (e) {
    console.warn("Pixel tracking failed:", e);
  }
};

const LeadCaptureModal = ({
  isOpen,
  onClose,
  option,
}: LeadCaptureModalProps) => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendLeadToBackend = async (
    payload: Record<string, unknown>
  ) => {
    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/MlgLW6t9H3C4G9wRD6RI/webhook-trigger/wVQLMVeUaLLbCCPB93Gg",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
    } catch (err) {
      console.error("Erro ao enviar lead:", err);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.telefone) {
      toast({
        title: "Preencha todos os campos",
        description:
          "Por favor, preencha nome, email e telefone.",
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
      await trackInitiateCheckoutSafe(
        meta.pixelValue,
        "BRL"
      );
    } finally {
      const params = new URLSearchParams({
        nome: formData.nome.trim(),
        email: formData.email.trim(),
        cel: formData.telefone.trim(),
        utm_source: "site",
        utm_medium: "modal",
        utm_campaign:
          option === "vip"
            ? "maestro_vip"
            : "maestria_essencial",
        utm_term: "V1",
      });

      window.location.href = `${CHECKOUT_URLS[option]}?${params.toString()}`;
    }
  };

  const closeModal = () => {
    if (!isSubmitting) onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent
        className="
        w-[calc(100%-1.5rem)] max-w-md mx-auto p-0
        max-h-[85svh] overflow-y-auto
        rounded-2xl
        bg-[#070708]
        border border-primary/20
        shadow-[0_0_0_1px_rgba(212,175,55,0.15),0_40px_120px_rgba(0,0,0,0.9)]
        [&>button]:hidden
      "
      >
        {/* Header */}
        <div className="relative px-6 py-6 border-b border-primary/15">
          <button
            onClick={closeModal}
            disabled={isSubmitting}
            className="absolute right-4 top-4 rounded-full p-2 bg-black/40 border border-primary/20 hover:opacity-80 transition"
          >
            <X className="h-4 w-4 text-primary" />
          </button>

          <DialogHeader>
            <div className="flex justify-center">
              <span className="text-xs uppercase tracking-widest text-primary/80">
                {meta.badge}
              </span>
            </div>

            <DialogTitle className="mt-3 text-xl font-display text-center">
              Confirme seus dados
            </DialogTitle>

            <p className="text-sm text-muted-foreground text-center mt-2">
              Você será direcionado ao checkout seguro.
            </p>
          </DialogHeader>

          <div className="mt-6 border border-primary/15 rounded-xl p-4 bg-black/30">
            <p className="text-sm text-primary font-semibold">
              {meta.title}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {meta.subtitle}
            </p>

            <div className="mt-3 text-right">
              <p className="text-primary font-semibold">
                {meta.priceLine}
              </p>
              <p className="text-xs text-muted-foreground">
                {meta.cashLine}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="px-6 py-6 space-y-4"
        >
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full h-12
              bg-gradient-to-r from-[#D4AF37] to-[#b9932f]
              text-black font-bold
              hover:opacity-90
            "
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                Continuar para o pagamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Seus dados estão protegidos.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
