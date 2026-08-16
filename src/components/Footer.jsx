import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="px-5 md:px-8 py-10 border-t border-ink-600/50">
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* BRAND */}
          <a
            href="#top"
            className="group text-center md:text-left"
          >
            <div className="font-display text-sm tracking-widest text-paper-200 group-hover:text-paper-100 transition-colors">
              SUDARSAN<span className="text-brass">.</span>B
            </div>

            <div className="font-mono text-[10px] uppercase tracking-widest2 text-paper-500 mt-1">
              CSE · Full Stack · AI
            </div>
          </a>

          {/* COPYRIGHT */}
          <div className="font-mono text-[10px] uppercase tracking-widest2 text-paper-600 text-center">
            © {new Date().getFullYear()} SUDARSAN B.
          </div>

          {/* LINKS */}
          <div className="flex items-center gap-5">

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest2 text-paper-400 hover:text-brass-light transition-colors"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest2 text-paper-400 hover:text-brass-light transition-colors"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-[10px] uppercase tracking-widest2 text-paper-400 hover:text-brass-light transition-colors"
            >
              Email
            </a>

          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-8 pt-5 border-t border-ink-600/30 flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-widest2 text-paper-700">
            Built with intention.
          </span>

          <span className="font-mono text-[9px] uppercase tracking-widest2 text-paper-700">
            Chennai / India
          </span>
        </div>

      </div>
    </footer>
  );
}