import { useState } from "react";
import { FileText, X } from "lucide-react";
import { createPortal } from "react-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const statutenText = `§ 1: Name, Sitz und Tätigkeitsbereich

Der Verein führt den Namen „Lords of the Boards Snowboard und Lifestyle Club (LOTB)". Er hat seinen Sitz in 6391 Fieberbrunn und erstreckt seine Tätigkeit auf ganz Österreich. Die Errichtung von Zweigvereinen ist nicht beabsichtigt.

§ 2: Zweck

Der Verein, dessen Tätigkeit nicht auf Gewinn gerichtet ist, bezweckt:

• die Förderung und Unterstützung des Boardsports
• die Pflege und Verbreitung des Boardsports unter der Bevölkerung
• die Förderung insbesondere der Jugend
• die Förderung der körperlichen Ertüchtigung seiner Mitglieder
• die Förderung der Geselligkeit und Kameradschaft
• kameradschaftliche Zusammenarbeit mit anderen Vereinen
• Veranstaltung von Wettkämpfen und Werbeläufen

§ 3: Mittel zur Erreichung des Vereinszwecks

Der Vereinszweck soll durch die angeführten ideellen und materiellen Mittel erreicht werden.

Als ideelle Mittel dienen:

• Trainingsveranstaltungen, die von einem Trainer geleitet werden
• Veranstaltung, Teilnahme und Durchführung von Rennen bzw. Wettkämpfen
• Schaffung geeigneter Plätze zur Ausübung des Sportes
• Bereitstellung der nötigen Ausrüstung
• gesellige Veranstaltungen jeglicher Art
• Vorträge, Versammlungen und Diskussionsabende
• Herausgabe von Mitteilungsblättern, Vereinszeitschriften, etc.
• Veranstaltungen zur Werbung für den Club und von Mitgliedern
• Gestaltung einer Homepage

Die erforderlichen materiellen Mittel sollen aufgebracht werden durch:

• Beitrittsgebühren und Mitgliedsbeiträge
• Erträge aus geselligen Veranstaltungen und vereinseigenen Unternehmungen
• Zuteilungen aus Sportförderungsbeiträgen
• Spenden, Subventionen, Sponsoreneinnahmen
• Vermächtnisse und sonstige Zuwendungen

§ 4: Arten der Mitgliedschaft

Die Mitglieder des Vereins gliedern sich in ordentliche, außerordentliche und Ehrenmitglieder. Ordentliche Mitglieder sind jene, die sich voll an der Vereinsarbeit beteiligen. Außerordentliche Mitglieder sind solche, die die Vereinstätigkeit vor allem durch Zahlung eines erhöhten Mitgliedsbeitrags fördern. Ehrenmitglieder sind Personen, die hiezu wegen besonderer Verdienste um den Verein ernannt werden.

§ 5: Erwerb der Mitgliedschaft

Mitglieder des Vereins können alle physischen Personen, die sich für den Sport interessieren, sowie juristische Personen und rechtsfähige Personengesellschaften werden. Über die Aufnahme von ordentlichen und außerordentlichen Mitgliedern entscheidet der Vorstand. Die Aufnahme kann ohne Angabe von Gründen verweigert werden. Bis zur Entstehung des Vereins erfolgt die vorläufige Aufnahme von ordentlichen und außerordentlichen Mitgliedern durch die Vereinsgründer, im Fall eines bereits bestellten Vorstands durch diesen. Diese Mitgliedschaft wird erst mit Entstehung des Vereins wirksam. Wird ein Vorstand erst nach Entstehung des Vereins bestellt, erfolgt auch die (definitive) Aufnahme ordentlicher und außerordentlicher Mitglieder bis dahin durch die Gründer des Vereins. Die Ernennung zum Ehrenmitglied erfolgt auf Antrag des Vorstands durch die Generalversammlung.

§ 6: Beendigung der Mitgliedschaft

