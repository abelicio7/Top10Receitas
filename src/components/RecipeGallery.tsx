import { motion } from "framer-motion";
import { Lock, Eye } from "lucide-react";
import img1 from "@/assets/recipes/IMG_7469.png.asset.json";
import img2 from "@/assets/recipes/IMG_7470.png.asset.json";
import img3 from "@/assets/recipes/IMG_7471.png.asset.json";
import img4 from "@/assets/recipes/IMG_7472.png.asset.json";
import img5 from "@/assets/recipes/IMG_7473.png.asset.json";
import img6 from "@/assets/recipes/IMG_7474.png.asset.json";
import img7 from "@/assets/recipes/IMG_7475.png.asset.json";
import img8 from "@/assets/recipes/IMG_7476.png.asset.json";
import img9 from "@/assets/recipes/IMG_7478.png.asset.json";
import img10 from "@/assets/recipes/IMG_7479.png.asset.json";

const recipes = [
  { src: img1.url, name: "Pato à Zambeziana", tag: "Refeição" },
  { src: img2.url, name: "Esparguete com Sardinha", tag: "Refeição" },
  { src: img3.url, name: "Wrap de Frango Moçambicano", tag: "Lanche" },
  { src: img4.url, name: "Peixe Grelhado à Moçambicana", tag: "Refeição" },
  { src: img5.url, name: "Caldeirada de Chouriço", tag: "Refeição" },
  { src: img6.url, name: "Bolo de Coco Tradicional", tag: "Sobremesa" },
  { src: img7.url, name: "Pastéis de Massa Folhada", tag: "Lanche" },
  { src: img8.url, name: "Chamuças & Rissóis", tag: "Lanche" },
  { src: img9.url, name: "Mesa de Salgadinhos", tag: "Lanches" },
  { src: img10.url, name: "Charlotte de Frutas", tag: "Sobremesa" },
];

const RecipeGallery = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Eye className="w-4 h-4" /> Espreite o que vai receber
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Receitas que vão fazer <span className="text-primary">água na boca</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pratos autênticos, com sabor de casa moçambicana — todos com passo-a-passo simples no e-book.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {recipes.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={r.src}
                alt={r.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] font-bold uppercase px-2 py-1 rounded-full">
                {r.tag}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-semibold text-sm leading-tight">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar below gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-card border border-border/50 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <div className="text-center md:text-left">
              <div className="font-display text-5xl md:text-6xl font-extrabold text-primary leading-none">
                200+
              </div>
              <div className="font-semibold text-foreground mt-1">Receitas no total</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">Refeições principais</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-muted-foreground">Sobremesas & doces</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/70" />
                <span className="text-muted-foreground">Lanches & salgados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent/70" />
                <span className="text-muted-foreground">Sopas & entradas</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-muted-foreground flex items-center justify-center gap-2"
        >
          <Lock className="w-4 h-4" />
          Receitas completas com ingredientes e modo de preparo — todas no e-book.
        </motion.p>
      </div>
    </section>
  );
};

export default RecipeGallery;
