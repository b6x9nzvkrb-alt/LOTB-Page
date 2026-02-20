import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ChronikSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="mt-4 scroll-reveal">
      <div className="glass-card glass-card-hover rounded-[18px] overflow-hidden sm:rotate-[0.15deg]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-5 cursor-pointer text-left"
        >
          <h3 className="text-foreground font-heading text-lg uppercase tracking-wider text-center flex-1">Geschichte</h3>
          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 text-sm">
              <p className="text-muted-foreground leading-[1.7] mb-4">
                Was als lokales Rennen am Doischberg begann, wurde binnen eines Jahrzehnts zu einem
                international beachteten Snowboard-Festival – mit ISF-World-Series, Livemusik und
                Athlet*innen aus der ganzen Welt.
              </p>

              <Collapsible>
                <CollapsibleContent>
                  <div className="relative pl-5 border-l-2 border-border/40 space-y-4 mb-4">
                    <TimelineItem year="ca. 1990" title="Erstes Rennen am Doischberg">
                      Am Doischberg findet ein Snowboardrennen mit dem Namen „Lords of the Boards" statt –
                      waghalsige Sprünge und Helikopterflüge über das Publikum sorgen für spektakuläre Bilder.
                    </TimelineItem>
                    <TimelineItem year="Mitte 90er" title="Festival etabliert sich">
                      Der internationale Snowboard-Jetset besucht einmal im Jahr das kleine Dorf. Die Szene
                      bringt Jugendkultur ins Tal und entfacht die Begeisterung für das Snowboarden.
                    </TimelineItem>
                    <TimelineItem year="1997" title="ISF World Masters">
                      Fieberbrunn wird Austragungsort des ISF Snowboard Masters World Cup – ein Großereignis,
                      das den Grundstein für die späteren Lords-of-the-Boards-Events legt.
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
                      Der Burton European Open zieht nach Fieberbrunn und wird gemeinsam mit Lords of the Boards
                      ausgetragen – TV-Event mit Sport- und Rockstars ua Outkast, begleitet von Ecapella-TV.
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
                <CollapsibleTrigger className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer group">
                  <span className="group-data-[state=open]:hidden">Chronik ansehen</span>
                  <span className="hidden group-data-[state=open]:inline">Chronik schließen</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
              </Collapsible>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-muted/5 text-[13px]">
                  <b className="text-foreground">Parallelslalom</b>
                </span>
                <a href="https://www.youtube.com/watch?v=srJzw5LRMDo" target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/5 text-[13px] text-muted-foreground hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <b className="text-foreground">Halfpipe</b>
                </a>
                <a href="https://www.youtube.com/watch?v=2yfwePfD-iU" target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/5 text-[13px] text-muted-foreground hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <b className="text-foreground">Guano Apes - Lords of the Boards</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ year, title, children }: { year: string; title: string; children: ReactNode }) => (
  <div className="relative">
    <div className="absolute -left-[calc(0.625rem+1px)] top-1.5 w-2.5 h-2.5 rounded-full bg-primary/60 border-2 border-background" />
    <p className="text-[11px] font-extrabold text-primary/70 tracking-wider uppercase">{year}</p>
    <p className="text-foreground font-bold text-[13px] mb-0.5">{title}</p>
    <p className="text-muted-foreground leading-[1.65] text-[13px]">{children}</p>
  </div>
);

export default ChronikSection;
