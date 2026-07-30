import { motion } from "framer-motion";

export default function ProgressBar({ progress, setProgress }) {
  return (
    <section className="mx-auto mb-20 w-full max-w-5xl px-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Registration Progress
            </h2>

            <p className="mt-1 text-gray-400">
              Simulate registrations and unlock rewards.
            </p>
          </div>

          <div className="rounded-xl bg-purple-500/20 px-5 py-3 text-center">
            <p className="text-xs uppercase tracking-wider text-purple-300">
              Current Progress
            </p>

            <h3 className="text-2xl font-bold text-white">
              {progress} Registrations
            </h3>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-5 overflow-hidden rounded-full bg-gray-800">

          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${(progress / 200) * 100}%`,
            }}
            transition={{
              duration: 0.7,
            }}
            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400"
          />

        </div>

        {/* Milestones */}
        <div className="mt-4 flex justify-between text-sm text-gray-400">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
          <span>200</span>
        </div>

        {/* Slider */}
        <div className="mt-10">

          <label className="mb-3 block font-semibold">
            Manual Progress
          </label>

          <input
            type="range"
            min="0"
            max="200"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg accent-purple-500"
          />

        </div>

        {/* Percentage */}
        <div className="mt-8 flex justify-between">

          <span className="text-gray-400">
            Completion
          </span>

          <span className="font-bold text-purple-300">
            {Math.round((progress / 200) * 100)}%
          </span>

        </div>

      </div>
    </section>
  );
}