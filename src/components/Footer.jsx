import { Globe, Heart } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-white/5 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              EYFI Reward Journey
            </h2>

            <p className="mt-3 max-w-md text-gray-400">
              An interactive reward ladder designed for the EYFI Campus
              Ambassador Program. Unlock exciting milestones as registrations
              grow.
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-5">

<a
  href="https://github.com/Ojasvee10"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:scale-110 hover:bg-purple-500/20"
>
  <FaGithub size={22} />
</a>

            <a
              href="https://ojasvee-s-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:scale-110 hover:bg-blue-500/20"
            >
              <Globe size={22} />
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">

          <p className="flex items-center justify-center gap-2">
            Built with <Heart size={16} className="text-red-500 fill-red-500" />
            using React, Tailwind CSS & Framer Motion.
          </p>

          <p className="mt-2">
            © {new Date().getFullYear()} Ojasvee Gupta. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}