import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, ChevronLeft, ChevronRight, X, Play, FileText } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import bronxLogo from "@/assets/partners/bronx-logo.svg";
import koglerLogo from "@/assets/partners/kogler-logo.png";
import chronik1991Rennbild from "@/assets/chronik/1991_rennbild.jpg";
import chronik1991Rennbild2 from "@/assets/chronik/1991_rennbild_2.jpg";
import chronik1991Siegerin from "@/assets/chronik/1991_siegerin.jpg";
import chronik1992Buehne from "@/assets/chronik/1992_buehne.jpg";
import chronik1993Doischberg from "@/assets/chronik/1993_doischberg.jpg";
import chronik1994LordEntwurf from "@/assets/chronik/1994_lord_entwurf.jpg";
import chronikAbzeichen from "@/assets/chronik/abzeichen_fieberbrunn.jpg";
import chronik1995Wildseeloder from "@/assets/chronik/1995_wildseeloder.jpg";
import chronik1996Fasching from "@/assets/chronik/1996_fasching.jpg";
import chronik1996Lords from "@/assets/chronik/1996_lords.jpg";
import chronik1996Masters from "@/assets/chronik/1996_masters_ankuendigung.jpg";
import chronik1998HalfpipeNacht from "@/assets/chronik/1998_halfpipe_nacht.jpg";
import chronik1999Plakat from "@/assets/chronik/1999_plakat.jpg";
import chronik2000Halfpipe from "@/assets/chronik/2000_halfpipe.jpg";
import chronik2000HalfpipeHoch from "@/assets/chronik/2000_halfpipe_hoch.jpg";
import chronik2000Parallel from "@/assets/chronik/2000_parallel.jpg";
import chronik2000ParallelRs from "@/assets/chronik/2000_parallel_rs.jpg";
import chronik2000ParallelRs1 from "@/assets/chronik/2000_parallel_rs_1.jpg";
import chronik2000ParallelRs2 from "@/assets/chronik/2000_parallel_rs_2.jpg";
import chronik2000ParallelRs3 from "@/assets/chronik/2000_parallel_rs_3.jpg";
import chronik2001Plakat from "@/assets/chronik/2001_plakat.jpg";
import chronik2001Eventzelt from "@/assets/chronik/2001_eventzelt.jpg";
import chronik2001Sieger from "@/assets/chronik/2001_sieger.jpg";
import chronik2001Siegerehrung from "@/assets/chronik/2001_siegerehrung.jpg";
import chronik2001Trophaee from "@/assets/chronik/2001_trophaee.jpg";
import chronik2001FazText from "@/assets/chronik/2001_faz_text.jpg";
import chronik2001FazLord from "@/assets/chronik/2001_faz_lord.jpg";
import chronik2002Demoteam from "@/assets/chronik/2002_demoteam.jpg";
import chronik2002FazHalfpipe from "@/assets/chronik/2002_faz_halfpipe.jpg";
import chronik1991RennbildDamen from "@/assets/chronik/1991_rennbild_damen.jpg";
import chronik1998GuanoApes from "@/assets/chronik/1998_guano_apes.jpg";
import chronikLordsTrophaeen from "@/assets/chronik/lords_trophaeen.jpg";
import chronik2001EventzeltGanz from "@/assets/chronik/2001_eventzelt_ganz.jpg";

