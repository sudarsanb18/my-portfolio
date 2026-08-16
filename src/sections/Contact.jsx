import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Code2, Link2 } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-5 md:px-8 py-32 md:py-44 overflow-hidden"
    >
      {/* Top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent" />

      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] tracking-widest2 text-brass uppercase mb-8"
        >
          06 / CONTACT
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-paper-100 tracking-tightest leading-[0.95] text-balance"
        >
          Have an idea
          <br />
          <span className="text-brass">worth building?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="mt-8 text-paper-400 text-lg max-w-md leading-relaxed"
        >
          Let's turn the idea into something real.
        </motion.p>

        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
          className="mt-14 flex flex-wrap gap-4"
        >

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-paper-200 text-ink-950 pl-6 pr-5 py-4 font-mono text-sm uppercase tracking-widest2 hover:bg-brass transition-colors duration-300"
          >
            <Mail size={16} />

            Email me

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-ink-600 text-paper-300 px-6 py-4 font-mono text-sm uppercase tracking-widest2 hover:border-brass hover:text-brass-light transition-colors duration-300"
          >
            <Code2 size={16} />

            GitHub

            <ArrowUpRight
              size={14}
              className="opacity-0 -translate-y-0.5 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0.5"
            />
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-ink-600 text-paper-300 px-6 py-4 font-mono text-sm uppercase tracking-widest2 hover:border-brass hover:text-brass-light transition-colors duration-300"
          >
            <Link2 size={16} />

            LinkedIn

            <ArrowUpRight
              size={14}
              className="opacity-0 -translate-y-0.5 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-20 pt-6 border-t border-ink-600/40 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper-600">
            Open to opportunities & collaborations
          </span>

          <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper-600">
            {profile.location}
          </span>
        </motion.div>

      </div>
    </section>
  );
}