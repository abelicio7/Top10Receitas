import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Shield, Smartphone, Clock, Download } from "lucide-react";

const benefits = [
  { icon: Download, text: "Acesso imediato ao e-book" },
  { icon: Smartphone, text: "Celular, tablet ou computador" },
  { icon: Clock, text: "Acesso vitalício" },
  { icon: Shield, text: "Compra 100% segura" }
];

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            🚀 Comece Hoje Mesmo
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Leve o melhor da culinária moçambicana{" "}
            <span className="text-primary">para sua cozinha</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Aprenda, cozinhe e surpreenda com sabores únicos. 
            Transforme ingredientes simples em pratos incríveis.
          </p>
          
          {/* CTA Card */}
          <motion.div 
            className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border/50 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Top 10 Receitas Típicas de Moçambique
              </h3>
              <p className="text-muted-foreground">E-book Digital em PDF</p>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-2 text-left">
                  <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Button
  asChild
  variant="hero"
  size="xl"
  className="w-full mb-4"
>
  <a
    href="https://checkout-receitas.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <ShoppingCart className="w-5 h-5" />
    Comprar Agora
  </a>
</Button>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                🔒 Pagamento 100% seguro via M-Pesa e e-Mola
              </p>
              <p className="flex items-center justify-center gap-2">
                📲 Receba suas receitas imediatamente no WhatsApp
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
