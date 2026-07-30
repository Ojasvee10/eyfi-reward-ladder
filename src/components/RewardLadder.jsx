import { motion } from "framer-motion";
import RewardCard from "./RewardCard";
import { rewards } from "../data/rewards";

export default function RewardLadder({ progress }) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl font-black">
          Reward Timeline
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Every milestone unlocks exciting opportunities and rewards.
          Keep growing your registrations to climb the ladder.
        </p>
      </motion.div>

      {/* Animated Timeline */}
      <div className="absolute left-1/2 top-40 hidden h-[82%] w-1 -translate-x-1/2 rounded-full bg-gray-700 md:block">

        <motion.div
          className="rounded-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400"
          initial={{ height: 0 }}
          animate={{
            height: `${(progress / 200) * 100}%`,
          }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%" }}
        />

      </div>

      {/* Reward Cards */}
      <div className="space-y-16">

        {rewards.map((reward, index) => {
          const unlocked = progress >= reward.milestone;

          return (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

              {/* Timeline Circle */}
              <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">

                <motion.div
                  animate={{
                    scale: unlocked ? [1, 1.15, 1] : 1,
                  }}
                  transition={{
                    repeat: unlocked ? Infinity : 0,
                    duration: 2,
                  }}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-4 text-sm font-bold shadow-lg
                  ${
                    unlocked
                      ? "border-white bg-purple-500 text-white"
                      : "border-gray-600 bg-gray-800 text-gray-400"
                  }`}
                >
                  {reward.milestone === 0
                    ? "S"
                    : reward.milestone}
                </motion.div>

              </div>

              {/* Reward Card */}
              <div className="w-full md:w-[45%]">
                <RewardCard
                  reward={reward}
                  unlocked={unlocked}
                />
              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}