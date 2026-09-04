import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface LinkCardProps {
  href: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  type: "whatsapp" | "instagram" | "google";
  delay?: number;
}

export function LinkCard({ href, title, subtitle, icon, type, delay = 0 }: LinkCardProps) {
  
  // Determine gradients based on type
  let gradientWrapper = "";
  let iconBg = "";
  let glowShadow = "";
  let titleColor = "";
  let subColor = "";

  if (type === "whatsapp") {
    gradientWrapper = "from-green-neon to-cyan-neon";
    iconBg = "bg-green-neon text-black";
    glowShadow = "shadow-[0_0_20px_rgba(0,255,135,0.3)] hover:shadow-[0_0_35px_rgba(0,255,135,0.6)]";
    titleColor = "text-white";
    subColor = "text-gray-300";
  } else if (type === "instagram") {
    gradientWrapper = "from-purple-neon via-pink-500 to-cyan-neon";
    iconBg = "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white";
    glowShadow = "shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:shadow-[0_0_35px_rgba(255,0,128,0.6)]";
    titleColor = "text-white";
    subColor = "text-gray-300";
  } else if (type === "google") {
    gradientWrapper = "from-blue-500 to-cyan-neon";
    iconBg = "bg-white text-blue-600 p-1";
    glowShadow = "shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_35px_rgba(0,242,254,0.6)]";
    titleColor = "text-white";
    subColor = "text-gray-300";
  }

  const playHoverSound = () => {
    // Toca um efeito sonoro curto ao passar o mouse. 
    // Você precisa colocar um arquivo "hover.mp3" na pasta "public" do projeto.
    const audio = new Audio("/hover.mp3");
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={playHoverSound}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex rounded-2xl overflow-hidden group p-[2px] transition-all duration-300",
        `bg-gradient-to-r ${gradientWrapper}`,
        glowShadow
      )}
    >
      {/* Inner dark container */}
      <div className="flex items-center w-full bg-[#0B0F17] rounded-[14px] p-4">
        {/* Icon Container */}
        <div
          className={cn(
            "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg",
            iconBg
          )}
        >
          {icon}
        </div>

        {/* Text Container */}
        <div className="flex-1">
          <h3 className={cn("font-bold text-lg", titleColor)}>
            {title}
          </h3>
          {subtitle && (
            <p className={cn("text-[10px] leading-tight mt-1 font-medium whitespace-pre-wrap break-all", subColor)}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.a>
  );
}
