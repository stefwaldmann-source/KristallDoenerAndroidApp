# Kristall Steak Döner Android App

Android-WebView-App und GitHub-Prototyp für das Online-Bestellsystem von **Kristall Steak Döner Wendelstein**.

## App-Daten

- App-Name: `Kristall Steak Döner`
- Paketname / Application ID: `de.smw365.kristallsteakdoener`
- Start-URL der Android-App: `https://bestellen.kristall-doener-wendelstein.de/index.php`
- Version: `1.0.1`

## Was dieses Repository enthält

```text
app/                         Android-WebView-App
.github/workflows/android.yml APK-Build über GitHub Actions
web-prototype/               klickbarer Lieferdienst-App-Prototyp
README.md                    Projektübersicht
docs/                        Konzept und Entwicklungsnotizen
```

## Wichtig zur neuen APK

Diese Version nutzt die neue Bestelladresse:

```text
https://bestellen.kristall-doener-wendelstein.de/index.php
```

Zusätzlich wurde die Application ID geändert. Dadurch kann die neue APK sauber installiert werden, auch wenn eine alte Test-App mit anderer Signatur Probleme gemacht hat.

## GitHub-Prototyp der Lieferdienst-App

Der Ordner `web-prototype/` enthält eine eigenständige Demo der geplanten Lieferdienst-App:

- Kategorieübersicht
- Produkte
- Warenkorb
- Lieferung/Abholung
- Bestellstatus-Ampel
- Admin-Demo für Öffnungszeiten und Aktiv/Deaktiv-Schalter
- Stempelkarte-Ansicht
- mobile-first Layout

Lokal testen:

```text
web-prototype/index.html öffnen
```

Oder später über GitHub Pages veröffentlichen.

## APK automatisch mit GitHub Actions bauen

1. Oben auf **Actions** klicken.
2. Workflow **Build APK** öffnen.
3. **Run workflow** starten oder einfach eine Änderung nach `main` pushen.
4. Nach erfolgreichem Build unten unter **Artifacts** die Datei **kristall-doener-debug-apk** herunterladen.
5. ZIP entpacken, darin liegt die APK.
6. APK auf das Handy kopieren und installieren.

## Lokal mit Android Studio bauen

1. Android Studio öffnen.
2. Dieses Projekt öffnen.
3. **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
4. APK liegt danach unter `app/build/outputs/apk/debug/`.

## Wenn Android weiterhin „App nicht installiert“ zeigt

- alte Testversion vom Handy entfernen,
- neue APK aus dem aktuellen GitHub-Actions-Build verwenden,
- Installation aus unbekannten Quellen für den Dateimanager oder Browser erlauben,
- Datei nicht aus einer alten ZIP nehmen, sondern aus dem neuesten grünen GitHub-Build.

## Konzept

Das Konzept zur Lieferdienst-App liegt hier:

```text
docs/LIEFERDIENST_APP_KONZEPT.md
```
