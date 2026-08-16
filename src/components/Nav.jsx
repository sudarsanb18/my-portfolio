import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "Presence", href: "#presence" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);

  if (!element) {
    console.warn(`Section #${id} not found`);
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Nav() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavigation = (href) => {
    setOpen(false);

    setTimeout(() => {
      scrollToSection(href);
    }, 50);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          compact ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 px-5 md:px-8 ${
            compact
              ? "max-w-5xl bg-ink-900/80 backdrop-blur-xl border border-ink-600/50 rounded-full py-2.5 shadow-[0_0_0_1px_rgba(198,138,62,0.05)]"
              : "max-w-6xl py-1"
          }`}
        >
          {/* LOGO */}
          <button
            type="button"
            onClick={() => handleNavigation("#top")}
            className="font-display text-sm tracking-widest text-paper-200 hover:text-brass-light transition-colors bg-transparent border-0 cursor-pointer"
          >
            SUDARSAN<span className="text-brass">.</span>B
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-7">
            {LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavigation(link.href)}
                className="group relative font-mono text-[11px] tracking-widest2 uppercase text-paper-400 hover:text-paper-200 transition-colors bg-transparent border-0 cursor-pointer"
              >
                {link.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* STATUS */}
            <div className="flex items-center gap-2 pl-4 border-l border-ink-600/60">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brass" />
              </span>

              <span className="font-mono text-[10px] tracking-widest2 text-paper-400 uppercase">
                {profile.status}
              </span>
            </div>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="md:hidden text-paper-200 p-1 bg-transparent border-0 cursor-pointer"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink-950/98 backdrop-blur-xl md:hidden flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-6">
              {LINKS.map((link, index) => (
                <motion.button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavigation(link.href)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="text-left font-display text-4xl text-paper-200 hover:text-brass transition-colors bg-transparent border-0 cursor-pointer"
                >
                  <span className="font-mono text-sm text-brass mr-3 align-middle">
                    0{index + 1}
                  </span>

                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* MOBILE STATUS */}
            <div className="absolute bottom-10 left-8 font-mono text-[11px] text-paper-500 uppercase tracking-widest2">
              {profile.status}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}