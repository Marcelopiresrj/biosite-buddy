import React, { useState, useEffect } from "react";

type MediaItem = {
  type: "image" | "video";
  url: string;
};

export function BackgroundGrid() {
  const mediaItems: MediaItem[] = [
    { type: "image", url: "/ps5.jpg" },
    { type: "image", url: "/xbox-s.jpg" },
    { type: "image", url: "/xbox-x.jpg" },
    { type: "video", url: "https://videos.pexels.com/video-files/3205307/3205307-uhd_2560_1440_25fps.mp4" },
    { type: "video", url: "https://videos.pexels.com/video-files/5225128/5225128-hd_1920_1080_30fps.mp4" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    }, 6000); // Troca a imagem/vídeo a cada 6 segundos
    return () => clearInterval(timer);
  }, [mediaItems.length]);

  return (
    <div className="fixed inset-0 z-0 bg-[#05080f] overflow-hidden">
      
      {/* 1. Imagens e Vídeos no Fundo */}
      {mediaItems.map((media, index) => {
        const isActive = index === currentIndex;
        return (
          <div 
            key={index} 
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${isActive ? 'opacity-50 scale-105 z-0' : 'opacity-0 scale-100 -z-10'}`}
          >
            {media.type === 'video' ? (
              <video 
                src={media.url} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover filter grayscale-[30%] blur-[2px]"
              />
            ) : (
              <img 
                src={media.url} 
                alt="Console Background" 
                className="w-full h-full object-cover filter grayscale-[30%] blur-[2px]"
                draggable="false"
              />
            )}
          </div>
        );
      })}

      {/* 2. Hi-Tech Animated Grid Pattern */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 242, 254, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 242, 254, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
        }}
      ></div>

      {/* 3. Camadas de Escurecimento por Cima das Imagens */}
      {/* Gradiente sutil para manter a leitura do texto com bordas mais escuras */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#05080f]/40 via-[#05080f]/70 to-[#05080f] pointer-events-none"></div>
      
    </div>
  );
}
