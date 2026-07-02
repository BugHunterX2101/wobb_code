"use client";

import { motion } from "framer-motion";
import {
  Camera, Play, Disc3, Star, Target,
  Diamond, Heart, Zap, Lightbulb, Sparkles,
  Flame, Rocket, Trophy,
} from "lucide-react";

interface FloatItem {
  icon?: typeof Star;
  emoji?: string;
  size: number;
  x: string;
  delay: number;
  duration: number;
  color: string;
}

const items: FloatItem[] = [
  { icon: Camera, size: 24, x: "3%", delay: 0, duration: 20, color: "#e1306c" },
  { emoji: "🔥", size: 28, x: "10%", delay: 1.5, duration: 23, color: "#f97316" },
  { icon: Star, size: 20, x: "18%", delay: 2, duration: 25, color: "#fbbf24" },
  { emoji: "💜", size: 26, x: "25%", delay: 0.8, duration: 22, color: "#a855f7" },
  { icon: Zap, size: 22, x: "32%", delay: 4, duration: 24, color: "#a855f7" },
  { icon: Flame, size: 24, x: "38%", delay: 3, duration: 21, color: "#ef4444" },
  { emoji: "✨", size: 22, x: "44%", delay: 1.2, duration: 27, color: "#fbbf24" },
  { icon: Diamond, size: 18, x: "50%", delay: 1, duration: 28, color: "#34d399" },
  { emoji: "🚀", size: 28, x: "56%", delay: 3.5, duration: 24, color: "#22d3ee" },
  { icon: Play, size: 24, x: "62%", delay: 3, duration: 22, color: "#ef4444" },
  { emoji: "💎", size: 24, x: "68%", delay: 2.5, duration: 26, color: "#34d399" },
  { icon: Heart, size: 22, x: "74%", delay: 0.5, duration: 23, color: "#ec4899" },
  { emoji: "👑", size: 26, x: "80%", delay: 4.5, duration: 29, color: "#f59e0b" },
  { icon: Target, size: 20, x: "86%", delay: 3.5, duration: 21, color: "#22d3ee" },
  { emoji: "🌟", size: 26, x: "91%", delay: 1.8, duration: 25, color: "#a855f7" },
  { icon: Rocket, size: 22, x: "96%", delay: 5, duration: 27, color: "#f43f5e" },
  { icon: Trophy, size: 20, x: "14%", delay: 6, duration: 30, color: "#f59e0b" },
  { emoji: "⚡", size: 22, x: "47%", delay: 7, duration: 26, color: "#a855f7" },
  { icon: Lightbulb, size: 20, x: "59%", delay: 2.2, duration: 28, color: "#fbbf24" },
  { icon: Sparkles, size: 24, x: "72%", delay: 8, duration: 24, color: "#a855f7" },
  { emoji: "💯", size: 22, x: "22%", delay: 9, duration: 29, color: "#34d399" },
  { icon: Disc3, size: 22, x: "35%", delay: 8, duration: 26, color: "#06b6d4" },
];

const glowIntensity = [
  "0 0 8px", "0 0 12px", "0 0 16px", "0 0 10px",
  "0 0 14px", "0 0 6px", "0 0 18px", "0 0 20px",
];

export function Floating3DElements() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      {items.map((el, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center"
          style={{ left: el.x }}
          initial={{ y: "110vh", opacity: 0, rotate: i % 2 === 0 ? 0 : 360, scale: 0.3 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.55, 0.55, 0],
            rotate: i % 2 === 0 ? [0, 360] : [360, 0],
            scale: [0.3, 1.15, 1, 0.5],
            x: [0, Math.sin(i) * 20, -Math.sin(i) * 20, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.8, 1],
          }}
        >
          <div
            style={{
              filter: `drop-shadow(${glowIntensity[i % glowIntensity.length]} ${el.color}60)`,
              color: el.color,
              opacity: 0.7,
            }}
          >
            {el.icon ? (
              <el.icon size={el.size} strokeWidth={1.5} />
            ) : (
              <span style={{ fontSize: el.size }}>{el.emoji}</span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
