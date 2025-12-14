import { motion } from "framer-motion";
import { Users, Heart, Briefcase, GraduationCap, Home, Globe } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Quem quer aprender a cozinhar",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Home,
    title: "Quem deseja variar o cardápio",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: Users,
    title: "Famílias que gostam de comida caseira",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Briefcase,
    title: "Empreendedores da alimentação",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: Heart,
    title: "Amantes da culinária moçambicana",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Globe,
    title: "Quem quer preservar tradições",
    color: "bg-accent/10 text-accent"
  }
];

const AudienceSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            👩🏽‍🍳 Público-Alvo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Para quem é este e-book?
          </h2>
          <p className="text-lg text-muted-foreground">
            Este e-book é ideal para todos que desejam aprender, 
            compartilhar e valorizar a rica culinária moçambicana.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl ${audience.color} flex items-center justify-center flex-shrink-0`}>
                <audience.icon className="w-6 h-6" />
              </div>
              <span className="font-medium text-foreground">{audience.title}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Quote */}
        <motion.div 
          className="mt-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <blockquote className="relative">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-display">"</span>
            <p className="text-xl md:text-2xl text-foreground font-display italic leading-relaxed">
              Porque comida é identidade. Cada prato carrega história, memória e afeto.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default AudienceSection;
