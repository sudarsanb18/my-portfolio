import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  FileText,
  Link2,
} from "lucide-react";
import { profile } from "../data/portfolio";

const CYCLE = ["IDEATE", "ENGINEER", "TEST", "SHIP"];

function SignalReadout() {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const cycle = setInterval(() => {
      setIndex((i) => (i + 1) % CYCLE.length);
    }, 2200);

    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(cycle);
      clearInterval(clock);
    };
  }, []);

  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");
  const ss = String(time.getSeconds()).padStart(2, "0");

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[340px] border border-ink-600/60 bg-ink-900/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-ink-600/60">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] tracking-[0.2em] text-paper-500 uppercase">
            BUILD SYSTEM
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass opacity-50" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brass" />
          </span>

          <span className="font-mono text-[9px] tracking-widest text-brass uppercase">
            Active
          </span>
        </div>
      </div>

      {/* State */}
      <div className="px-5 py-7">
        <div className="font-mono text-[9px] text-paper-500 uppercase tracking-[0.18em] mb-2">
          Current state
        </div>

        <div className="h-9 overflow-hidden relative">
          <motion.div
            key={index}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -25, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-3xl text-paper-100 tracking-tight"
          >
            {CYCLE[index]}
          </motion.div>
        </div>
      </div>

      {/* Data */}
      <div className="grid grid-cols-2 border-t border-ink-600/60 divide-x divide-ink-600/60">
        <div className="px-5 py-4">
          <div className="font-mono text-[8px] text-paper-500 uppercase tracking-[0.18em]">
            Local time
          </div>

          <div className="font-mono text-xs text-paper-300 mt-1.5 tabular-nums">
            {hh}:{mm}:{ss} IST
          </div>
        </div>

        <div className="px-5 py-4">
          <div className="font-mono text-[8px] text-paper-500 uppercase tracking-[0.18em]">
            Location
          </div>

          <div className="font-mono text-xs text-paper-300 mt-1.5">
            CHENNAI / IN
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-5 md:px-8 pt-32 pb-16 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Identity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="flex items-center gap-3 mb-7"
        >
          <span className="h-px w-8 bg-brass" />

          <span className="font-mono text-[10px] md:text-[11px] tracking-[0.18em] text-brass uppercase">
            Chennai Institute of Technology
          </span>

          <span className="hidden sm:block text-paper-700">/</span>

          <span className="hidden sm:block font-mono text-[10px] tracking-[0.18em] text-paper-500 uppercase">
            CSE · 2029
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-14 lg:gap-20 items-end">

          {/* LEFT */}
          <div>

            {/* Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display font-medium leading-[0.88] tracking-tightest text-paper-100 text-[17vw] sm:text-[11vw] lg:text-[7.2vw] whitespace-nowrap"
              >
                B<span className="text-paper-100">.</span>
                <span className="text-brass">Sudarsan</span>
              </motion.h1>
            </div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-paper-300">
                Full Stack Developer
              </span>

              <span className="text-brass">·</span>

              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-paper-500">
                AI / ML
              </span>

              <span className="text-brass">·</span>

              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-paper-500">
                Builder
              </span>
            </motion.div>

            {/* Statement */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-7 max-w-2xl text-base md:text-xl text-paper-400 leading-relaxed text-balance"
            >
              {profile.statement}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.65,
              }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >

              {/* Projects */}
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-paper-200 text-ink-950 pl-5 pr-4 py-3.5 font-mono text-[10px] uppercase tracking-[0.16em] hover:bg-brass transition-all duration-300"
              >
                View Projects

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Resume */}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-ink-600 text-paper-300 px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.16em] hover:border-brass hover:text-brass-light transition-all duration-300"
              >
                <FileText size={14} />

                Resume

                <ArrowUpRight
                  size={13}
                  className="opacity-0 -translate-y-0.5 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0.5"
                />
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-paper-500 px-2 py-3.5 font-mono text-[10px] uppercase tracking-[0.16em] hover:text-paper-100 transition-colors duration-300"
              >
                <Code2 size={14} />
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-paper-500 px-2 py-3.5 font-mono text-[10px] uppercase tracking-[0.16em] hover:text-paper-100 transition-colors duration-300"
              >
                <Link2 size={14} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* DESKTOP SIGNAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:block pb-2"
          >
            <SignalReadout />
          </motion.div>
        </div>
      </div>

      {/* MOBILE SIGNAL */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.9,
          duration: 0.7,
        }}
        className="lg:hidden mt-14 mx-auto w-full max-w-6xl"
      >
        <SignalReadout />
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.4,
          duration: 0.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-paper-600 hover:text-brass transition-colors"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.2em]">
          Scroll
        </span>

        <ArrowDown
          size={13}
          className="animate-bounce"
        />
      </motion.a>

      {/* Bottom divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent" />
    </section>
  );
}