const STATUTEN_TEXT = `§ 1: Name, Sitz und Tätigkeitsbereich\n\nDer Verein führt den Namen „Lords of the Boards Snowboard und Lifestyle Club (LOTB)". Er hat seinen Sitz in 6391 Fieberbrunn und erstreckt seine Tätigkeit auf ganz Österreich. Die Errichtung von Zweigvereinen ist nicht beabsichtigt.\n\n§ 2: Zweck\n\nDer Verein, dessen Tätigkeit nicht auf Gewinn gerichtet ist, bezweckt:\n\n• die Förderung und Unterstützung des Boardsports\n• die Pflege und Verbreitung des Boardsports unter der Bevölkerung\n• die Förderung insbesondere der Jugend\n• die Förderung der körperlichen Ertüchtigung seiner Mitglieder\n• die Förderung der Geselligkeit und Kameradschaft\n• kameradschaftliche Zusammenarbeit mit anderen Vereinen\n• Veranstaltung von Wettkämpfen und Werbeläufen\n\n§ 3: Mittel zur Erreichung des Vereinszwecks\n\nDer Vereinszweck soll durch die angeführten ideellen und materiellen Mittel erreicht werden.\n\nAls ideelle Mittel dienen:\n\n• Trainingsveranstaltungen, die von einem Trainer geleitet werden\n• Veranstaltung, Teilnahme und Durchführung von Rennen bzw. Wettkämpfen\n• Schaffung geeigneter Plätze zur Ausübung des Sportes\n• Bereitstellung der nötigen Ausrüstung\n• gesellige Veranstaltungen jeglicher Art\n• Vorträge, Versammlungen und Diskussionsabende\n• Herausgabe von Mitteilungsblättern, Vereinszeitschriften, etc.\n• Veranstaltungen zur Werbung für den Club und von Mitgliedern\n• Gestaltung einer Homepage\n\nDie erforderlichen materiellen Mittel sollen aufgebracht werden durch:\n\n• Beitrittsgebühren und Mitgliedsbeiträge\n• Erträge aus geselligen Veranstaltungen und vereinseigenen Unternehmungen\n• Zuteilungen aus Sportförderungsbeiträgen\n• Spenden, Subventionen, Sponsoreneinnahmen\n• Vermächtnisse und sonstige Zuwendungen\n\n§ 4: Arten der Mitgliedschaft\n\nDie Mitglieder des Vereins gliedern sich in ordentliche, außerordentliche und Ehrenmitglieder. Ordentliche Mitglieder sind jene, die sich voll an der Vereinsarbeit beteiligen. Außerordentliche Mitglieder sind solche, die die Vereinstätigkeit vor allem durch Zahlung eines erhöhten Mitgliedsbeitrags fördern. Ehrenmitglieder sind Personen, die hiezu wegen besonderer Verdienste um den Verein ernannt werden.\n\n§ 5: Erwerb der Mitgliedschaft\n\nMitglieder des Vereins können alle physischen Personen, die sich für den Sport interessieren, sowie juristische Personen und rechtsfähige Personengesellschaften werden. Über die Aufnahme von ordentlichen und außerordentlichen Mitgliedern entscheidet der Vorstand. Die Aufnahme kann ohne Angabe von Gründen verweigert werden. Die Ernennung zum Ehrenmitglied erfolgt auf Antrag des Vorstands durch die Generalversammlung.\n\n§ 6: Beendigung der Mitgliedschaft\n\nDie Mitgliedschaft erlischt durch Tod, bei juristischen Personen und rechtsfähigen Personengesellschaften durch Verlust der Rechtspersönlichkeit, durch freiwilligen Austritt und durch Ausschluss. Der Austritt kann jederzeit erfolgen. Er muss dem Vorstand vorher schriftlich mitgeteilt werden.\n\n§ 7: Rechte und Pflichten der Mitglieder\n\nDie Mitglieder sind berechtigt, an allen Veranstaltungen des Vereins teilzunehmen und die Einrichtungen des Vereins zu beanspruchen. Das Stimmrecht in der Generalversammlung sowie das aktive und passive Wahlrecht steht nur den ordentlichen und den Ehrenmitgliedern zu. Die Mitglieder sind verpflichtet, die Interessen des Vereins nach Kräften zu fördern und alles zu unterlassen, wodurch das Ansehen und der Zweck des Vereins Abbruch erleiden könnte.\n\n§ 8: Vereinsorgane\n\nOrgane des Vereins sind die Generalversammlung (§§ 9 und 10), der Vorstand (§§ 11 bis 13), die Rechnungsprüfer (§ 14) und das Schiedsgericht (§ 15).\n\n§ 9: Generalversammlung\n\nDie Generalversammlung ist die „Mitgliederversammlung" im Sinne des Vereinsgesetzes 2002. Eine ordentliche Generalversammlung findet jährlich statt.\n\n§ 10: Aufgaben der Generalversammlung\n\nDer Generalversammlung sind folgende Aufgaben vorbehalten:\n\n• Beschlussfassung über den Voranschlag;\n• Entgegennahme und Genehmigung des Rechenschaftsberichts und des Rechnungsabschlusses unter Einbindung der Rechnungsprüfer;\n• Wahl und Enthebung der Mitglieder des Vorstands und der Rechnungsprüfer;\n• Genehmigung von Rechtsgeschäften zwischen Rechnungsprüfern und Verein;\n• Entlastung des Vorstands;\n• Festsetzung der Höhe der Beitrittsgebühr und der Mitgliedsbeiträge für ordentliche und für außerordentliche Mitglieder;\n• Verleihung und Aberkennung der Ehrenmitgliedschaft;\n• Beschlussfassung über Statutenänderungen und die freiwillige Auflösung des Vereins;\n• Beratung und Beschlussfassung über sonstige auf der Tagesordnung stehende Fragen.\n\n§ 11: Vorstand\n\nDer Vorstand besteht aus sechs Mitgliedern, und zwar aus Obmann/Obfrau und Stellvertreter/in, Schriftführer/in und Stellvertreter/in sowie Kassier/in und Stellvertreter/in. Der Vorstand wird von der Generalversammlung gewählt. Die Funktionsdauer des Vorstands beträgt vier Jahre.\n\n§ 12: Aufgaben des Vorstands\n\nDem Vorstand obliegt die Leitung des Vereins. Er ist das „Leitungsorgan" im Sinne des Vereinsgesetzes 2002. Ihm kommen alle Aufgaben zu, die nicht durch die Statuten einem anderen Vereinsorgan zugewiesen sind.\n\n§ 13: Besondere Obliegenheiten einzelner Vorstandsmitglieder\n\nDer/die Obmann/Obfrau führt die laufenden Geschäfte des Vereins. Der/die Schriftführer/in unterstützt den/die Obmann/Obfrau bei der Führung der Vereinsgeschäfte. Der/die Obmann/Obfrau vertritt den Verein nach außen. Der/die Kassier/in ist für die ordnungsgemäße Geldgebarung des Vereins verantwortlich.\n\n§ 14: Rechnungsprüfer\n\nZwei Rechnungsprüfer werden von der Generalversammlung auf die Dauer von 4 Jahren gewählt. Wiederwahl ist möglich.\n\n§ 15: Schiedsgericht\n\nZur Schlichtung von allen aus dem Vereinsverhältnis entstehenden Streitigkeiten ist das vereinsinterne Schiedsgericht berufen. Es ist eine „Schlichtungseinrichtung" im Sinne des Vereinsgesetzes 2002 und kein Schiedsgericht nach den §§ 577 ff ZPO.\n\n§ 16: Freiwillige Auflösung des Vereins\n\nDie freiwillige Auflösung des Vereins kann nur in einer Generalversammlung und nur mit Zweidrittelmehrheit der abgegebenen gültigen Stimmen beschlossen werden. Dieses Vermögen soll, soweit dies möglich und erlaubt ist, einer Organisation zufallen, die gleiche oder ähnliche Zwecke wie dieser Verein verfolgt, sonst Zwecken der Sozialhilfe.`;

