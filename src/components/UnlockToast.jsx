import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function UnlockToast({ reward }) {
  return (
    <AnimatePresence>
      {reward && (
        <motion.div
          initial={{ opacity: 0, y: -80, scale: 0.9 }}
          animate={{ opacity: 1, y: 20, scale: 1 }}
          exit={{ opacity: 0, y: -80, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="fixed top-5 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2"
        >
          <div className="rounded-2xl border border-green-400/30 bg-green-500/15 p-5 shadow-2xl backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                <CheckCircle2
                  size={26}
                  className="text-white"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  🎉 Reward Unlocked!
                </h3>

                <p className="text-green-200">
                  <span className="font-semibold">
                    {reward.title}
                  </span>
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  {reward.reward}
                </p>
              </div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}