import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/* ── Collapsible Section ── */
const Section = ({ title, children, defaultOpen = false, className = "", titleAlign = "center" }: { title: string; children: ReactNode; defaultOpen?: boolean; className?: string; titleAlign?: "left" | "center" | "center-left" }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`glass-card glass-card-hover rounded-[18px] overflow-hidden scroll-reveal ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 cursor-pointer text-left"
      >
        <h3 className={`text-foreground font-heading text-lg uppercase tracking-wider flex-1 ${titleAlign === "center" ? "text-center" : titleAlign === "center-left" ? "sm:text-center sm:pr-[50%]" : "text-left"}`}>{title}</h3>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

/* ── Main Component ── */
const InfoCards = () => (
  <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 auto-rows-auto">
    <Section title="Über uns" className="sm:col-span-2 sm:-rotate-[0.4deg]" titleAlign="center-left">
      <p className="text-muted-foreground leading-[1.7] text-sm">
        <strong className="text-foreground">Seit über 30 Jahren</strong> sind wir eine Familie von Snowboard-Enthusiasten,
        die ihre Leidenschaft für den Sport teilen. Was als kleine Gruppe von Freunden begann,
        ist heute ein lebendiger Club mit regelmäßigen RideOuts, Events und einer engen Community.
      </p>
    </Section>

    <Section title="RideOut" className="sm:rotate-[0.4deg]">
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm text-muted-foreground">
        <dt className="font-bold text-foreground">Wann</dt>
        <dd>Jeden Samstag 10:00 bis 4. April 2026</dd>
        <dt className="font-bold text-foreground">Wo</dt>
        <dd>Talstation Fieberbrunn (Tellerlift)</dd>
      </dl>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
        Ausgebildete und erfahrene Coaches. Spaß am gemeinsamen Fahren steht im Vordergrund. Jeder ist zum Schnuppern herzlich eingeladen. Anfänger bei TryOuts oder nach Voranmeldung.
      </p>
    </Section>

    <Section title="Mitgliedschaft" className="sm:-rotate-[0.5deg]">
      <ul className="space-y-1.5 text-sm list-none">
        <li><strong className="text-foreground">Teilnahme an RideOuts und Club-Events</strong></li>
        <li><strong className="text-foreground">Exklusive Rabatte und Angebote</strong></li>
        <li>
          <strong className="text-foreground">Community</strong>{" "}
          <span className="text-muted-foreground">– WhatsApp für News & Sessions</span>
        </li>
        <li>
          <strong className="text-foreground">Mitgliedsbeitrag</strong>{" "}
          <span className="text-muted-foreground">– 50€/Saison + 10€/weiteres Familienmitglied</span>
        </li>
      </ul>
    </Section>

  </section>
);

/* ── Helpers ── */
const TimelineItem = ({ year, title, children }: { year: string; title: string; children: ReactNode }) => (
  <div className="relative">
    <div className="absolute -left-[calc(0.625rem+1px)] top-1.5 w-2.5 h-2.5 rounded-full bg-primary/60 border-2 border-background" />
    <p className="text-[11px] font-extrabold text-primary/70 tracking-wider uppercase">{year}</p>
    <p className="text-foreground font-bold text-[13px] mb-0.5">{title}</p>
    <p className="text-muted-foreground leading-[1.65] text-[13px]">{children}</p>
  </div>
);

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="px-3 py-2 rounded-xl text-sm font-heading uppercase tracking-wider text-muted-foreground">
    {children}
  </span>
);

const PartnerBtn = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener"
    className="px-3 py-2 rounded-xl text-sm font-heading uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all"
  >
    {label}
  </a>
);

export default InfoCards;
