import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const features = [
  "Linguagem simples e direta",
  "Passo a passo detalhado",
  "Ideal para iniciantes e experientes",
  "Receitas testadas e aprovadas",
  "Valoriza a culinária moçambicana",
  "Sem equipamentos caros"
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Diferenciais
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              O que torna este e-book{" "}
              <span className="text-primary">especial?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Você não precisa ser chef. Basta vontade de aprender e saborear. 
              Cada receita foi cuidadosamente selecionada para que qualquer pessoa 
              consiga preparar, mesmo sem experiência na cozinha.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Visual Element */}
          <motion.div 
            className="flex-1 w-full max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Card */}
              <div className="bg-card rounded-3xl p-8 shadow-elevated border border-border/50">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                  <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center">
                    <span className="text-3xl">📖</span>
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground">
                      E-book Digital
                    </h4>
                    <p className="text-muted-foreground">Acesso imediato</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Formato</span>
                    <span className="font-semibold text-foreground">PDF Digital</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Receitas</span>
                    <span className="font-semibold text-foreground">10+ Receitas</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Dispositivos</span>
                    <span className="font-semibold text-foreground">Todos</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-muted-foreground">Acesso</span>
                    <span className="font-semibold text-primary">Vitalício</span>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-card font-bold"
                animate={{ rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ✨ Garantia de Qualidade
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