Die Mitgliedschaft erlischt durch Tod, bei juristischen Personen und rechtsfähigen Personengesellschaften durch Verlust der Rechtspersönlichkeit, durch freiwilligen Austritt und durch Ausschluss. Der Austritt kann jederzeit erfolgen. Er muss dem Vorstand vorher schriftlich mitgeteilt werden. Der Vorstand kann ein Mitglied ausschließen, wenn dieses trotz zweimaliger schriftlicher Mahnung unter Setzung einer angemessenen Nachfrist länger als sechs Monate mit der Zahlung der Mitgliedsbeiträge im Rückstand ist. Die Verpflichtung zur Zahlung der fällig gewordenen Mitgliedsbeiträge bleibt hiervon unberührt. Der Ausschluss eines Mitglieds aus dem Verein kann vom Vorstand auch wegen grober Verletzung anderer Mitgliedspflichten und wegen unehrenhaften Verhaltens verfügt werden. Die Aberkennung der Ehrenmitgliedschaft kann aus den genannten Gründen von der Generalversammlung über Antrag des Vorstands beschlossen werden.

§ 7: Rechte und Pflichten der Mitglieder

Die Mitglieder sind berechtigt, an allen Veranstaltungen des Vereins teilzunehmen und die Einrichtungen des Vereins zu beanspruchen. Das Stimmrecht in der Generalversammlung sowie das aktive und passive Wahlrecht steht nur den ordentlichen und den Ehrenmitgliedern zu. Jedes Mitglied ist berechtigt, vom Vorstand die Ausfolgung der Statuten zu verlangen. Mindestens ein Zehntel der Mitglieder kann vom Vorstand die Einberufung einer Generalversammlung verlangen. Die Mitglieder sind in jeder Generalversammlung vom Vorstand über die Tätigkeit und finanzielle Gebarung des Vereins zu informieren. Wenn mindestens ein Zehntel der Mitglieder dies unter Angabe von Gründen verlangt, hat der Vorstand den betreffenden Mitgliedern eine solche Information auch sonst binnen vier Wochen zu geben. Die Mitglieder sind vom Vorstand über den geprüften Rechnungsabschluss (Rechnungslegung) zu informieren. Geschieht dies in der Generalversammlung, sind die Rechnungsprüfer einzubinden. Die Mitglieder sind verpflichtet, die Interessen des Vereins nach Kräften zu fördern und alles zu unterlassen, wodurch das Ansehen und der Zweck des Vereins Abbruch erleiden könnte. Sie haben die Vereinsstatuten und die Beschlüsse der Vereinsorgane zu beachten. Die ordentlichen und außerordentlichen Mitglieder sind zur pünktlichen Zahlung der Beitrittsgebühr und der Mitgliedsbeiträge in der von der Generalversammlung beschlossenen Höhe verpflichtet.

§ 8: Vereinsorgane

Organe des Vereins sind die Generalversammlung (§§ 9 und 10), der Vorstand (§§ 11 bis 13), die Rechnungsprüfer (§ 14) und das Schiedsgericht (§ 15).

§ 9: Generalversammlung

Die Generalversammlung ist die „Mitgliederversammlung" im Sinne des Vereinsgesetzes 2002. Eine ordentliche Generalversammlung findet jährlich statt. Eine außerordentliche Generalversammlung findet auf Beschluss des Vorstands oder der ordentlichen Generalversammlung, schriftlichen Antrag von mindestens einem Zehntel der Mitglieder, Verlangen der Rechnungsprüfer (§ 21 Abs. 5 erster Satz VereinsG), Beschluss der/eines Rechnungsprüfer/s (§ 21 Abs. 5 zweiter Satz VereinsG, § 11 dieser Statuten), Beschluss eines gerichtlich bestellten Kurators (§ 11 dieser Statuten) binnen vier Wochen statt. Sowohl zu den ordentlichen wie auch zu den außerordentlichen Generalversammlungen sind alle Mitglieder mindestens zwei Wochen vor dem Termin schriftlich, mittels Telefax oder per E-Mail einzuladen. Die Anberaumung der Generalversammlung hat unter Angabe der Tagesordnung zu erfolgen. Die Einberufung erfolgt durch den Vorstand, durch die/einen Rechnungsprüfer oder durch einen gerichtlich bestellten Kurator. Anträge zur Generalversammlung sind mindestens drei Tage vor dem Termin der Generalversammlung beim Vorstand schriftlich, mittels Telefax oder per E-Mail einzureichen. Gültige Beschlüsse – ausgenommen solche über einen Antrag auf Einberufung einer außerordentlichen Generalversammlung – können nur zur Tagesordnung gefasst werden. Bei der Generalversammlung sind alle Mitglieder teilnahmeberechtigt. Stimmberechtigt sind nur die ordentlichen und die Ehrenmitglieder. Jedes Mitglied hat eine Stimme. Die Übertragung des Stimmrechts auf ein anderes Mitglied im Wege einer schriftlichen Bevollmächtigung ist zulässig. Die Generalversammlung ist ohne Rücksicht auf die Anzahl der Erschienenen beschlussfähig. Die Wahlen und die Beschlussfassungen in der Generalversammlung erfolgen in der Regel mit einfacher Mehrheit der abgegebenen gültigen Stimmen. Beschlüsse, mit denen das Statut des Vereins geändert oder der Verein aufgelöst werden soll, bedürfen jedoch einer qualifizierten Mehrheit von zwei Dritteln der abgegebenen gültigen Stimmen. Den Vorsitz in der Generalversammlung führt der/die Obmann/Obfrau, in dessen/deren Verhinderung sein/e/ihr/e Stellvertreter/in. Wenn auch diese/r verhindert ist, so führt das an Jahren älteste anwesende Vorstandsmitglied den Vorsitz.

