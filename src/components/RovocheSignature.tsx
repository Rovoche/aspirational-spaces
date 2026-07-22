import { useEffect, useState } from "react";

export function FloatingPill() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500);
    const onScroll = () => {
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (p > 0.15) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/55 px-4 py-2.5 pr-2 backdrop-blur-xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.5)]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>
        <a
          href="https://www.rovoche.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] tracking-wide text-white/90 hover:text-white transition-colors"
        >
          Concept by <span className="font-medium">ROVOCHÉ</span>
        </a>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="ml-1 flex h-6 w-6 items-center justify-center rounded-full text-white/50 hover:text-white/90 hover:bg-white/10 transition-colors"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
        </button>
      </div>
    </div>
  );
}

export function SignatureFooter({ brand }: { brand: string }) {
  return (
    <section className="bg-[#0b0b09] py-24 px-6 text-center text-[#e9e4d8]">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto h-px w-24 bg-[#B08D57]/70" />
        <h2 className="mt-10 font-display text-5xl md:text-6xl leading-[1.05]">
          Built on Rock. <em className="italic">Crafted to Last.</em>
        </h2>
        <p className="mt-8 text-sm tracking-[0.2em] uppercase text-[#c9c1ad]">
          —{" "}
          <a
            href="https://www.rovoche.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#B08D57]"
          >
            ROVOCHÉ
          </a>
        </p>
        <p className="mt-6 text-xs tracking-[0.25em] uppercase text-[#8a8474]">
          Concept Experience for {brand}
        </p>
        <div className="mx-auto mt-10 h-px w-24 bg-[#B08D57]/70" />
      </div>
    </section>
  );
}
