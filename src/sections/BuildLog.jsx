import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { buildLog } from "../data/portfolio";

export default function BuildLog() {
  return (
    <section
      id="journey"
      className="px-5 md:px-8 py-28 md:py-36 bg-ink-900/20 border-y border-ink-600/40"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="font-mono text-[11px] tracking-widest2 text-brass uppercase mb-4">
            04 / JOURNEY
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl text-paper-100 tracking-tightest max-w-2xl">
              Where I've been building.
            </h2>

            <p className="max-w-sm text-paper-500 text-sm leading-relaxed">
              Projects, programs, and challenges that have shaped how I think
              about building software.
            </p>
          </div>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-ink-600/60" />

          <ol className="space-y-12 md:space-y-14">
            {buildLog.map((entry, i) => (
              <motion.li
                key={entry.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                }}
                className="relative pl-10 md:pl-14"
              >

                {/* TIMELINE MARKER */}
                <div className="absolute left-0 top-1 flex items-center justify-center w-[16px] h-[16px]">
                  <span className="absolute w-4 h-4 rounded-full border border-brass/30" />

                  <span className="relative w-2 h-2 rounded-full bg-brass ring-4 ring-ink-950" />
                </div>

                {/* META */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
                    {entry.tag}
                  </span>

                  <span className="w-5 h-px bg-ink-600" />

                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper-500">
                    {entry.date}
                  </span>
                </div>

                {/* ENTRY */}
                <div className="group mt-3 max-w-4xl">

                  {/* Title row */}
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-display text-2xl md:text-3xl text-paper-100 tracking-tight transition-colors duration-300 group-hover:text-brass-light">
                      {entry.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 mt-1 text-paper-600 transition-all duration-300 group-hover:text-brass group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                  {/* Description */}
                  <p className="mt-3 max-w-2xl text-paper-400 text-sm md:text-base leading-relaxed">
                    {entry.detail}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-5 h-px w-0 bg-brass/50 transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 md:mt-20 pt-6 border-t border-ink-600/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper-600">
            Still building
          </span>

          <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper-600">
            CHALLENGE → BUILD → LEARN
          </span>
        </motion.div>
      </div>
    </section>
  );
}