

# Bildergalerie vor die Chronik-Zeitleiste verschieben

## Was wird geaendert

In der "Geschichte"-Sektion wird die Reihenfolge innerhalb des aufklappbaren Bereichs ("Chronik ansehen") umgestellt:

**Aktuell:** Zeitleiste (Timeline) -> Bildergalerie (horizontal)

**Neu:** Bildergalerie (horizontal) -> Zeitleiste (Timeline)

Alle bestehenden Funktionen bleiben erhalten:
- Horizontales Scrollen der Galerie
- Lightbox mit Vergroesserung und Pfeiltasten-Navigation
- Bildunterschriften
- Aufklappen nur bei Klick auf "Chronik ansehen"

## Technische Umsetzung

In `src/components/lotb/SectionMenu.tsx` (Zeilen 381-430): Innerhalb des `CollapsibleContent`-Blocks wird der Galerie-Block (Zeilen 422-429) vor den Timeline-Block (Zeilen 382-421) verschoben. Die Struktur wird dann:

1. Horizontale Bildergalerie mit Scroll-Container
2. Kleiner Abstand (mt-4)
3. Timeline mit allen Eintraegen von "ca. 1990" bis "Vermaechtnis"

