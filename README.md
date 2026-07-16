# Kristall Döner Android App

Android-WebView-App und GitHub-Prototyp für das Online-Bestellsystem von **Kristall Steak Döner Wendelstein**.

## App-Daten

- App-Name: `Kristall Döner`
- Paketname: `de.smw365.kristalldoener`
- Start-URL der Android-App: `https://kristall-doener-wendelstein.de/neu/bestellen/`
- Version: `1.0.0`

## Was dieses Repository enthält

```text
app/                         Android-WebView-App
.github/workflows/android.yml APK-Build über GitHub Actions
web-prototype/               klickbarer Lieferdienst-App-Prototyp
README.md                    Projektübersicht
docs/                        Konzept und Entwicklungsnotizen
```

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

## Lokal mit Android Studio bauen

1. Android Studio öffnen.
2. Dieses Projekt öffnen.
3. **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
4. APK liegt danach unter `app/build/outputs/apk/debug/`.

## Konzept

Das Konzept zur Lieferdienst-App liegt hier:

```text
docs/LIEFERDIENST_APP_KONZEPT.md
```

## Wichtig

Die Android-App lädt aktuell das echte Bestellsystem der Webseite. Der `web-prototype` ist eine GitHub-Demo für die weitere Entwicklung und ersetzt noch nicht die produktive PHP/MySQL-Bestelllogik.
