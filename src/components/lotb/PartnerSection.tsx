import { useState } from "react";
import { ChevronDown } from "lucide-react";
import bronxLogo from "@/assets/partners/bronx-logo.svg";
import koglerLogo from "@/assets/partners/kogler-logo.png";

const PartnerSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="scroll-reveal">
      <div className="glass-card glass-card-hover rounded-[18px] overflow-hidden sm:-rotate-[0.3deg]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-5 cursor-pointer text-left"
        >
          <h3 className="text-foreground font-heading text-lg uppercase tracking-wider text-center flex-1">Partner & Sponsoren</h3>
          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 flex flex-wrap gap-3 justify-center">
              <a href="https://bronx.at/" target="_blank" rel="noopener"
                className="px-4 py-3 rounded-xl border border-border bg-card/80 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <img src={bronxLogo} alt="Bronx Shop" className="h-8 w-auto" />
              </a>
              <a href="https://www.koglersport.at/" target="_blank" rel="noopener"
                className="px-4 py-3 rounded-xl border border-border bg-card/80 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <img src={koglerLogo} alt="Kogler Sport" className="h-8 w-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