§ 10: Aufgaben der Generalversammlung

Der Generalversammlung sind folgende Aufgaben vorbehalten:

• Beschlussfassung über den Voranschlag;
• Entgegennahme und Genehmigung des Rechenschaftsberichts und des Rechnungsabschlusses unter Einbindung der Rechnungsprüfer;
• Wahl und Enthebung der Mitglieder des Vorstands und der Rechnungsprüfer;
• Genehmigung von Rechtsgeschäften zwischen Rechnungsprüfern und Verein;
• Entlastung des Vorstands;
• Festsetzung der Höhe der Beitrittsgebühr und der Mitgliedsbeiträge für ordentliche und für außerordentliche Mitglieder;
• Verleihung und Aberkennung der Ehrenmitgliedschaft;
• Beschlussfassung über Statutenänderungen und die freiwillige Auflösung des Vereins;
• Beratung und Beschlussfassung über sonstige auf der Tagesordnung stehende Fragen.

§ 11: Vorstand

Der Vorstand besteht aus sechs Mitgliedern, und zwar aus Obmann/Obfrau und Stellvertreter/in, Schriftführer/in und Stellvertreter/in sowie Kassier/in und Stellvertreter/in. Der Vorstand wird von der Generalversammlung gewählt. Der Vorstand hat bei Ausscheiden eines gewählten Mitglieds das Recht, an seine Stelle ein anderes wählbares Mitglied zu kooptieren, wozu die nachträgliche Genehmigung in der nächstfolgenden Generalversammlung einzuholen ist. Fällt der Vorstand ohne Selbstergänzung durch Kooptierung überhaupt oder auf unvorhersehbar lange Zeit aus, so ist jeder Rechnungsprüfer verpflichtet, unverzüglich eine außerordentliche Generalversammlung zum Zweck der Neuwahl eines Vorstands einzuberufen. Sollten auch die Rechnungsprüfer handlungsunfähig sein, hat jedes ordentliche Mitglied, das die Notsituation erkennt, unverzüglich die Bestellung eines Kurators beim zuständigen Gericht zu beantragen, der umgehend eine außerordentliche Generalversammlung einzuberufen hat.

Die Funktionsdauer des Vorstands beträgt vier Jahre. Erfolgt die Neuwahl nicht rechtzeitig vor ihrem Ablauf, so läuft sie bis zur Wahl eines neuen Vorstands weiter. Eine Wiederwahl ist möglich. Jede Funktion im Vorstand ist persönlich auszuüben. Der Vorstand wird vom Obmann/von der Obfrau, bei Verhinderung von seinem/seiner/ihrem/ihrer Stellvertreter/in, schriftlich oder mündlich einberufen. Ist auch diese/r auf unvorhersehbar lange Zeit verhindert, darf jedes sonstige Vorstandsmitglied den Vorstand einberufen. Der Vorstand ist beschlussfähig, wenn alle seine Mitglieder eingeladen wurden und mindestens die Hälfte von ihnen anwesend ist. Der Vorstand fasst seine Beschlüsse mit einfacher Stimmenmehrheit; bei Stimmengleichheit gibt die Stimme des/der Vorsitzenden den Ausschlag. Den Vorsitz führt der/die Obmann/Obfrau, bei Verhinderung sein/e/ihr/e Stellvertreter/in. Ist auch diese/r verhindert, obliegt der Vorsitz dem an Jahren ältesten anwesenden Vorstandsmitglied oder jenem Vorstandsmitglied, das die übrigen Vorstandsmitglieder mehrheitlich dazu bestimmen. Außer durch den Tod und Ablauf der Funktionsperiode erlischt die Funktion eines Vorstandsmitglieds durch Enthebung und Rücktritt.

