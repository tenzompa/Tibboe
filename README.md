# Projektdokumentation – [Tibboe]

## Inhaltsverzeichnis

1. [Einordnung & Zielsetzung](#1-einordnung--zielsetzung)
2. [Zielgruppe & Stakeholder](#2-zielgruppe--stakeholder)
3. [Anforderungen & Umfang](#3-anforderungen--umfang)
4. [Vorgehen & Artefakte](#4-vorgehen--artefakte)
    - [Understand & Define](#41-understand--define)
    - [Sketch](#42-sketch)
    - [Decide](#43-decide)
    - [Prototype](#44-prototype)
    - [Validate](#45-validate)
5. [Erweiterungen [Optional]](#5-erweiterungen-optional)
6. [Projektorganisation [Optional]](#6-projektorganisation-optional)
7. [KI‑Deklaration](#7-ki‑deklaration)
8. [Anhang [Optional]](#8-anhang-optional)

> **Hinweis:** Massgeblich sind die im **Unterricht** und auf **Moodle** kommunizierten Anforderungen.

<!-- WICHTIG: DIE KAPITELSTRUKTUR DARF NICHT VERÄNDERT WERDEN! -->

<!-- Diese Vorlage ist für eine README.md im Repository gedacht. Abschnitte mit [Optional] können weggelassen werden, wenn in den Übungen nichts anderes verlangt wird. -->

## 1. Einordnung & Zielsetzung
- **Kontext & Problem:** Tibetisch ist für Einsteiger:innen schwer zugänglich. Viele bestehende Angebote sind textlastig, komplex oder nicht auf Anfänger:innen ausgerichtet. Insbesondere fehlen niedrigschwellige, audiovisuelle Lernangebote, die einen spielerischen Einstieg ermöglichen.
- **Ziele:** *Tibboe* ist ein webbasiertes Lernprototyp-Konzept, das den Einstieg in die tibetische Sprache durch Audio, einfache Interaktionen und spielerische Übungen erleichtert. Ziel ist es, Buchstaben, Vokale, Zahlen (1–10) und einfache Wörter verständlich und motivierend zu vermitteln.
- **Abgrenzung:** Der Prototyp fokussiert auf rezeptives Lernen (Hören & Erkennen). Grammatik, Schreiben, Fortschrittstracking oder produktionsreife Backend-Funktionen sind nicht Teil des Projekts.

## 2. Zielgruppe & Stakeholder
- **Primäre Zielgruppe:** 
    - Lernende, die einen ersten Eindruck der tibetischen Schrift und Aussprache erhalten möchten
    - Erwachsene und Kinder ohne Vorkenntnisse
- **Weitere Stakeholder:**
    - Lehrpersonen oder Kulturvereine 
    - Familien oder Interessierte aus der tibetischen Diaspora 
- **Annahmen:**
    - Audio-gestütztes Lernen erleichtert den Einstieg
    - Kurze, klare Lernsequenzen erhöhen Motivation 
    - Ein spielerischer Challenge-Modus unterstützt das Wiederholen und Festigen

## 3. Anforderungen & Umfang
- **Kernfunktionalität (Mindestumfang):** 
    - Registrierung, Login und Logout
    - Lernbereiche für:
        - Alphabet
        - Vokale
        - Zahlen (1-10)
        - Wörter
    - Struktur: Übersicht → Detailansicht → Audio abspielen
    - Challenge-Modus mit Audio und Multiple-Choice-Auswahl

- **Akzeptanzkriterien:** 
    - Alle Inhalte sind ohne Fehlermeldungen zugänglich
    - Audio kann zuverlässig abgespielt werden
    - Challenge kann vollständig durchgeführt werden

- **Erweiterungen:** 
    - Ein-/Ausblenden von Phonetik im Challenge-Modus
    - Zentrale Audio-Logik zur Erhöhung der Robustheit

## 4. Vorgehen & Artefakte
### 4.1 Understand & Define
- **Ausgangslage & Ziele:** 
    - Fehlende einfache Einstiegsangebote für Tibetisch-Lernende.
- **Zielgruppenverständnis:**     
    - Einsteiger:innen benötigen klare Navigation, wenig Text und Audio als zentrales Lernmittel.
- **Wesentliche Erkenntnisse:** 
    - Klare Struktur ist entscheidend
    - Audio muss leicht zugänglich sein
    - Kurze Interaktionen sind effektiver als lange Lektionen

### 4.2 Sketch
- **Variantenüberblick:** 
    - Lineare Lernabfolge
    - Grid-basierte Lernübersichten
    - Separater Challenge-Modus
- **Skizzen:** 
Es wurden einfache Skizzen (Papier) zur Struktur der Lernbereiche und Navigation erstellt. Sie visualisieren verschiedene Seitenzustände wie Startseite, Lernübersicht, Alphabet-Grid und eine einfache Lernszene mit Audio und Navigation. Der Fokus lag auf einer klaren Struktur, grossen klickbaren Elementen und einer spielerischen Lernabfolge, ohne visuelle Details auszuarbeiten.
![alt text](skizze.png)

### 4.3 Decide
- **Gewählte Variante & Begründung:** Eine modulare Struktur mit getrennten Lernbereichen wurde gewählt, um Überforderung zu vermeiden und schrittweises Lernen zu ermöglichen. 
- **End‑to‑End‑Ablauf:** Startseite → Registrierung/Login → Auswahl Lernbereich → Anhören von Inhalten → Üben im Challenge-Modus → Logout
- **Referenz‑Mockup:** Das Referenz-Mockup zeigt die visuelle Richtung des finalen Prototyps. Es dient als Orientierung für Farbstimmung, Figuren-Einsatz (Maskottchen) und Startseiten-Layout. Die reduzierte Navigation, die zentrale Figur und der klare Call-to-Action („Start Learning“) unterstützen einen freundlichen, einladenden Einstieg und wurden als Grundlage für die Umsetzung gewählt. (https://www.figma.com/proto/QqmOoRoi2ev4FRmBW6TrKS/Prototyping?node-id=6-9&t=mPQl5w7Hr1LfUpIx-1&starting-point-node-id=6%3A9) ![alt text](mockup.png)

### 4.4 Prototype
- **Kernfunktionalität:** Der Prototyp erlaubt das Anhören und Erkennen tibetischer Zeichen, Zahlen und Wörter sowie deren spielerische Wiederholung im Challenge-Modus.
- **Deployment:** (https://tibboe.netlify.app)

#### 4.4.1. Entwurf (Design)
- **Informationsarchitektur:** 
    - Startseite → Login / Registrierung → Lernbereiche → Detailseiten → Challenge → Account / Logout
- **Oberflächenentwürfe:** 
    - Grosse klickbare Elemente, reduzierte Texte, klare Audio-Controls und konsistente Navigation.
- **Designentscheidungen:** 
    - Fokus auf Einfachheit
    - Gute Lesbarkeit und klare Hierarchie
    - Spielerischer Charakter statt klassischer Lernplattform

#### 4.4.2. Umsetzung (Technik)
- **Technologie‑Stack:** 
    - SvelteKit
    - MongoDB
    - HTML / CSS / JavaScript
    - Bootstrap
- **Tooling:** 
    - Visual Studio Code
    - Git / GitHub
    - Netlify 
- **Struktur & Komponenten:** 
    - Routenbasierte Seitenstruktur
    - Wiederverwendbare Komponenten für Lernkarten
    - Zentrale Audio-Normalisierung zur Reduktion von Code-Duplikation
- **Besondere Entscheidungen:** 
    - Accessibility-Verbesserungen (Label-Zuordnung), optionale Phonetik im Challenge-Modus.

### 4.5 Validate
- **URL der getesteten Version** (https://tibboe.netlify.app)
- **Ziele der Prüfung:** Überprüfung der Verständlichkeit und Durchführbarkeit der zentralen Workflows.
- **Vorgehen:** Moderierte Usability-Tests (remote) mit Think-Aloud-Methode.
- **Stichprobe:** 3 Testpersonen ohne Vorkenntnisse der tibetischen Sprache.
- **Aufgaben/Szenarien:** 
    - Account erstellen und einloggen
    - Alphabet-Lernbereich öffnen und Audio abspielen
    - Einen Vokal öffnen und anhören
    - Ein Wort öffnen und anhören
    - Challenge starten und mehrere Aufgaben lösen
- **Kennzahlen & Beobachtungen:** 
    - Erfolgsquote: 3/3 Testpersonen konnten alle Aufgaben erfolgreich abschliessen
    - Zeit bis zur ersten erfolgreichen Audio-Wiedergabe: ca. 20–30 Sekunden
    - Orientierung: 2 von 3 Testpersonen waren beim ersten Einstieg in den Challenge-Modus kurz unsicher
    - Technische Stabilität: Keine Abbrüche oder Fehler bei Audio-Wiedergabe oder Navigation
- **Zusammenfassung der Resultate:** Der Prototyp wurde insgesamt als verständlich, motivierend und spielerisch wahrgenommen. Die Lerninhalte konnten ohne Vorkenntnisse erfolgreich genutzt werden. Kleinere Orientierungsprobleme traten primär beim erstmaligen Wechsel vom Lernen zum Challenge-Modus auf.
- **Abgeleitete Verbesserungen:** 
    - Ergänzung von Error States zur klaren Kommunikation technischer Fehler und ungültiger Zustände
    - Verbesserung der Accessibility in Formularen (klarere Label-Zuordnung)
    - Vereinheitlichung der Audio-Logik, um potenzielle Abspielfehler präventiv zu vermeiden

## 5. Erweiterungen

**Beschreibung & Nutzen:**  
- **Challenge-Modus mit Audio und Multiple-Choice-Auswahl:**  
  Neben den reinen Lernseiten wurde ein interaktiver Challenge-Modus umgesetzt. Nutzer:innen hören ein Audio (Alphabet, Vokal, Zahl oder Wort) und wählen die passende Antwort aus mehreren Optionen.
  *Nutzen:* Fördert aktives Wiederholen und Festigen der Inhalte statt nur passivem Konsum. Der spielerische Charakter erhöht Motivation und Lernerfolg.
  
- **Benutzerkonto & geschützte Inhalte:**  
  Registrierung, Login und Logout sowie eine geschützte Challenge-Seite, die nur für eingeloggte Nutzer:innen zugänglich ist.  
  *Nutzen:* Schafft eine klare Trennung zwischen Erkunden (Lernbereiche) und Üben (Challenge), erhöht die Struktur der Anwendung und simuliert realistische Nutzungsszenarien mit Benutzerkonten.

- **Error States:**  
  Für technische Fehlerzustände (z. B. nicht ladbare Inhalte, ungültige Routen oder fehlende Berechtigungen) wurden klare Rückmeldungen eingeführt.  
  *Nutzen:* Erhöht Transparenz, reduziert Frustration und verbessert die wahrgenommene Stabilität und Usability des Prototyps.

- **Einladungsfunktion via E-Mail:**
  Eingeloggte Nutzer:innen können direkt über einen Button eine vorformulierte E-Mail mit Einladungslink zur Plattform versenden.
  Nutzen: Erleichtert das Teilen der Anwendung, unterstützt organisches Wachstum und eignet sich insbesondere für Usability-Tests und informelles Weiterempfehlen.

- **Robustheit der Audio-Inhalte:**  
  Vereinheitlichung und Normalisierung der Audio-Pfade, sodass Inhalte auch bei uneinheitlichen Dateinamen oder Ordnerstrukturen zuverlässig abgespielt werden können.  
  *Nutzen:* Stabilere Lernexperience und weniger technische Fehler bei der Audio-Wiedergabe.

Zusätzlich wurde die Think-Aloud-Methode eingesetzt, um qualitative Einblicke in das mentale Modell der Testpersonen während der Nutzung zu erhalten.

**Umsetzung in Kürze:**  
- **Authentifizierung:** Cookie-basierte Session-Verwaltung mit `hooks.server.js` und MongoDB-gestützter User-Verwaltung inkl. Passwort-Hashing.  
- **Protected Routes:** Automatischer Redirect auf `/login`, wenn geschützte Inhalte ohne gültige Session aufgerufen werden.
- **Einladungsfunktion:** Umsetzung über einen mailto:-Link mit vordefiniertem Betreff und Nachrichtentext inkl. direktem Zugriffslink auf die Plattform.

**Abgrenzung zum Mindestumfang:**  
Der Mindestumfang verlangt durchgängige Lern- und Übungs-Workflows. Die genannten Erweiterungen gehen darüber hinaus, indem sie den Lernprozess durch aktives Üben (Challenge-Modus), soziale Weiterverbreitung (Einladungsfunktion), Zugriffsbeschränkungen über Benutzerkonten sowie qualitative Verbesserungen in Robustheit, Usability und Accessibility vertiefen, ohne den Prototyp unnötig zu verkomplizieren.


## 6. Projektorganisation
**Repository & Struktur:**  
- `src/routes/` – Seiten & Workflows (Login, Register, Learn, Challenge, Settings)  
- `src/lib/` – Datenzugriff & Hilfslogik (MongoDB, Audio-Handling, Komponenten)  
- `static/` – Assets (Audio-Dateien, Bilder)  
- `README.md` – Projektdokumentation inkl. Validate & KI-Deklaration  

**Issue-Management:**  
Während der Entwicklung wurden Aufgaben und Verbesserungen iterativ umgesetzt. Die Planung erfolgte entlang der Projektphasen (Implementierung, Usability-Verbesserungen, Dokumentation). Kleinere Anpassungen und Bugfixes wurden direkt im Entwicklungsprozess vorgenommen.

**Commit-Praxis:**  
Commits wurden regelmässig erstellt und beschreiben die jeweils umgesetzten Änderungen. Die Commit-Historie folgt einer inkrementellen Entwicklung entlang der Projektphasen. Beispiele:  
- `first commit`  
- `update learn page and error correction`  
- `add numbers learning section and challenge integration`
- `code clean up and read me documentation changes`

## 7. KI‑Deklaration
### Eingesetzte KI‑Werkzeuge
- ChatGPT (OpenAI)

### Zweck & Umfang
- KI wurde zur Unterstützung bei Code-Refactoring, Debugging, Accessibility-Verbesserungen sowie bei der sprachlichen und strukturellen Ausarbeitung der Projektdokumentation eingesetzt. Die Vorschläge wurden kritisch geprüft und bei Bedarf angepasst.


### Art der Beiträge
- Code-Vorschläge und Verbesserungen
- Hilfe bei Fehleranalyse
- Textentwürfe für Dokumentation

### Eigene Leistung (Abgrenzung)
- Konzept, Design, Implementierung, Usability-Tests und finale Entscheidungen wurden eigenständig umgesetzt.

### Reflexion
- KI beschleunigte den Entwicklungsprozess, erforderte jedoch stets kritische Überprüfung und Anpassung.


## 8. Anhang [Optional]
Beispiele:
- **Testskript & Materialien:** _[Link/Datei]_  
- **Rohdaten/Auswertung:** _[Link/Datei]_  

---

<!-- Prüfliste (nicht abgeben, nur intern nutzen) -->
<!--
[ ] Kernfunktionalität gemäss Übungen umgesetzt (Workflows durchgängig)
[ ] Akzeptanzkriterien formuliert und erfüllt
[ ] Skizzen erstellt (mehrere Varianten, Unterschiede dokumentiert)
[ ] Referenz‑Mockup in Decide verlinkt (URL/Screenshots)
[ ] Deployment erreichbar
[ ] Umsetzung (Technik) vollständig (Technologie‑Stack; Tooling & KI‑Einsatz inkl. Überlegungen; Struktur/Komponenten; Daten/Schnittstellen falls genutzt)
[ ] Evaluation durchgeführt; Ergebnisse dokumentiert; Verbesserungen abgeleitet
[ ] Dokumentation vollständig, klar strukturiert und konsistent
[ ] KI‑Deklaration ausgefüllt (Werkzeuge; Zweck & Umfang; Art der Beiträge; Abgrenzung; Quellen & Rechte; optional: Prompt‑Vorgehen, Reflexion)
[ ] Erweiterungen (falls vorhanden) begründet und abgegrenzt
[ ] Anhang gepflegt (Testskript/Materialien, Rohdaten/Auswertung) [optional]
-->