const CHRONIK_IMAGES = [
  { src: chronik1991Rennbild, alt: "Rennbild ca. 1991/92" },
  { src: chronik1991Rennbild2, alt: "Rennbild ca. 1991/92" },
  { src: chronik1991RennbildDamen, alt: "Damenrennen ca. 1991/92" },
  { src: chronik1991Siegerin, alt: "Siegerehrung ca. 1991/92" },
  { src: chronik1992Buehne, alt: "Siegerehrung auf der Bühne ca. 1992" },
  { src: chronik1993Doischberg, alt: "Doischberg ca. 1993" },
  { src: chronik1994LordEntwurf, alt: "Erstentwurf Lord Titelseite 1994" },
  { src: chronikAbzeichen, alt: "Abzeichen Fieberbrunn Snowboarder" },
  { src: chronik1995Wildseeloder, alt: "Plakat Wildseeloder Classic 1995" },
  { src: chronik1996Lords, alt: "ISF Masters World Cup 1996" },
  { src: chronik1996Fasching, alt: "Fasching – Da Lord von Fiawabrunn" },
  { src: chronik1996Masters, alt: "Ankündigung ISF Snowboard Masters 1997" },
  { src: chronikLordsTrophaeen, alt: "Lords-Trophäen in der Werkstatt" },
  { src: chronik1998HalfpipeNacht, alt: "Halfpipe bei Nacht 1998" },
  { src: chronik1998GuanoApes, alt: "Eintrittskarte Guano Apes 1998" },
  { src: chronik1999Plakat, alt: "Plakat Lords of the Boards 1999" },
  { src: chronik2000Halfpipe, alt: "Halfpipe Szene 2000" },
  { src: chronik2000HalfpipeHoch, alt: "Halfpipe Szene 2000" },
  { src: chronik2000Parallel, alt: "Parallel-Riesenslalom Doischberg 2000" },
  { src: chronik2000ParallelRs, alt: "Parallel-Riesenslalom Action 2000" },
  { src: chronik2000ParallelRs1, alt: "Parallel-Riesenslalom Rider 2000" },
  { src: chronik2000ParallelRs2, alt: "Parallel-Riesenslalom Doischberg 2000" },
  { src: chronik2000ParallelRs3, alt: "Parallel-Riesenslalom Zielbereich 2000" },
  { src: chronik2001Plakat, alt: "Plakat Lords of the Boards 2001/02" },
  { src: chronik2001Eventzelt, alt: "European Open Eventzelt 2001" },
  { src: chronik2001EventzeltGanz, alt: "European Open Eventzelt Gesamtansicht 2001" },
  { src: chronik2001Sieger, alt: "European Open Siegerehrung 2001" },
  { src: chronik2001Siegerehrung, alt: "European Open Siegerehrung BGM Grander 2001" },
  { src: chronik2001Trophaee, alt: "European Open Trophäe 2001" },
  { src: chronik2001FazText, alt: "Frankfurter Allgemeine Artikel 2001" },
  { src: chronik2001FazLord, alt: "Frankfurter Allgemeine – Lord 2001" },
  { src: chronik2002Demoteam, alt: "Demoteams Rosenegg & LOTB 2002" },
  { src: chronik2002FazHalfpipe, alt: "FAZ Artikel – Halfpipe, unglaublich fett" },
];
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
import keychainImg1 from "@/assets/merch/keychain_1.jpg";
import keychainImg2 from "@/assets/merch/keychain_2.jpg";

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

