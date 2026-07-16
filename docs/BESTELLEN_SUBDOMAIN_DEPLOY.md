# Bestellen-Subdomain Deployment

Ziel: `https://bestellen.kristall-doener-wendelstein.de/index.php`

Die normale Webseite bleibt getrennt. Diese Subdomain ist nur für das Bestellsystem gedacht.

## Webspace-Ziel

Subdomain `bestellen.kristall-doener-wendelstein.de` zeigt auf:

```text
/kristall-doener-wendelstein/App/bestellen
```

## Upload

Den Inhalt des fertigen Bestell-Web-App-ZIP in diesen Ordner hochladen:

```text
/kristall-doener-wendelstein/App/bestellen
```

Nicht den ZIP-Ordner selbst hochladen, sondern den Inhalt, sodass dort direkt liegt:

```text
index.php
cart.php
checkout.php
login.php
register.php
kd_app/
assets/
customer/
kueche/
paypal/
api/
.htaccess
manifest.json
```

## Datenbank

SQL-Datei `d046704b.sql` in phpMyAdmin in die Datenbank `d046704b` importieren.

Danach Datei bearbeiten:

```text
kd_app/config.php
```

Wichtig:

```php
'base_url' => '',
'public_url' => 'https://bestellen.kristall-doener-wendelstein.de',
'name' => 'd046704b',
'user' => 'd046704b',
'pass' => 'DB_PASSWORT_EINTRAGEN',
```

## Test

Nach dem Upload zuerst aufrufen:

```text
https://bestellen.kristall-doener-wendelstein.de/install_check.php
```

Danach:

```text
https://bestellen.kristall-doener-wendelstein.de/index.php
```

## Android-App

Die Android-WebView-App soll diese Start-URL laden:

```text
https://bestellen.kristall-doener-wendelstein.de/index.php
```

Danach APK über GitHub Actions neu bauen.