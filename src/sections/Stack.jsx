import { motion } from "framer-motion";
import { stack } from "../data/portfolio";

export default function Stack() {
  const groups = Object.entries(stack);

  return (
    <section
      id="stack"
      className="px-5 md:px-8 py-28 md:py-36 border-b border-ink-600/40"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-[11px] tracking-widest2 text-brass uppercase mb-4">
            02 / STACK
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl text-paper-100 tracking-tightest">
              Technologies I build with.
            </h2>

            <p className="max-w-sm text-paper-500 text-sm leading-relaxed">
              A practical stack spanning software engineering, full-stack
              development, and AI-driven systems.
            </p>
          </div>
        </motion.div>

        {/* ================= STACK GRID ================= */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {groups.map(([group, items], gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: gi * 0.06,
              }}
              className="group border-t border-ink-600/50 pt-6 pb-6"
            >
              {/* GROUP HEADER */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-paper-500">
                  {group}
                </h3>

                <span className="font-mono text-[10px] text-paper-600 tabular-nums">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              {/* TECHNOLOGIES */}
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="
                      font-display
                      text-xl md:text-2xl
                      text-paper-300
                      transition-all duration-300
                      hover:text-brass-light
                      hover:translate-x-0.5
                      cursor-default
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="mt-12 pt-6 border-t border-ink-600/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper-600">
            Continuously learning
          </span>

          <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper-600">
            BUILD · TEST · ITERATE
          </span>
        </motion.div>

      </div>
    </section>
  );
}