import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

import beanieWhite from "@/assets/merch/beanie-white.jpeg";
import beanieCharcoal from "@/assets/merch/beanie-charcoal.jpeg";
import beanieRed from "@/assets/merch/beanie-red.jpeg";
import beanieGreen from "@/assets/merch/beanie-green.jpeg";
import beanieBerry from "@/assets/merch/beanie-berry.jpeg";
import beanieBrown from "@/assets/merch/beanie-brown.jpeg";
import beanieBlueDark from "@/assets/merch/beanie-blue-dark.jpeg";
import beanieOlive from "@/assets/merch/beanie-olive.jpeg";
import beanieBlueLight from "@/assets/merch/beanie-blue-light.jpeg";
import beanieBlack from "@/assets/merch/beanie-black.jpeg";
import beanieBlueGrey from "@/assets/merch/beanie-blue-grey.jpeg";
import beaniePink from "@/assets/merch/beanie-pink.jpeg";
import keychainImg from "@/assets/merch/keychain.jpg";

const BEANIE_COLORS = [
  { src: beanieWhite, name: "Weiß" },
  { src: beanieCharcoal, name: "Anthrazit" },
  { src: beanieRed, name: "Rot" },
  { src: beanieGreen, name: "Mint" },
  { src: beanieBerry, name: "Berry" },
  { src: beanieBrown, name: "Braun" },
  { src: beanieBlueDark, name: "Dunkelblau" },
  { src: beanieOlive, name: "Moos" },
  { src: beanieBlueLight, name: "Hellblau" },
  { src: beanieBlack, name: "Schwarz" },
  { src: beanieBlueGrey, name: "Blaugrau" },
  { src: beaniePink, name: "Rosa" },
];

const BEANIE_AUTO_INTERVAL = 3000;

const BeanieGallery = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    timerRef.current = setInterval(() => setActive((a) => (a + 1) % BEANIE_COLORS.length), BEANIE_AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const pick = (i: number) => {
    setActive(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((a) => (a + 1) % BEANIE_COLORS.length), BEANIE_AUTO_INTERVAL);
  };

  return (
    <div>
      <div className="relative rounded-xl overflow-hidden mb-3">
        <img src={BEANIE_COLORS[active].src} alt={BEANIE_COLORS[active].name} className="w-full aspect-square object-cover transition-opacity duration-300" />
        <div className="absolute left-2 bottom-2 px-2.5 py-1 rounded-full bg-card/85 border border-border backdrop-blur-[10px] text-[12px] font-extrabold text-foreground">
          {BEANIE_COLORS[active].name}
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {BEANIE_COLORS.map((c, i) => (
          <button
            key={i}
            onClick={() => pick(i)}
            className={`w-8 h-8 rounded-lg overflow-hidden border-2 transition-all ${i === active ? "border-primary scale-110" : "border-transparent opacity-70 hover:opacity-100"}`}
          >
            <img src={c.src} alt={c.name} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

const MerchSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="scroll-reveal">
      <div className="glass-card glass-card-hover rounded-[18px] overflow-hidden sm:rotate-[0.3deg]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-5 cursor-pointer text-left"
        >
          <h3 className="text-foreground font-heading text-lg uppercase tracking-wider text-center flex-1">Merch</h3>
          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <BeanieGallery />
                    <h4 className="text-foreground font-bold mb-1 text-sm mt-3">LOTB Beanie</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      S / M / L · OEKO-TEX Walkloden aus Österreich<br />
                      <em className="text-foreground/80">Handmade in Fieberbrunn</em> – begrenzte Stückzahl – auf Nachfrage
                    </p>
                  </div>
                  <div>
                    <div className="rounded-xl overflow-hidden mb-3">
                      <img src={keychainImg} alt="LOTB Schlüsselanhänger" className="w-full aspect-square object-cover" />
                    </div>
                    <h4 className="text-foreground font-bold mb-1 text-sm">LOTB Schlüsselanhänger</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Der perfekte Begleiter für jede Session.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed italic mt-4">
                  Erlös aus Merch kommt ausschließlich dem Verein zugute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchSection;
