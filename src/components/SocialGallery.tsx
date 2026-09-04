import { motion } from "framer-motion";

export function SocialGallery() {
  const posts = [
    { 
      id: "DCiO07eNddG", 
    },
    { 
      id: "DCiOOmbtUs-", 
    },
    { 
      id: "CxhCqeBresW", 
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full mt-6 mb-8"
    >
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-lg font-bold text-white tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          Nossos Vídeos
        </h2>
      </div>
      
      {/* Container com scroll horizontal para os vídeos do Instagram */}
      <div className="flex overflow-x-auto gap-4 px-2 snap-x snap-mandatory pb-4 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
        {posts.map((post, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
            className="flex-shrink-0 w-[300px] snap-center rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
          >
            <iframe
              src={`https://www.instagram.com/p/${post.id}/embed`}
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              className="w-full h-[400px]"
            ></iframe>
          </motion.div>
        ))}
      </div>
      
      {/* Indicador de scroll (opcional) */}
      <div className="flex justify-center items-center gap-2 mt-2">
        <div className="text-xs text-gray-400">Deslize para ver mais →</div>
      </div>
    </motion.div>
  );
}
