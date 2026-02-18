"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative inline-flex h-9 w-16 items-center
        rounded-full border border-white/10
        bg-white/10 backdrop-blur
        transition-colors duration-300
        hover:bg-white/20
        dark:bg-white/5 dark:hover:bg-white/10 cursor-pointer
      "
    >
      {/* glow */}
      <div
        className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(99,102,241,.45), transparent 60%)",
        }}
      />

      {/* knob (animated) */}
      <motion.div
        className={`
          relative z-10 ml-1 flex h-7 w-7 items-center justify-center rounded-full
          ${isDark ? "bg-indigo-500 shadow-lg shadow-indigo-500/30" : "bg-white shadow"}
        `}
        animate={{ x: isDark ? 28 : 0, scale: isDark ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.6 }}
      >
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -20, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {isDark ? "🌙" : "☀️"}
        </motion.span>
      </motion.div>
    </button>
  );
}
