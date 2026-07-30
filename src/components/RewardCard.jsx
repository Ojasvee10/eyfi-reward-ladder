import { motion } from "framer-motion";
import { CheckCircle2, Lock } from "lucide-react";

export default function RewardCard({ reward, unlocked }) {
  const Icon = reward.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.04,
        y: -6,
      }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden rounded-3xl border p-6 backdrop-blur-xl transition-all duration-500
        ${
          unlocked
            ? "border-purple-500 bg-gradient-to-br from-purple-500/20 via-indigo-500/10 to-cyan-500/10 shadow-[0_0_40px_rgba(168,85,247,0.35)]"
            : "border-white/10 bg-white/5"
        }`}
    >
      {/* Glow */}
      {unlocked && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
      )}

      {/* Top */}
      <div className="relative z-10 flex items-center justify-between">

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl
          ${
            unlocked
              ? "bg-purple-500 text-white"
              : "bg-white/10 text-gray-400"
          }`}
        >
          <Icon size={30} />
        </div>

        {unlocked ? (
          <CheckCircle2
            size={28}
            className="text-green-400"
          />
        ) : (
          <Lock
            size={24}
            className="text-gray-500"
          />
        )}

      </div>

      {/* Title */}

      <h3 className="relative z-10 mt-6 text-2xl font-bold">
        {reward.title}
      </h3>

      <p className="relative z-10 mt-3 text-gray-300 leading-7">
        {reward.reward}
      </p>

      {/* Bottom */}

      <div className="relative z-10 mt-8 flex items-center justify-between">

        <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
          🎯 {reward.milestone} Registrations
        </span>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold
          ${
            unlocked
              ? "bg-green-500/20 text-green-300"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {unlocked ? "Unlocked" : "Locked"}
        </span>

      </div>

      {/* Bottom Glow */}

      {unlocked && (
        <motion.div
          layoutId="glow"
          className="absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-purple-500/40 blur-3xl"
        />
      )}
    </motion.div>
  );
}