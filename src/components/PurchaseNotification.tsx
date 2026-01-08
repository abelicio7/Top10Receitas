import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";

const mozambicanNames = [
  "Maria Matola",
  "Ana Sitoe",
  "Graça Mondlane",
  "Fátima Nguenha",
  "Teresa Machava",
  "Rosa Cossa",
  "Helena Tembe",
  "Joana Magaia",
  "Lurdes Muchanga",
  "Célia Mabjaia",
  "Sandra Nhaca",
  "Beatriz Langa",
  "Marta Cuamba",
  "Esperança Bila",
  "Dulce Macamo",
  "Amélia Chissano",
  "Filomena Nuvunga",
  "Leonor Massinga",
  "Carla Mazive",
  "Inês Tamele"
];

const cities = [
  "Maputo",
  "Matola",
  "Beira",
  "Nampula",
  "Quelimane",
  "Tete",
  "Xai-Xai",
  "Inhambane",
  "Pemba",
  "Chimoio"
];

const timeAgo = [
  "agora mesmo",
  "há 2 minutos",
  "há 5 minutos",
  "há 8 minutos",
  "há 12 minutos"
];

const PurchaseNotification = () => {
  const [notification, setNotification] = useState<{
    name: string;
    city: string;
    time: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const getRandomItem = <T,>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const showNotification = () => {
    const newNotification = {
      name: getRandomItem(mozambicanNames),
      city: getRandomItem(cities),
      time: getRandomItem(timeAgo)
    };
    setNotification(newNotification);
    setIsVisible(true);

    // Hide after 4 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  };

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 5000);

    // Then show every 15-25 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 10000) + 15000;
      setTimeout(showNotification, randomDelay % 15000);
    }, 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && notification && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-4 left-4 z-50 max-w-xs"
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">
                {notification.name}
              </p>
              <p className="text-sm text-gray-600">
                acabou de comprar o e-book
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {notification.city} • {notification.time}
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PurchaseNotification;
