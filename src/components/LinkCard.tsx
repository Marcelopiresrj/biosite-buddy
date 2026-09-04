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
    gradientWrapper = "from-[#25d366] to-[#128c7e]";
    iconBg = "bg-transparent";
    glowShadow = "shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)]";
    titleColor = "text-white";
    subColor = "text-gray-300";
  } else if (type === "instagram") {
    gradientWrapper = "from-[#f09433] via-[#dc2743] to-[#bc1888]";
    iconBg = "bg-transparent";
    glowShadow = "shadow-[0_0_20px_rgba(220,39,67,0.3)] hover:shadow-[0_0_35px_rgba(220,39,67,0.6)]";
    titleColor = "text-white";
    subColor = "text-gray-300";
  } else if (type === "google") {
    gradientWrapper = "from-[#4285F4] via-[#EA4335] to-[#FBBC05]";
    iconBg = "bg-transparent";
    glowShadow = "shadow-[0_0_20px_rgba(66,133,244,0.3)] hover:shadow-[0_0_35px_rgba(66,133,244,0.6)]";
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
