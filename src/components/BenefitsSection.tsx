import { motion } from "framer-motion";
import { 
  UtensilsCrossed, 
  Cake, 
  Croissant, 
  Pizza, 
  Soup,
  Cookie
} from "lucide-react";

const benefits = [
  {
    icon: UtensilsCrossed,
    title: "Pratos Tradicionais",
    description: "Receitas autênticas que fazem parte da história moçambicana"
  },
  {
    icon: Cake,
    title: "Doces Típicos",
    description: "Sobremesas irresistíveis da nossa culinária"
  },
  {
    icon: Croissant,
    title: "Pães Caseiros",
    description: "Pães tradicionais feitos em casa"
  },
  {
    icon: Cookie,
    title: "Bolos Tradicionais",
    description: "Receitas de família passadas por gerações"
  },
  {
    icon: Pizza,
    title: "Pizzas Moçambicanas",
    description: "Pizzas com um toque único africano"
  },
  {
    icon: Soup,
    title: "Refeições & Lanches",
    description: "Do café da manhã ao jantar"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            🍽️ Conteúdo do E-book
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que você vai encontrar?
          </h2>
          <p className="text-lg text-muted-foreground">
            Um guia completo com receitas doces e salgadas, pensado para o dia a dia, 
            usando ingredientes acessíveis e métodos fáceis.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
