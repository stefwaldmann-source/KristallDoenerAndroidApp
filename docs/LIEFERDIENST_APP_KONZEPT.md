# Kristall Steak Döner – Lieferdienst App Konzept

Dieses Dokument überführt die Base44-Ideen in eine GitHub-taugliche Struktur für die weitere Entwicklung.

## Ziel

Eine funktionsfähige Lieferdienst-App für Kristall Steak Döner Wendelstein mit:

- mobile-first Bestelloberfläche
- Kategorien und Produkte mit Bildern
- Warenkorb und Bestellabschluss
- Liefer- und Abholmodus
- Bestellstatus-Ampel im Adminbereich
- Kundenkonto
- Stempelkarte
- Aktionen und Gutscheine
- später APK über Android WebView oder native App

## Bestehende Live-Basis

Aktuelle Start-URL der Android-App:

```text
https://kristall-doener-wendelstein.de/neu/bestellen/
```

Die Android-App im Repository lädt diese Seite als WebView. Dadurch bleiben Speisekarte, Preise, Bilder und Admin-Funktionen zentral auf der Webseite.

## GitHub-Prototyp

Im Ordner `web-prototype/` liegt ein eigenständiger klickbarer Frontend-Prototyp:

```text
web-prototype/index.html
web-prototype/assets/app.css
web-prototype/assets/app.js
```

Dieser Prototyp zeigt die geplante App-Logik ohne Serveranbindung. Er ist gedacht für Design, Ablauf und spätere Übernahme in PHP/MySQL oder eine API.

## Hauptbereiche der App

### 1. Bestellen

- Kategorieübersicht
- Produktliste
- Suche
- Produkt hinzufügen
- Warenkorb unten als Abschlussleiste
- Liefer- oder Abholmodus

### 2. Warenkorb

- Artikelanzahl
- Zwischensumme
- Servicepauschale
- Liefergebühr
- Gesamtbetrag
- Bemerkung zur Bestellung
- Bestellung absenden

### 3. Admin / Ampel

Statuslogik:

- Grün: Bestellung möglich
- Gelb: aktiv, aber außerhalb der Uhrzeit
- Rot: deaktiviert, pausiert oder geschlossen

Schalter:

- Online-Bestellung aktiv/inaktiv
- Lieferung aktiv/inaktiv
- Abholung aktiv/inaktiv
- Küche pausieren
- Bestellstart heute
- Bestellschluss heute

### 4. Kundenkonto

Geplant:

- Login/Registrierung
- gespeicherte Kundendaten
- vergangene Bestellungen
- Stempelkarte
- Aktionen

### 5. Stempelkarte

Geplant:

- 0/10 Stempelanzeige
- Online-Bestellungen zählen automatisch
- bei 10 Stempeln Gutschein/Gratisprodukt

## Datenmodelle für Produktion

### categories

```text
id
name
subtitle
image_url
sort_order
is_active
```

### products

```text
id
category_id
name
description
price
image_url
is_vegetarian
is_active
sort_order
```

### product_options

```text
id
product_id
group_name
option_name
price_delta
is_required
sort_order
```

### orders

```text
id
customer_id
order_number
mode delivery|pickup
status new|accepted|preparing|ready|delivered|cancelled
subtotal
service_fee
delivery_fee
total
customer_note
created_at
```

### order_items

```text
id
order_id
product_id
name
quantity
unit_price
options_json
```

### settings

```text
online_enabled
delivery_enabled
pickup_enabled
kitchen_paused
open_from
open_until
minimum_delivery_total
delivery_fee
```

## Nächster technischer Schritt

1. Prototyp prüfen.
2. Live-Webseite `/neu/bestellen/` weiter optimieren.
3. Android-WebView-App weiter auf Live-Webseite zeigen lassen.
4. Admin-Ampel und Bestellzeiten serverseitig in PHP/MySQL finalisieren.
5. APK über GitHub Actions bauen.
6. Später signierte Release-App für Google Play vorbereiten.

## Wichtig

Der GitHub-Prototyp ist noch keine echte Produktionsdatenbank. Für echte Bestellungen muss der Warenkorb an die bestehende PHP/MySQL-Bestelllogik oder eine neue API angebunden werden.