Die Generalversammlung kann jederzeit den gesamten Vorstand oder einzelne seiner Mitglieder entheben. Die Enthebung tritt mit Bestellung des neuen Vorstands bzw Vorstandsmitglieds in Kraft. Die Vorstandsmitglieder können jederzeit schriftlich ihren Rücktritt erklären. Die Rücktrittserklärung ist an den Vorstand, im Falle des Rücktritts des gesamten Vorstands an die Generalversammlung zu richten. Der Rücktritt wird erst mit Wahl bzw Kooptierung eines Nachfolgers wirksam.

§ 12: Aufgaben des Vorstands

Dem Vorstand obliegt die Leitung des Vereins. Er ist das „Leitungsorgan" im Sinne des Vereinsgesetzes 2002. Ihm kommen alle Aufgaben zu, die nicht durch die Statuten einem anderen Vereinsorgan zugewiesen sind. In seinen Wirkungsbereich fallen insbesondere folgende Angelegenheiten:

• Einrichtung eines den Anforderungen des Vereins entsprechenden Rechnungswesens mit laufender Aufzeichnung der Einnahmen/Ausgaben und Führung eines Vermögensverzeichnisses als Mindesterfordernis;
• Erstellung des Jahresvoranschlags, des Rechenschaftsberichts und des Rechnungsabschlusses;
• Vorbereitung und Einberufung der Generalversammlung in den Fällen des § 9 dieser Statuten;
• Information der Vereinsmitglieder über die Vereinstätigkeit, die Vereinsgebarung und den geprüften Rechnungsabschluss;
• Verwaltung des Vereinsvermögens;
• Aufnahme und Ausschluss von ordentlichen und außerordentlichen Vereinsmitgliedern;
• Aufnahme und Kündigung von Angestellten des Vereins.

§ 13: Besondere Obliegenheiten einzelner Vorstandsmitglieder

Der/die Obmann/Obfrau führt die laufenden Geschäfte des Vereins. Der/die Schriftführer/in unterstützt den/die Obmann/Obfrau bei der Führung der Vereinsgeschäfte. Der/die Obmann/Obfrau vertritt den Verein nach außen. Schriftliche Ausfertigungen des Vereins bedürfen zu ihrer Gültigkeit der Unterschriften des/der Obmanns/Obfrau und des Schriftführers/der Schriftführerin, in Geldangelegenheiten (Vermögenswerte Dispositionen) des/der Obmanns/Obfrau und des Kassiers/der Kassiererin. Rechtsgeschäfte zwischen Vorstandsmitgliedern und Verein bedürfen der Zustimmung eines anderen Vorstandsmitglieds. Rechtsgeschäftliche Bevollmächtigungen, den Verein nach außen zu vertreten bzw. für ihn zu zeichnen, können ausschließlich von den Vorstandsmitgliedern erteilt werden. Bei Gefahr im Verzug ist der/die Obmann/Obfrau berechtigt, auch in Angelegenheiten, die in den Wirkungsbereich der Generalversammlung oder des Vorstands fallen, unter eigener Verantwortung selbständig Anordnungen zu treffen; im Innenverhältnis bedürfen diese jedoch der nachträglichen Genehmigung durch das zuständige Vereinsorgan. Der/die Obmann/Obfrau führt den Vorsitz in der Generalversammlung und im Vorstand. Der/die Schriftführer/in führt die Protokolle der Generalversammlung und des Vorstands. Der/die Kassier/in ist für die ordnungsgemäße Geldgebarung des Vereins verantwortlich. Im Fall der Verhinderung treten an die Stelle der genannten Funktionäre ihre Stellvertreter/innen.

§ 14: Rechnungsprüfer

Zwei Rechnungsprüfer werden von der Generalversammlung auf die Dauer von 4 Jahren gewählt. Wiederwahl ist möglich. Die Rechnungsprüfer dürfen keinem Organ – mit Ausnahme der Generalversammlung – angehören, dessen Tätigkeit Gegenstand der Prüfung ist. Den Rechnungsprüfern obliegt die Prüfung der Finanzgebarung des Vereins im Hinblick auf die Ordnungsmäßigkeit der Rechnungslegung und die statutengemäße Verwendung der Mittel. Der Vorstand hat den Rechnungsprüfern die erforderlichen Unterlagen vorzulegen und die erforderlichen Auskünfte zu erteilen. Die Rechnungsprüfer haben dem Vorstand über das Ergebnis der Prüfung zu berichten. Rechtsgeschäfte zwischen Rechnungsprüfern und Verein bedürfen der Genehmigung durch die Generalversammlung. Im Übrigen gelten für die Rechnungsprüfer die Bestimmungen des § 11 sinngemäß.

