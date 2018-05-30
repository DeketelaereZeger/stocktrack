# Progressive Web Apps: StockTrack

A Laravel based Progressive Web App.  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## 1.	How to find it

StockTrack is online te ontdekken via volgende url: https://www.zegerdeketelaere.be. Meer interesse om je te verdiepen in de files en hoe het project is opgebouwd? De GitHub Repo vind je hier: https://github.com/DeketelaereZeger/stocktrack. 

## 2.	How it works

D.m.v. de screencast (StockTrack_Screencast.mp4) kom je te weten hoe de PWA eruitziet. 
Dagelijks doet de PWA een API-call naar “Euronext Stock Exchange API”. De data uit deze API-call wordt geseed naar de SQL-database. Deze database wordt via Routes en Controllers op de juiste Views getoond.  
Door het gebruik van Service Workers is het mogelijk de PWA te gebruiken zonder een (stabiele) internetverbinding.

## 3.	How it’s made

### 3.1	Laravel 
Laravel is een open source framework gebaseerd op de MVC-structuur, die om PHP heen is geschreven. Dit framework zorgt ervoor dat PHP code schrijven een stuk eenvoudiger wordt. Ik speelde al een tijdje met het idee om Laravel te ontdekken, bij het krijgen van de opdracht heb ik dan ook geen seconde getwijfeld om Laravel te gebruiken.

### 3.2	Laragon
Om snel en eenvoudig lokaal heb ik gebruik gemaakt van Laragon. Sta me toe om even de Laragon docs te quoten: “Laragon is a portable, isolated, fast & powerful universal development environment for PHP, Node.js, Python, Java, Go, Ruby. It is fast, lightweight, easy-to-use and easy-to-extend.
Laragon is great for building and managing modern web applications. It is focused on performance - designed around stability, simplicity, flexibility and freedom.
Laragon is very lightweight and will stay as lean as possible. The core binary itself is less than 2MB and uses less than 4MB RAM when running.
Laragon doesn’t use Windows services. It has its own service orchestration which manages services asynchronously and non-blocking so you’ll find things run fast & smoothly with Laragon.” 
### 3.3	API
Quandl heeft een enorm aanbod wat betreft financiële data. Er is een keuze uit heel wat betalende data, maar gelukkig is er ook veel keuze uit gratis data. Volgende API is het uiteindelijk geworden: https://www.quandl.com/data/EURONEXT-Euronext-Stock-Exchange. Deze API stelt op het einde van elke beursdag alle nodige financiële data uit de EURONEXT beschikbaar, mijn keuze beperkte zich tot België en Nederland. 

### 3.4	Libraries
Om de API-calls van vorig puntje zonder enige moeite te gebruiken heb ik de “PHP Quandl” Repo van op GitHub (https://github.com/DannyBen/php-quandl) geïnstalleerd op mijn Laravel project. Dit lukt eenvoudig via composer. Deze library zorgt ervoor dat je met een minimum van zelfgeschreven code een API-call kan doen naar een Quandl API.

### 3.5	Packages
De Service Worker (SW) kreeg ik uiteindelijk aan de praat doormiddel van de SW Precache Webpack Plugin (https://www.npmjs.com/package/sw-precache-webpack-plugin). Deze package is eenvoudig te installeren via NPM. Na enkele instellingen en kleine veranderingen in onder andere Laravel Mix (asset compiling), werden de gevraagde pagina’s gecached en wordt de SW aangemaakt. Hierdoor is het mogelijk om de PWA te gebruiken, ondanks een onbestaande/onstabiele internetverbinding.


## 4.	How it’s hosted

De server van de PWA wordt gehost op Digital Ocean (DO). Door middel van https://forge.laravel.com was het vrij eenvoudig om een DO droplet aan te maken en is het nog eenvoudiger om mijn server te beheren, SSL-certificaten aan te maken en om aan Task Scheduling te doen. 