/* ── Section definitions ── */
const SECTIONS = [
  { id: "ueber-uns", label: "Über uns" },
  { id: "rideout", label: "RideOut" },
  { id: "mitgliedschaft", label: "Mitgliedschaft" },
  { id: "merch", label: "Merch" },
  { id: "partner", label: "Partner" },
  { id: "chronik", label: "Geschichte" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

/* ── Beanie Gallery ── */
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
        <div className="absolute left-2 bottom-2 px-2.5 py-1 rounded-full bg-card/85 border border-border backdrop-blur-[10px] text-[12px] font-heading uppercase tracking-wider text-foreground">
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

/* ── Keychain Gallery ── */
const KEYCHAIN_IMAGES = [
  { src: keychainImg1, alt: "LOTB Schlüsselanhänger Vorderseite" },
  { src: keychainImg2, alt: "LOTB Schlüsselanhänger Rückseite" },
];
const KEYCHAIN_AUTO_INTERVAL = 3000;

const KeychainGallery = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % KEYCHAIN_IMAGES.length), KEYCHAIN_AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-xl overflow-hidden">
      <img src={KEYCHAIN_IMAGES[active].src} alt={KEYCHAIN_IMAGES[active].alt} className="w-full aspect-square object-cover transition-opacity duration-300" />
    </div>
  );
};

