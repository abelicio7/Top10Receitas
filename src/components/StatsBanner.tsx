import { motion } from "framer-motion";
import { BookOpen, ChefHat, Star, Clock } from "lucide-react";

const stats = [
  {
    number: "200+",
    label: "Receitas Típicas",
    sublabel: "Doces, salgados e pratos tradicionais",
    icon: BookOpen,
  },
  {
    number: "50+",
    label: "Sobremesas",
    sublabel: "Bolos, doces e charlottes",
    icon: Star,
  },
  {
    number: "80+
",  // 80+
    label: "Refeições",
    sublabel: "Carnes, peixes e vegetarianos",
    icon: ChefHat,
  },
  {
    number: "24h",
    label: "Acesso Imediato",
    sublabel: "Receba no WhatsApp na hora",
    icon: Clock,
  },
];

const StatsBanner = () => {
  return (
    <section className="py-12 lg:py-16 bg-background relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Números que <span className="text-primary">falam por si</span>
          </h2>
          <p className="text-muted-foreground">
            O maior e-book de receitas moçambicanas que você vai encontrar
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-6 border border-border/50 text-center group hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-display text-4xl md:text-5xl font-extrabold text-primary leading-none mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
