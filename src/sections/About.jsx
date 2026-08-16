import { motion } from "framer-motion";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="px-5 md:px-8 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] tracking-widest2 text-brass uppercase mb-8"
        >
          01 / ABOUT
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14 items-start">

          {/* LEFT — INTRODUCTION */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-paper-100 tracking-tightest leading-[1.02] text-balance"
            >
              {about.statement}
            </motion.h2>

            <div className="mt-10 space-y-5 max-w-xl">
              {about.body.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                  }}
                  className="text-paper-400 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* RIGHT — DEVELOPER PROFILE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="border border-ink-600/60 rounded-xl bg-ink-900/40 overflow-hidden"
          >
            {/* CARD HEADER */}
            <div className="px-5 py-3 border-b border-ink-600/60 font-mono text-[10px] tracking-widest2 text-paper-500 uppercase">
              Developer Profile
            </div>

            {/* PROFILE DETAILS */}
            <dl className="divide-y divide-ink-600/50">
              {about.profilePanel.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-5 py-4 gap-4"
                >
                  <dt className="font-mono text-[11px] text-paper-500 uppercase tracking-wide">
                    {row.label}
                  </dt>

                  <dd className="text-paper-200 text-sm text-right">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

        </div>
      </div>
    </section>
  );
}