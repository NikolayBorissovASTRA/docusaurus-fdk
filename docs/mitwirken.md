---
sidebar_position: 9
title: Mitwirken
---

# Mitwirken – Inhalte bearbeiten

Alle Inhalte sind Markdown-Dateien im Ordner `docs/` dieses Repositories.
Für Änderungen ist **keine lokale Installation** nötig.

## Ablauf

1. Unten auf einer Seite **«Diese Seite bearbeiten»** anklicken
   (oder im Repository die Datei öffnen und das Stift-Symbol wählen).
2. Text im Browser anpassen und über **«Commit changes»** auf einem
   neuen Branch speichern → GitHub schlägt automatisch einen
   **Pull Request** vor.
3. Die Pipeline `test-deploy` prüft, ob die Website fehlerfrei baut.
4. Nach Review und **Merge** auf `main` veröffentlicht die Pipeline
   `deploy` den neuen Stand automatisch – nach wenigen Minuten ist die
   Änderung online.

:::tip Vollwertiger Editor im Browser
Im Repository die Taste <kbd>.</kbd> drücken: github.dev öffnet ein
VS Code im Browser – praktisch für grössere Änderungen über mehrere Dateien.
:::

## Markdown-Kurzreferenz

| Element | Schreibweise |
| --- | --- |
| Überschrift | `## Titel` |
| Aufzählung | `- Punkt` |
| Link | `[Text](https://example.com)` |
| Tabelle | `\| Spalte \| Spalte \|` |
| Hinweisbox | `:::info` … `:::` |
| Diagramm | ` ```mermaid ` … ` ``` ` |

Neue Seiten entstehen durch neue `.md`-Dateien; neue Kapitel durch neue
Ordner mit einer `_category_.json`. Die Seitennavigation wird automatisch
aus der Ordnerstruktur erzeugt – Nummernpräfixe (`01-…`) steuern die
Reihenfolge.
