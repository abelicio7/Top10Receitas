import { motion } from "framer-motion";
import { ThumbsUp, Heart, MessageCircle } from "lucide-react";

const comments = [
  {
    name: "Márcia Nhantumbo",
    avatar: "MN",
    comment: "Paguei via M-Pesa e recebi na hora no WhatsApp! Já fiz a matapa e ficou top demais 🔥",
    likes: 24,
    hearts: 8,
    time: "há 2 dias"
  },
  {
    name: "Fernando Sitoe",
    avatar: "FS",
    comment: "Confesso que tinha medo de ser burla, mas arrisquei. Recebi o PDF em menos de 5 minutos! Super recomendo 👏",
    likes: 45,
    hearts: 12,
    time: "há 3 dias"
  },
  {
    name: "Ana Bela Cossa",
    avatar: "AC",
    comment: "Usei e-Mola e correu tudo bem. As receitas são muito bem explicadas, até quem nunca cozinhou consegue fazer!",
    likes: 31,
    hearts: 15,
    time: "há 1 semana"
  },
  {
    name: "João Macuácua",
    avatar: "JM",
    comment: "Depois de pagar, recebi o link para mandar mensagem no WhatsApp mesmo com dúvidas, eles responderam rápido,  recebi logo o acesso as receitas. Muito profissional!",
    likes: 38,
    hearts: 9,
    time: "há 4 dias"
  },
  {
    name: "Celina Mondlane",
    avatar: "CM",
    comment: "Comprei pra minha mãe que mora na Beira. Ela recebeu tudo certinho no celular dela. As receitas são mesmo as nossas de Moçambique! ❤️",
    likes: 52,
    hearts: 21,
    time: "há 5 dias"
  },
  {
    name: "Ricardo Tembe",
    avatar: "RT",
    comment: "Pagamento M-Pesa fácil e rápido. O PDF veio completo com fotos das receitas. Vale cada metical!",
    likes: 29,
    hearts: 7,
    time: "há 1 semana"
  },
  {
    name: "Esperança Mabjaia",
    avatar: "EM",
    comment: "Eu duvidava muito dessas coisas online, mas minha vizinha comprou e mostrou-me. Comprei também e não me arrependo! Entrega imediata via WhatsApp.",
    likes: 41,
    hearts: 18,
    time: "há 6 dias"
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            💬 Prova Social
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            O que dizem depois de comprar
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Pessoas reais, experiências reais. Veja os comentários de quem já adquiriu o e-book.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {comments.map((comment, index) => (
            <motion.div
              key={comment.name}
              className="bg-card rounded-xl p-4 shadow-sm border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">{comment.avatar}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground text-sm">{comment.name}</span>
                    <span className="text-xs text-muted-foreground">· {comment.time}</span>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{comment.comment}</p>
                  
                  {/* Reactions */}
                  <div className="flex items-center gap-4 mt-3 pt-2 border-t border-border/30">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <div className="flex -space-x-1">
                        <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                          <ThumbsUp className="w-3 h-3 text-white" />
                        </span>
                        <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                          <Heart className="w-3 h-3 text-white" />
                        </span>
                      </div>
                      <span className="text-xs">{comment.likes + comment.hearts}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">Responder</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