§ 15: Schiedsgericht

Zur Schlichtung von allen aus dem Vereinsverhältnis entstehenden Streitigkeiten ist das vereinsinterne Schiedsgericht berufen. Es ist eine „Schlichtungseinrichtung" im Sinne des Vereinsgesetzes 2002 und kein Schiedsgericht nach den §§ 577 ff ZPO. Das Schiedsgericht setzt sich aus drei ordentlichen Vereinsmitgliedern zusammen. Es wird derart gebildet, dass ein Streitteil dem Vorstand ein Mitglied als Schiedsrichter schriftlich namhaft macht. Über Aufforderung durch den Vorstand binnen sieben Tagen macht der andere Streitteil innerhalb von 14 Tagen seinerseits ein Mitglied des Schiedsgerichts namhaft. Nach Verständigung durch den Vorstand innerhalb von sieben Tagen wählen die namhaft gemachten Schiedsrichter binnen weiterer 14 Tage ein drittes ordentliches Mitglied zum/zur Vorsitzenden des Schiedsgerichts. Bei Stimmengleichheit entscheidet unter den Vorgeschlagenen das Los. Die Mitglieder des Schiedsgerichts dürfen keinem Organ – mit Ausnahme der Generalversammlung – angehören, dessen Tätigkeit Gegenstand der Streitigkeit ist. Das Schiedsgericht fällt seine Entscheidung nach Gewährung beiderseitigen Gehörs bei Anwesenheit aller seiner Mitglieder mit einfacher Stimmenmehrheit. Es entscheidet nach bestem Wissen und Gewissen. Seine Entscheidungen sind vereinsintern endgültig.

§ 16: Freiwillige Auflösung des Vereins

Die freiwillige Auflösung des Vereins kann nur in einer Generalversammlung und nur mit Zweidrittelmehrheit der abgegebenen gültigen Stimmen beschlossen werden. Diese Generalversammlung hat auch – sofern Vereinsvermögen vorhanden ist – über die Abwicklung zu beschließen. Insbesondere hat sie einen Abwickler zu berufen und Beschluss darüber zu fassen, wem dieser das nach Abdeckung der Passiven verbleibende Vereinsvermögen zu übertragen hat. Dieses Vermögen soll, soweit dies möglich und erlaubt ist, einer Organisation zufallen, die gleiche oder ähnliche Zwecke wie dieser Verein verfolgt, sonst Zwecken der Sozialhilfe.`;

const AboutUs = () => {
  const [showStatuten, setShowStatuten] = useState(false);

  return (
    <>
      <section className="mt-4 scroll-reveal" id="ueber-uns">
        <div className="glass-card rounded-[18px] p-5">
          <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase mb-2.5 font-heading">Über uns</p>
          <p className="text-muted-foreground leading-[1.75] max-w-[84ch]">
            <strong className="text-foreground">Seit über 30 Jahren</strong> sind wir eine Familie von Snowboard-Enthusiasten,
            die ihre Leidenschaft für den Sport teilen. Was als kleine Gruppe von Freunden begann,
            die gemeinsam die Berge unsicher machten, ist heute ein lebendiger Club mit regelmäßigen
            RideOuts, Events und einer engen Community.
          </p>
          <button
            onClick={() => setShowStatuten(true)}
            className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border bg-card/80 text-sm font-heading uppercase tracking-wider text-muted-foreground hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            Vereinsstatuten
          </button>
        </div>
      </section>

      {showStatuten && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 animate-in fade-in-0 duration-200">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-background border border-border rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="text-lg font-heading uppercase tracking-wider">Statuten des Vereins</h2>
              <button
                onClick={() => setShowStatuten(false)}
                className="rounded-full p-1.5 hover:bg-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ScrollArea className="flex-1 p-5">
              <p className="text-muted-foreground leading-[1.75] whitespace-pre-line text-sm">
                {statutenText}
              </p>
            </ScrollArea>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default AboutUs;
