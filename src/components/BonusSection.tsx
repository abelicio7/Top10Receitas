import { motion } from "framer-motion";
import { Gift, Check, Flame } from "lucide-react";
import sopaDetox from "@/assets/sopa-detox.jpg";

const benefits = [
  "Receita exclusiva para acelerar o emagrecimento",
  "Ingredientes simples e acessíveis",
  "Ajuda a desinchar e desintoxicar o corpo",
  "Saborosa, leve e fácil de preparar",
];

const BonusSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            <Gift className="w-4 h-4" />
            Bónus Exclusivo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Receba GRÁTIS a <span className="text-primary">Sopa Detox</span> para Emagrecimento
          </h2>
          <p className="text-lg text-muted-foreground">
            Como brinde especial, você ganha a receita da nossa Sopa Detox — perfeita para emagrecer com saúde e sabor.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto bg-background rounded-3xl shadow-elevated border border-border/50 overflow-hidden grid md:grid-cols-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-64 md:h-auto">
            <img
              src={sopaDetox}
              alt="Sopa Detox para Emagrecimento - Receita bónus do e-book"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-card flex items-center gap-2">
              <Flame className="w-4 h-4" />
              BÓNUS GRÁTIS
            </div>
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sopa Detox para Emagrecimento
            </h3>
            <p className="text-muted-foreground mb-6">
              Uma receita poderosa, leve e nutritiva que ajuda a desinchar, desintoxicar o organismo e acelerar a perda de peso de forma natural.
            </p>

            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-foreground font-medium">
                🎁 Incluído gratuitamente na compra do e-book — sem custo adicional!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