/* ── Chronik Gallery ── */
const ChronikGalleryItem = ({ img, index }: { img: { src: string; alt: string }; index: number }) => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = useCallback((dir: number) => {
    setLightbox((prev) => prev !== null ? (prev + dir + CHRONIK_IMAGES.length) % CHRONIK_IMAGES.length : null);
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightbox, navigate]);

  return (
    <>
      <div className="flex-shrink-0 w-40 sm:w-48 flex flex-col gap-1.5 cursor-pointer group" onClick={() => setLightbox(index)}>
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-28 sm:h-32 rounded-lg object-cover group-hover:opacity-80 transition-opacity"
        />
        <p className="text-[11px] text-muted-foreground text-center leading-tight px-1">{img.alt}</p>
      </div>
      {lightbox !== null && createPortal(
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img
            src={CHRONIK_IMAGES[lightbox].src}
            alt={CHRONIK_IMAGES[lightbox].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <p className="absolute bottom-4 text-white/60 text-sm">{CHRONIK_IMAGES[lightbox].alt}</p>
        </div>,
        document.body
      )}
    </>
  );
};


/* ── Timeline Item ── */
const TimelineItem = ({ year, title, children }: { year: string; title: string; children: ReactNode }) => (
  <div className="relative">
    <div className="absolute -left-[calc(0.625rem+1px)] top-1.5 w-2.5 h-2.5 rounded-full bg-primary/60 border-2 border-background" />
    <p className="text-[11px] font-heading uppercase text-primary/70 tracking-wider">{year}</p>
    <p className="text-foreground font-heading text-[13px] mb-0.5">{title}</p>
    <p className="text-muted-foreground leading-[1.65] text-[13px]">{children}</p>
  </div>
);

/* ── Section Contents ── */
const StatutenOverlay = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 animate-in fade-in-0 duration-200" onClick={onClose}>
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-background border border-border rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5 border-b border-border shrink-0">
          <h2 className="text-lg font-heading uppercase tracking-wider">Statuten des Vereins</h2>
          <button onClick={onClose} className="rounded-full p-1.5 hover:bg-accent transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto overscroll-contain p-5">
          <p className="text-muted-foreground leading-[1.75] whitespace-pre-line text-sm">{STATUTEN_TEXT}</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

const UeberUnsContent = () => {
  const [showStatuten, setShowStatuten] = useState(false);
  return (
    <>
      <p className="text-muted-foreground leading-[1.7] text-sm">
        <strong className="text-foreground">Seit über 30 Jahren</strong> sind wir eine Familie von Snowboard-Enthusiasten,
        die ihre Leidenschaft für den Sport teilen. Was als kleine Gruppe von Freunden begann,
        ist heute ein lebendiger Club mit regelmäßigen RideOuts, Events und einer engen Community.
      </p>
      <button
        onClick={() => setShowStatuten(true)}
        className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border bg-card/80 text-sm font-heading uppercase tracking-wider text-muted-foreground hover:scale-105 hover:shadow-2xl transition-all duration-300"
      >
        <FileText className="w-4 h-4" />
        Vereinsstatuten
      </button>
      <StatutenOverlay open={showStatuten} onClose={() => setShowStatuten(false)} />
    </>
  );
};

