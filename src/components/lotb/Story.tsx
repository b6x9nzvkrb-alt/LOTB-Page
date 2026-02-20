import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Play } from "lucide-react";

const Story = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="mt-4 scroll-reveal" id="geschichte">
      <div className="glass-card rounded-[18px] p-5">
        <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase mb-2.5 font-heading">Geschichte</p>

        <p className="text-muted-foreground leading-[1.75] max-w-[84ch] mb-3">
          <strong className="text-foreground">Lords of the Boards</strong> ist ein Stück Snowboard-Geschichte aus Fieberbrunn.
          Snowboarden hat in diesem kleinen tiroler Dorf bereits eine lange Tradition –
          und Lords of the Boards ist von Anfang an Teil davon.
        </p>

        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleContent>
            <div className="grid gap-3 text-muted-foreground leading-[1.75] mb-3">
              <p>
                Bereits Ende der 80er, anfang der 90er Jahre fanden die ersten Parallelslalom-Rennen am Doischberg statt –
                roh, laut und kompromisslos. Damals ging's weniger um Leistung, mehr um Mut, Style und das Gefühl, Teil von etwas Neuem zu sein.
              </p>
              <p>
                Bald darauf baute man zusätzlich „Eine Wanne aus Stroh". Sie bekam den Namen „Kangaroo Canyon" und wurde zum Austragungsort für einen der ersten Halfpipecontests in Europa.
                Durch den besonderen Vibe, den man heute noch spürt wenn man die alten Stories hört, zog dieses Event viele Snowboard-Pioniere und jede Menge Zuschauer an. So mauserte sich das Ganze zu einem Fixpunkt des internationalen Snowboardkalenders mit World-Series-Teilnehmern, großen Sponsoren und einem umfangreichen Rahmenprogramm.
              </p>
              <p>
                Das Event wurde in der Szene schließlich so legendär, dass ihm sogar ein eigener Song gewidmet wurde:
                <strong className="text-foreground"> „Lords of the Boards"</strong> von den <strong className="text-foreground">Guano Apes</strong>. Ein Song, der für so manche bis heute die Snowboardhymne schlechthin darstellt.
              </p>
              <p>
                Vieles aus dieser Zeit ist geblieben und einiges davon macht uns bis heute aus: Unter anderem eine eingeschworene Community mit einem Club,
                der Snowboarden in Fieberbrunn immer noch lebt, feiert und mit Freude weitergibt.
              </p>
            </div>
          </CollapsibleContent>

          <CollapsibleTrigger className="inline-flex items-center gap-1.5 text-sm font-heading uppercase tracking-wider text-primary hover:text-primary/80 transition-colors cursor-pointer">
            {open ? "Weniger anzeigen" : "Mehr lesen"}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
        </Collapsible>

        <div className="flex flex-wrap gap-1 mt-4 justify-center">
          <span className="px-3 py-2 rounded-xl text-sm font-heading uppercase tracking-wider text-muted-foreground">
            Parallelslalom
          </span>
          <span className="px-3 py-2 rounded-xl text-sm font-heading uppercase tracking-wider text-muted-foreground">
            Halfpipe
          </span>
          <a
            href="https://www.youtube.com/watch?v=srJzw5LRMDo"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-card/80 text-sm font-heading uppercase tracking-wider text-muted-foreground hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <Play className="w-4 h-4 fill-current" />
            Halfpipe
          </a>
          <a
            href="https://www.youtube.com/watch?v=2yfwePfD-iU"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-card/80 text-sm font-heading uppercase tracking-wider text-muted-foreground hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <Play className="w-4 h-4 fill-current" />
            Guano Apes - Lords of the Boards
          </a>
        </div>
      </div>
    </section>
  );
};


export default Story;
