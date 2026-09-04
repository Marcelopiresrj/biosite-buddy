import { MessageCircle, Star, Music, Music2 } from "lucide-react";
import { ProfileHeader } from "./components/ProfileHeader";
import { SocialGallery } from "./components/SocialGallery";
import { LinkCard } from "./components/LinkCard";
import { Footer } from "./components/Footer";
import { BackgroundGrid } from "./components/BackgroundGrid";
import { useState, useRef, useEffect } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Tenta tocar a música na primeira interação do usuário (clique)
  useEffect(() => {
    const handleInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.log("Áudio bloqueado pelo navegador:", err));
      }
    };
    
    document.addEventListener("click", handleInteraction, { once: true });
    return () => document.removeEventListener("click", handleInteraction);
  }, []);

  // Pausa a música ambiente se o usuário clicar no vídeo do Instagram (iframe)
  useEffect(() => {
    const handleWindowBlur = () => {
      if (document.activeElement && document.activeElement.tagName.toLowerCase() === 'iframe') {
        if (audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener('blur', handleWindowBlur);
    return () => window.removeEventListener('blur', handleWindowBlur);
  }, []);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen relative font-sans text-white bg-bg-dark overflow-hidden flex flex-col items-center justify-center">
      
      {/* O arquivo music.mp3 deve ser colocado na pasta public/ */}
      <audio ref={audioRef} src="/music.mp3" loop />

      <BackgroundGrid />

      {/* Botão flutuante para controlar a música */}
      <button 
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-black/50 backdrop-blur-md border border-white/20 p-3 rounded-full shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:bg-white/10 transition-colors"
      >
        {isPlaying ? (
          <Music className="w-5 h-5 text-cyan-neon animate-pulse" />
        ) : (
          <Music2 className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-[420px] mx-auto min-h-screen py-24 px-4 flex flex-col items-center justify-center">
        <div className="bg-[#101520]/95 backdrop-blur-xl rounded-[24px] p-6 pt-0 shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5 w-full flex flex-col items-center">
          
          <ProfileHeader 
            name="Hi-Tech Eletrônicos"
            username="hitecheletronicos"
            bio="Sua referência em tecnologia e smartphones premium 🚀✨"
            avatarUrl="/logo.png"
          />

          <SocialGallery />

          <div className="w-full space-y-4 mt-6 mb-8 flex-1">
            <LinkCard 
              href="https://wa.me/5522998706841"
              title="Compre pelo WhatsApp"
              subtitle="https://wa.me/5522998706841?text=Ol%C3%A1%2C%20vim%20pelo%20bio%20e%20gostaria%20de%20informa%C3%A7%C3%B5es!
(22) 99870-6841"
              icon={
                <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
                  <path d="M12.031 0c6.594 0 11.969 5.375 11.969 11.969 0 2.625-.844 5.063-2.313 7.031l1.532 5.563-5.688-1.5c-1.719 1.125-3.813 1.781-6.031 1.781-6.594 0-11.969-5.375-11.969-11.969 0-6.594 5.375-11.969 11.969-11.969z" fill="#25d366"/>
                  <path d="M18.844 14.875c-.344-.156-1.969-.969-2.281-1.063-.281-.125-.5-.156-.719.156-.187.313-.875 1.063-1.063 1.281-.187.219-.406.25-.719.094-.313-.156-1.406-.531-2.688-1.688-.969-.875-1.625-1.938-1.813-2.25-.187-.313-.031-.5.125-.656.125-.125.313-.344.469-.531.156-.156.187-.281.281-.469.094-.187.063-.344-.031-.5-.063-.156-.719-1.719-.969-2.344-.25-.625-.5-.531-.719-.531-.187 0-.406-.031-.625-.031-.219 0-.594.094-.906.406-.313.313-1.188 1.156-1.188 2.813 0 1.656 1.219 3.25 1.375 3.5.156.219 2.406 3.656 5.813 5.125 2.125.906 3.031 1 4.125.844 1.188-.187 2.375-1.156 2.688-2.219.313-1.063.313-1.969.219-2.156-.094-.187-.313-.281-.625-.438z" fill="#fff"/>
                </svg>
              }
              type="whatsapp"
              delay={0.5}
            />

            <LinkCard 
              href="https://www.instagram.com/hitecheletronicos/"
              title="Acompanhe no Instagram"
              subtitle="@hitecheletronicos
https://www.instagram.com/hitecheletronicos/"
              icon={
                <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433"/>
                      <stop offset="25%" stopColor="#e6683c"/>
                      <stop offset="50%" stopColor="#dc2743"/>
                      <stop offset="75%" stopColor="#cc2366"/>
                      <stop offset="100%" stopColor="#bc1888"/>
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="24" height="24" rx="6" ry="6" fill="url(#ig-grad)"/>
                  <path d="M12 5.5c2.115 0 2.366.008 3.2.046.775.035 1.196.166 1.478.276.375.145.642.318.925.602.284.283.457.55.602.924.11.283.24.704.276 1.478.038.835.046 1.086.046 3.201s-.008 2.366-.046 3.201c-.035.775-.166 1.196-.276 1.478-.145.375-.318.642-.602.925-.283.284-.55.457-.925.602-.282.11-.703.24-1.478.276-.834.038-1.085.046-3.199.046s-2.366-.008-3.201-.046c-.775-.036-1.196-.166-1.478-.276-.375-.145-.642-.318-.925-.602-.284-.283-.457-.55-.602-.925-.11-.282-.24-.703-.276-1.478-.038-.834-.046-1.085-.046-3.199s.008-2.366.046-3.2c.036-.775.166-1.196.276-1.478.145-.375.318-.642.602-.924.283-.284.55-.457.925-.602.282-.11.703-.24 1.478-.276.835-.038 1.086-.046 3.2-.046zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.373A2.873 2.873 0 1112 9.127a2.873 2.873 0 010 5.746zm2.884-5.698a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0z" fill="#ffffff"/>
                </svg>
              }
              type="instagram"
              delay={0.6}
            />

            <LinkCard 
              href="https://search.google.com/local/writereview?placeid=ChIJpQHbaLq0lwARw4-9Eg-uzbY"
              title="Avalie Nossa Loja no Google"
              subtitle="https://search.google.com/local/writereview?placeid=ChIJpQHbaLq0lwARw4-9Eg-uzbY
⭐⭐⭐⭐⭐"
              icon={
                <svg viewBox="0 0 24 24" width="32" height="32" className="fill-current">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              }
              type="google"
              delay={0.7}
            />
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
