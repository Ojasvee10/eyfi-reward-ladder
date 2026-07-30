import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Background from "./components/Background";
import Hero from "./components/Hero";
import ProgressBar from "./components/ProgressBar";
import RewardLadder from "./components/RewardLadder";
import UnlockToast from "./components/UnlockToast";
import Footer from "./components/Footer";

import { rewards } from "./data/rewards";

function App() {
  const [progress, setProgress] = useState(0);
  const [toast, setToast] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (progress === 0) {
      setToast(null);
      return;
    }

    const unlocked = [...rewards]
      .reverse()
      .find((reward) => progress >= reward.milestone);

    if (unlocked) {
      setToast(unlocked);

      const timer = setTimeout(() => {
        setToast(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  const startJourney = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setProgress(0);

    const milestones = [0, 25, 50, 75, 100, 200];

    milestones.forEach((value, index) => {
      setTimeout(() => {
        setProgress(value);

        if (index === milestones.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
          }, 1000);
        }
      }, index * 1200);
    });
  };

  return (
    <motion.div
      className="min-h-screen text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Background />

      <UnlockToast reward={toast} />

      <Hero />

      <div className="flex justify-center mb-12">
        <button
          onClick={startJourney}
          disabled={isAnimating}
          className="rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-8 py-4 font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnimating ? "Journey Running..." : "🚀 Start Journey"}
        </button>
      </div>

      <ProgressBar
        progress={progress}
        setProgress={setProgress}
      />

      <RewardLadder progress={progress} />

      <Footer />
    </motion.div>
  );
}

export default App;