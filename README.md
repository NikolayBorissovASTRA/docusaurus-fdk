# ASTRA Fachhandbuch BIM – Dokumentationsplattform

Dieses Repository enthält das **ASTRA Fachhandbuch BIM** als [Docusaurus](https://docusaurus.io)-Website
nach dem Docs-as-Code-Prinzip: Inhalte sind Markdown-Dateien, jede Änderung ist
über Git versioniert, und GitHub Actions baut und veröffentlicht die Website
automatisch auf GitHub Pages. **Eine lokale Installation ist nicht erforderlich.**

---

## Inbetriebnahme (einmalig, ca. 10 Minuten)

### Schritt 1 – Repository anlegen

Auf GitHub ein neues, **leeres** Repository erstellen, z. B. `astra-fachhandbuch-bim`
(ohne README, ohne .gitignore).

### Schritt 2 – Projektdateien hochladen

**Variante A – im Browser via Codespace (empfohlen, keine Installation):**

1. Im neuen Repository: `Code` → `Codespaces` → `Create codespace on main`.
2. Die ZIP-Datei per Drag-and-drop in den Datei-Explorer des Codespace ziehen.
3. Im Terminal des Codespace:

   ```bash
   unzip -o astra-fachhandbuch-bim.zip -d . && rm astra-fachhandbuch-bim.zip
   git add -A
   git commit -m "Initiale Struktur Fachhandbuch BIM"
   git push
   ```

**Variante B – lokal mit Git:** ZIP entpacken, dann im Ordner
`git init && git add -A && git commit -m "Init" && git branch -M main &&
git remote add origin <REPO-URL> && git push -u origin main`.

### Schritt 3 – GitHub Pages aktivieren

Im Repository: **Settings → Pages → Build and deployment → Source: „GitHub Actions"**.

### Schritt 4 – Konfiguration anpassen

In `docusaurus.config.js` (direkt im Browser editierbar) die mit `ANPASSEN`
markierten Werte setzen:

| Schlüssel | Wert |
| --- | --- |
| `url` | `https://<GitHub-Name>.github.io` |
| `organizationName` | `<GitHub-Name>` (Organisation oder Benutzer) |
| `projectName` / `baseUrl` / `editUrl` | nur ändern, falls das Repository **nicht** `astra-fachhandbuch-bim` heisst |

Der Commit dieser Änderung löst automatisch das erste Deployment aus.

### Schritt 5 – Ergebnis prüfen

Unter dem Tab **Actions** läuft der Workflow „Deploy to GitHub Pages".
Nach 2–3 Minuten ist die Website erreichbar unter:

```
https://<GitHub-Name>.github.io/astra-fachhandbuch-bim/
```

> Falls das erste Deployment fehlschlug, weil Pages noch nicht aktiviert war:
> unter **Actions** den Workflow auswählen und **„Re-run all jobs"** klicken
> (oder ihn via „Run workflow" manuell starten).

---

## Inhalte bearbeiten (laufender Betrieb)

1. Auf einer Seite der Website **„Diese Seite bearbeiten"** anklicken – oder im
   Repository die Datei unter `docs/` öffnen und das Stift-Symbol wählen.
   Für grössere Änderungen: Taste <kbd>.</kbd> im Repository drücken
   (öffnet github.dev, ein VS Code im Browser).
2. Änderung committen → GitHub erstellt einen **Pull Request**.
3. Der Workflow `test-deploy` prüft automatisch, ob die Website baut.
4. Nach dem **Merge** auf `main` veröffentlicht `deploy` den neuen Stand.

Details für das Team: Seite **„Mitwirken"** im Handbuch (`docs/mitwirken.md`).

## Struktur

```
.
├── .github/workflows/        # CI/CD: test-deploy (PR) und deploy (main → Pages)
├── docs/                     # Inhalte des Fachhandbuchs (Markdown)
│   ├── index.md              # Einleitung (Startseite)
│   ├── mitwirken.md          # Anleitung: Bearbeiten im Browser
│   ├── 01-grundlagen/
│   ├── 02-organisation/
│   ├── 03-anwendungsfaelle/  # inkl. Kopiervorlage für neue AwF
│   └── 04-modelle-und-daten/
├── src/css/custom.css        # Farbschema (Bundesrot)
├── static/.nojekyll          # deaktiviert Jekyll auf GitHub Pages
├── docusaurus.config.js      # zentrale Konfiguration (Werte „ANPASSEN")
├── sidebars.js               # Navigation: automatisch aus der Ordnerstruktur
└── package.json / package-lock.json
```

**Konventionen:** Neue Seiten = neue `.md`-Dateien; neue Kapitel = neue Ordner
mit `_category_.json`. Nummernpräfixe (`01-…`) steuern die Reihenfolge und
erscheinen nicht in der URL. Mermaid-Diagramme sind aktiviert
(Codeblock mit ` ```mermaid `).

## Lokale Entwicklung (optional)

Wer möchte, kann mit Node.js ≥ 20 lokal arbeiten – nötig ist es nicht:

```bash
npm install        # Abhängigkeiten installieren
npm run start      # Live-Vorschau unter http://localhost:3000
npm run build      # Produktions-Build in ./build
```

In einem **GitHub Codespace** funktionieren dieselben Befehle direkt im
Browser; der Vorschau-Port wird automatisch weitergeleitet.
