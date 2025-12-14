import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, BookOpen, ChefHat } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-semibold">E-book Digital</span>
            </motion.div>
            
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Top 10 Receitas{" "}
              <span className="text-primary">Típicas de Moçambique</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Descubra os sabores autênticos da culinária moçambicana sem sair de casa. 
              Receitas tradicionais explicadas passo a passo, de forma simples e prática.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
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
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Compra Segura</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* E-book Cover */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl transform scale-90" />
              
              {/* Book shadow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-foreground/20 blur-2xl rounded-full" />
              
              {/* Book */}
              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src={ebookCover} 
                  alt="E-book Top 10 Receitas Típicas de Moçambique"
                  className="w-72 md:w-80 lg:w-96 rounded-2xl shadow-elevated hover:shadow-glow transition-shadow duration-500"
                />
                
                {/* Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-card"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  PDF Digital
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