const SectionContent = ({ id }: { id: SectionId }) => {
  switch (id) {
    case "ueber-uns":
      return <UeberUnsContent />;
    case "rideout":
      return (
        <>
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <dt className="font-bold text-foreground">Wann</dt>
            <dd>Jeden Samstag 10:00 bis 4. April 2026</dd>
            <dt className="font-bold text-foreground">Wo</dt>
            <dd>Talstation Fieberbrunn (Tellerlift)</dd>
          </dl>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Ausgebildete Coaches mit viel Erfahrung. Spaß am gemeinsamen Fahren steht im Vordergrund. Jeder ist zum Schnuppern herzlich eingeladen. Anfänger bei TryOuts oder nach Voranmeldung.
          </p>
        </>
      );
    case "mitgliedschaft":
      return (
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
      );
    case "merch":
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Beanie */}
            <div>
              <BeanieGallery />
              <h4 className="text-foreground font-heading uppercase tracking-wider mb-1 text-sm mt-3">LOTB Beanie · 50 €</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                S / M / L · OEKO-TEX Walkloden aus Österreich<br />
                <em className="text-foreground/80">Handmade in Fieberbrunn</em>
              </p>
            </div>
            {/* Schlüsselanhänger */}
            <div>
              <KeychainGallery />
              <h4 className="text-foreground font-heading uppercase tracking-wider mb-1 text-sm mt-3">LOTB Schlüsselanhänger · 12 €</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Immer dabei...
              </p>
            </div>
          </div>
          <ul className="text-[11px] text-muted-foreground/70 leading-relaxed mt-3 space-y-0.5 list-none">
            <li>Artikel nur auf Anfrage per Mail oder WhatsApp.</li>
            <li>Durch den Kauf unterstützen Sie die heimische Jugend im Snowboardbereich.</li>
            <li>Der Erlös kommt ausschließlich dem Verein zugute.</li>
          </ul>
        </div>
      );
    case "partner":
      return (
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a href="https://bronx.at/" target="_blank" rel="noopener"
            className="px-6 py-4 rounded-xl border border-border bg-card/80 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={bronxLogo} alt="Bronx Shop" className="h-20 w-auto" />
          </a>
          <a href="https://www.koglersport.at/" target="_blank" rel="noopener"
            className="px-6 py-4 rounded-xl border border-border bg-card/80 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={koglerLogo} alt="Kogler Sport" className="h-20 w-auto" />
          </a>
        </div>
      );
    case "chronik":
      return (
        <div className="text-sm">
          <p className="text-muted-foreground leading-[1.7] mb-4">
            Was als lokales Rennen am Doischberg begann, wurde binnen eines Jahrzehnts zu einem
            international beachteten Snowboard Festival – mit World Series Athlet*innen und einem
            umfangreichen Rahmenprogramm.
          </p>
          <Collapsible>
            <CollapsibleContent>
              {/* Horizontal scrolling gallery with captions */}
              <div className="overflow-x-auto pb-2 -mx-1 mb-4">
                <div className="flex gap-3 px-1">
                  {CHRONIK_IMAGES.map((img, i) => (
                    <ChronikGalleryItem key={i} img={img} index={i} />
                  ))}
                </div>
              </div>
              <div className="relative pl-5 border-l-2 border-border/40 space-y-4 mb-4">
                  <TimelineItem year="ca. 1990" title="Erste Rennen am Doischberg">
                    Es finden erste Snowboardrennen unter dem Namen „Lords of the Boards" statt und sorgen bereits damals für spektakuläre Bilder.
                  </TimelineItem>
                  <TimelineItem year="Mitte 90er" title="Festival etabliert sich">
                    Der internationale Snowboard-Jetset besucht uns einmal im Jahr. Die Szene
                    bringt Jugendkultur ins Tal und entfacht eine Welle der Begeisterung für das Snowboarden.
                  </TimelineItem>
                  <TimelineItem year="1997" title="ISF World Masters">
                    Fieberbrunn wird Austragungsort des ISF Snowboard Masters World Cup – ein Großereignis,
                    das den Grundstein für die späteren Lords of the Boards Events legt.
                  </TimelineItem>
                  <TimelineItem year="1998" title="ISF-Europameisterschaften & Guano Apes">
                    Die ISF-Europameisterschaften finden in Fieberbrunn statt. Für das Event schreiben die
                    <strong className="text-foreground"> Guano Apes</strong> den Song
                    <strong className="text-foreground"> „Lords of the Boards"</strong> – das Musikvideo
                    wird vor Ort gedreht.
                  </TimelineItem>
                  <TimelineItem year="1999" title="200 Rider aus 20 Nationen">
                    Parallel-Riesenslalom und Halfpipe über mehrere Tage. Im Night-Finale siegen
                    Nicola Thost (GER) und Mike Michalchuk (CAN). Im Rahmenprogramm spielen die Donots.
                  </TimelineItem>
                  <TimelineItem year="2000" title="Duel Cross – neues Format">
                    Zwei Fahrer starten gleichzeitig auf einer Strecke mit Sprüngen und Tunneln.
                    Ursula Bruhin (SUI) und Philipp Schoch (SUI) gewinnen die Finals.
                    Siegfried Grabner (AUT) wird Zweiter.
                  </TimelineItem>
                  <TimelineItem year="2001" title="Burton European Open in Fieberbrunn">
                    Die Burton European Open zieht nach Fieberbrunn und wird gemeinsam mit Lords of the Boards ausgetragen.
                  </TimelineItem>
                  <TimelineItem year="2002" title="12. internationales LOTB-Event">
                    Rund 2.500 Zuschauer sehen die Superfinals. Marc-André Tarte (CAN) siegt mit einem
                    Backside 720 Indy. Bei der Rock-Night spielen H-Blockx, Die Happy und Ferris MC.
                  </TimelineItem>
                  <TimelineItem year="ab 2003" title="Vermächtnis">
                    Burton verlegt den European Open nach Livigno. In Fieberbrunn entsteht die
                    „Skiwies'n Lords Area" mit Halfpipe und Funpark. Das Erbe des Events lebt durch
                    unsere Community weiter.
                  </TimelineItem>
              </div>
            </CollapsibleContent>
            <CollapsibleTrigger className="inline-flex items-center gap-1.5 text-sm font-heading uppercase tracking-wider text-primary hover:text-primary/80 transition-colors cursor-pointer group">
              <span className="group-data-[state=open]:hidden">Chronik ansehen</span>
              <span className="hidden group-data-[state=open]:inline">Chronik schließen</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
          </Collapsible>
          <div className="flex flex-wrap gap-2 mt-3 justify-center">
            <a href="https://www.youtube.com/watch?v=srJzw5LRMDo" target="_blank" rel="noopener"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-card/80 text-sm font-heading uppercase tracking-wider text-muted-foreground hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Play className="w-4 h-4 fill-current" />
              Halfpipe
            </a>
            <a href="https://www.youtube.com/watch?v=2yfwePfD-iU" target="_blank" rel="noopener"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-card/80 text-sm font-heading uppercase tracking-wider text-muted-foreground hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Play className="w-4 h-4 fill-current" />
              Guano Apes - Lords of the Boards
            </a>
          </div>
        </div>
      );
  }
};

/* ── Main Component ── */
const SectionMenu = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  const toggle = (id: SectionId) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mt-4 scroll-reveal">
      <div className="glass-card rounded-[18px] overflow-hidden">
        {/* Menu bar */}
        <div className="flex flex-wrap justify-center gap-1 p-2 relative z-[25]">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className={`px-3 py-2 rounded-xl text-sm font-heading uppercase tracking-wider transition-all cursor-pointer ${
                activeSection === s.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: activeSection ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 pt-2 relative z-[25]">
              {activeSection && <SectionContent id={activeSection} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMenu;
