import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Plus,
  Code2,
  FileText,
  BrainCircuit,
} from "lucide-react";
import { projects } from "../data/portfolio";

function FeaturedProject({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-2xl border border-ink-600/60 bg-ink-900/40"
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-brass/5 blur-3xl" />

      {/* TOP META */}
      <div className="relative flex flex-wrap items-center justify-between gap-4 px-6 pt-6 md:px-8 md:pt-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
            {project.tag}
          </span>

          <span className="h-1 w-1 rounded-full bg-ink-600" />

          <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper-500">
            {project.status}
          </span>
        </div>

        <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper-600">
          FEATURED PROJECT / 01
        </span>
      </div>

      <div className="relative px-6 pb-8 pt-5 md:px-8 md:pb-10">
        {/* TITLE */}
        <div className="grid lg:grid-cols-[1fr_auto] lg:items-end gap-8">
          <div>
            <div className="mb-4 flex items-center gap-2 text-paper-500">
              <BrainCircuit size={15} />
              <span className="font-mono text-[10px] uppercase tracking-widest2">
                Machine Learning · NLP
              </span>
            </div>

            <h3 className="font-display text-5xl leading-none tracking-tightest text-paper-100 md:text-7xl">
              {project.name}
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper-400 md:text-lg">
              {project.oneLiner}
            </p>
          </div>

          {/* PROJECT NUMBER */}
          <div className="hidden lg:block font-mono text-[9px] uppercase tracking-widest2 text-paper-600">
            ML / 001
          </div>
        </div>

        {/* SYSTEM FLOW */}
        <div className="mt-10 overflow-hidden rounded-xl border border-ink-600/50 bg-ink-950/70">
          <div className="flex items-center justify-between border-b border-ink-600/50 px-5 py-3">
            <span className="font-mono text-[9px] uppercase tracking-widest2 text-paper-500">
              Processing Pipeline
            </span>

            <span className="font-mono text-[9px] uppercase tracking-widest2 text-brass">
              ONLINE
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 px-5 py-6 md:gap-3 md:px-7">
            <FlowNode label="RESUME" />
            <FlowArrow />

            <FlowNode label="EXTRACT" active />
            <FlowArrow />

            <FlowNode label="ANALYSE" />
            <FlowArrow />

            <FlowNode label="SCORE" active />
            <FlowArrow />

            <FlowNode label="DECISION" />
          </div>
        </div>

        {/* TECH STACK */}
        <div className="mt-7">
          <div className="mb-3 font-mono text-[9px] uppercase tracking-widest2 text-paper-600">
            Technology
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-ink-600/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-paper-400 transition-colors hover:border-brass/40 hover:text-brass-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* BREAKDOWN BUTTON */}
        <button
          onClick={() => setExpanded((value) => !value)}
          className="mt-9 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-paper-200 transition-colors hover:text-brass-light"
          aria-expanded={expanded}
        >
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full border border-ink-600 transition-transform duration-300 ${
              expanded ? "rotate-45 border-brass/50" : ""
            }`}
          >
            <Plus size={13} />
          </span>

          {expanded
            ? "Close project breakdown"
            : "Problem — Approach — Result"}
        </button>

        {/* EXPANDED CONTENT */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div className="mt-8 grid gap-8 border-t border-ink-600/50 pt-8 md:grid-cols-3">
                <Breakdown
                  number="01"
                  title="Problem"
                  content={project.problem}
                />

                <Breakdown
                  number="02"
                  title="Approach"
                  content={project.solution}
                />

                <Breakdown
                  number="03"
                  title="Result"
                  content={
                    project.result ||
                    "A working resume screening system built around structured candidate evaluation."
                  }
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-ink-600/40 pt-7">
          {project.github && project.github !== "#" ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-paper-200 px-5 py-3 font-mono text-xs uppercase tracking-widest2 text-ink-950 transition-colors hover:bg-brass"
            >
              <Code2 size={14} />
              View Source
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ) : null}

          {project.demo && project.demo !== "#" ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-5 py-3 font-mono text-xs uppercase tracking-widest2 text-paper-300 transition-colors hover:border-brass hover:text-brass-light"
            >
              <ArrowUpRight size={14} />
              Live Demo
            </a>
          ) : null}

          <span className="ml-auto hidden items-center gap-2 font-mono text-[9px] uppercase tracking-widest2 text-paper-600 sm:flex">
            <FileText size={12} />
            Resume intelligence
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function FlowNode({ label, active = false }) {
  return (
    <span
      className={`rounded-lg border px-3 py-2 font-mono text-[9px] uppercase tracking-widest2 md:px-4 ${
        active
          ? "border-brass/40 bg-brass/5 text-brass-light"
          : "border-ink-600 text-paper-400"
      }`}
    >
      {label}
    </span>
  );
}

function FlowArrow() {
  return <span className="text-brass/70">→</span>;
}

function Breakdown({ number, title, content }) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-[9px] text-brass">{number}</span>

        <span className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
          {title}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-paper-400">
        {content}
      </p>
    </div>
  );
}

export default function Work() {
  // Resume Screening is the only project currently being showcased.
  const project =
    projects.find(
      (item) =>
        item.name?.toLowerCase().includes("resume") ||
        item.name?.toLowerCase().includes("screen")
    ) || projects.find((item) => item.featured);

  if (!project) {
    return null;
  }

  return (
    <section
      id="work"
      className="border-y border-ink-600/40 bg-ink-900/20 px-5 py-28 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADER */}
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 font-mono text-[11px] uppercase tracking-widest2 text-brass">
              02 / WORK
            </div>

            <h2 className="font-display text-4xl tracking-tightest text-paper-100 md:text-5xl">
              Things I've built.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-xs text-sm leading-relaxed text-paper-500"
          >
            A practical machine-learning project focused on turning resumes
            into structured candidate insights.
          </motion.p>
        </div>

        <FeaturedProject project={project} />
      </div>
    </section>
  );
}