import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { presence } from "../data/portfolio";

export default function CertsAndPresence() {
  return (
    <section
      id="presence"
      className="px-5 md:px-8 py-28 md:py-36 bg-ink-900/20 border-y border-ink-600/40"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="font-mono text-[11px] tracking-widest2 text-brass uppercase mb-4">
            05 / PRESENCE
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl text-paper-100 tracking-tightest">
              Find me online.
            </h2>

            <p className="max-w-sm text-paper-500 text-sm leading-relaxed">
              Code, problem solving, projects, and professional presence.
            </p>
          </div>
        </motion.div>

        {/* ================= PRESENCE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-t border-ink-600/50"
        >
          {presence.map((p, i) => (
            <a
              key={p.label}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 py-6 md:py-7 border-b border-ink-600/50 hover:bg-ink-900/40 transition-colors duration-300 px-2"
            >
              {/* LEFT */}
              <div className="flex items-center gap-5 md:gap-8">

                {/* NUMBER */}
                <span className="font-mono text-[10px] tracking-widest2 text-paper-600 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* PLATFORM */}
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-paper-200 group-hover:text-brass-light transition-colors duration-300">
                    {p.label}
                  </h3>

                  <p className="mt-1 font-mono text-[9px] md:text-[10px] uppercase tracking-widest2 text-paper-500">
                    {p.note}
                  </p>
                </div>
              </div>

              {/* ARROW */}
              <ArrowUpRight
                size={20}
                className="shrink-0 text-paper-600 group-hover:text-brass-light transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          ))}
        </motion.div>

        {/* ================= FOOTNOTE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest2 text-paper-600">
            04 platforms · continuously updated
          </span>
        </motion.div>

      </div>
    </section>
  );
}