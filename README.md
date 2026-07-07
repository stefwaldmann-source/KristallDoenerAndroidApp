# Kristall Döner Android App

Android-WebView-App für das Online-Bestellsystem von Kristall Döner Wendelstein.

## App-Daten

- App-Name: Kristall Döner
- Paketname: `de.smw365.kristalldoener`
- Start-URL: `https://kristall-doener-wendelstein.de/neu/bestellen/`
- Version: `1.0.0`

## APK automatisch mit GitHub Actions bauen

Nach dem Upload in GitHub:

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
