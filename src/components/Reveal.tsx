import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, as: As = "div", className = "", delay = 0, mode = "image" }: {
  children: ReactNode;
  as?: any;
  className?: string;
  delay?: number;
  mode?: "image" | "text";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setInView(true), delay);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const base = mode === "image" ? "reveal" : "fade-up";
  const active = mode === "image" ? "reveal-in" : "fade-up-in";

  return (
    <As ref={ref} className={`${base} ${inView ? active : ""} ${className}`}>
      {children}
    </As>
  );
}
