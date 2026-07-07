# Kristall Döner Android-App

Dies ist eine native Android-WebView-App für dein bestehendes Bestellsystem.

## App-Daten

- App-Name: Kristall Döner
- Paketname: de.smw365.kristalldoener
- Start-URL: https://kristall-doener-wendelstein.de/neu/bestellen/
- Version: 1.0.0

## Funktionen

- öffnet direkt dein Bestellsystem in einer App-Ansicht
- keine Browser-Adresszeile
- Logo/Splashscreen
- Android-Zurück-Taste funktioniert im Shop-Verlauf
- Cookies/Login bleiben in der App gespeichert
- externe Links wie Telefon, E-Mail, WhatsApp öffnen sich extern
- Internet-Fehlerseite mit erneutem Versuch
- Datei-Upload im WebView vorbereitet

## APK bauen

1. Android Studio installieren.
2. Diesen Ordner `KristallDoenerAndroid` öffnen.
3. Warten, bis Gradle synchronisiert ist.
4. Menü: `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`.
5. Die APK liegt danach ungefähr hier:

```text
app/build/outputs/apk/debug/app-debug.apk
```

## Release-APK

Für eine echte Veröffentlichung im Play Store brauchst du eine signierte Release-APK bzw. AAB.
In Android Studio:

```text
Build → Generate Signed Bundle / APK
```

Dann einen eigenen Keystore anlegen und sicher speichern.

## URL ändern

Die Startseite steht in:

```text
app/src/main/java/de/smw365/kristalldoener/MainActivity.java
```

Dort ändern:

```java
private static final String SHOP_URL = "https://kristall-doener-wendelstein.de/neu/bestellen/";
```

