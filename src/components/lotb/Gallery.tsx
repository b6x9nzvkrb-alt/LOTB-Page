import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import g1 from "@/assets/gallery/gallery-01.jpeg";
import g2 from "@/assets/gallery/gallery-02.jpeg";
import g3 from "@/assets/gallery/gallery-03.jpeg";
import g4 from "@/assets/gallery/gallery-04.jpeg";
import g5 from "@/assets/gallery/gallery-05.jpeg";
import g6 from "@/assets/gallery/gallery-06.jpeg";

const IMAGES = [
  { src: g1, caption: "Warm up" },
  { src: g2, caption: "Crew" },
  { src: g3, caption: "RideOut" },
  { src: g4, caption: "Chill Out" },
  { src: g5, caption: "Air Time" },
  { src: g6, caption: "Community" },
];

const AUTO_INTERVAL = 5000;

const Gallery = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const prev = useCallback(() => setActive((a) => (a - 1 + IMAGES.length) % IMAGES.length), []);
  const next = useCallback(() => setActive((a) => (a + 1) % IMAGES.length), []);

  useEffect(() => {
    timerRef.current = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTO_INTERVAL);
  }, [next]);

  const goPrev = () => { prev(); resetTimer(); };
  const goNext = () => { next(); resetTimer(); };
  const goTo = (i: number) => { setActive(i); resetTimer(); };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="mt-4 relative z-[5]">
      <div className="relative rounded-[18px] overflow-hidden group">
        <img
          src={IMAGES[active].src}
          alt={IMAGES[active].caption}
          className="w-full aspect-[16/9] object-cover transition-transform duration-500"
        />

        {/* Caption */}
        <div className="absolute left-3 bottom-3 px-3 py-1.5 rounded-full bg-card/85 border border-border backdrop-blur-[10px] text-[13px] font-heading uppercase tracking-wider text-foreground">
          {IMAGES[active].caption}
        </div>

        {/* Nav arrows */}
        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/80 border border-border backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-foreground hover:bg-card"
          aria-label="Vorheriges Bild"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/80 border border-border backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-foreground hover:bg-card"
          aria-label="Nächstes Bild"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-foreground scale-125" : "bg-foreground/40"}`}
              aria-label={`Bild ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
