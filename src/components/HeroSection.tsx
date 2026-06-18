import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, BookOpen, ChefHat } from "lucide-react";
import ebookCoverAsset from "@/assets/ebook-cover-new.png.asset.json";
const ebookCover = ebookCoverAsset.url;

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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-bold uppercase tracking-wider mb-4">
                <span className="text-lg">🔥</span> Mais de 200 Receitas
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                O Maior E-book de{" "}
                <span className="text-primary">Receitas Típicas de Moçambique</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Mais de <span className="font-bold text-foreground">200 receitas autênticas</span> da culinária moçambicana, todas explicadas passo a passo. 
              Do café da manhã ao jantar — doces, salgados, sopas e pratos tradicionais para impressionar a família toda.
            </motion.p>
            
            <motion.div
              className="mb-6 flex items-baseline gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <span className="text-sm text-muted-foreground line-through">259 MT</span>
              <span className="font-display text-4xl md:text-5xl font-extrabold text-primary">
                179 <span className="text-2xl md:text-3xl align-top">MT</span>
              </span>
              <span className="px-2 py-1 rounded-md bg-accent/15 text-accent text-xs font-bold uppercase tracking-wide">
                Oferta
              </span>
            </motion.div>

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
    href="https://www.ensinapay.com/checkout/53c98b9a-c4c5-44c5-a51b-9aa0076b6f7b"
    target="_blank"
    rel="noopener noreferrer"
  >
    <ShoppingCart className="w-5 h-5" />
    Comprar agora
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
                  alt="E-book com 200+ Receitas Típicas de Moçambique"
                  className="w-72 md:w-80 lg:w-96 rounded-2xl shadow-elevated hover:shadow-glow transition-shadow duration-500"
                />
                
                {/* Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-card"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  200+ Receitas
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
