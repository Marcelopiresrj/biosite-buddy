import { motion } from "framer-motion";

interface ProfileHeaderProps {
  name: string;
  username: string;
  bio: string;
  avatarUrl?: string;
}

export function ProfileHeader({ name, username, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center space-y-3 pt-0 pb-2 w-full mt-[-60px]"
    >
      {/* Avatar with Neon Gradient Border */}
      <div className="relative group">
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-cyan-neon to-purple-neon opacity-80 blur-[8px] group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative rounded-full p-[4px] bg-gradient-to-tr from-cyan-neon to-purple-neon">
          <div className="h-28 w-28 rounded-full bg-bg-dark flex items-center justify-center overflow-hidden border-2 border-transparent">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="h-full w-full rounded-full object-contain p-2 bg-black/60" />
            ) : (
              <div className="h-full w-full rounded-full bg-slate-800 flex items-center justify-center text-3xl font-bold text-white">
                HT
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* User Info */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
          @{username}
        </h1>
        <p className="text-gray-400 text-sm font-medium">
          {bio}
        </p>
      </div>

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-neon opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-neon"></span>
        </span>
        <span className="text-green-neon text-xs font-bold tracking-wide">
          Atendimento Online
        </span>
      </div>
    </motion.div>
  );
}
