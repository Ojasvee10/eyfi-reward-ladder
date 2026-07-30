import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-5xl text-center"
      >

        <span className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/20 px-6 py-2 text-sm font-semibold text-purple-300 backdrop-blur-md">
          🚀 EYFI Campus Ambassador Program
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-5xl font-black leading-tight md:text-7xl"
        >
          Unlock Your
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Reward Journey
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl"
        >
          Experience the EYFI Campus Ambassador journey by reaching
          registration milestones and unlocking exciting rewards,
          mentorship opportunities, paid internships, exclusive goodies,
          and even a chance to become a founding team member.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-purple-400">6</h3>
            <p className="text-sm text-gray-400">
              Reward Levels
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-cyan-400">200+</h3>
            <p className="text-sm text-gray-400">
              Registrations
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-pink-400">∞</h3>
            <p className="text-sm text-gray-400">
              Opportunities
            </p>
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
}