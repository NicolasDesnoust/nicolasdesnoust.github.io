---
published: true
---

## Objectif du projet

Ce projet contient trois dossiers dans lesquels il est possible d'expérimenter différentes versions du jeu du Pendu orienté client/serveur. L'objectif du projet est d'explorer la communication entre machines via le package `java.net`, c'est-à-dire les Sockets et le protocole TCP.

## Dossier clientUnique

Dans cette version, un seul client peut jouer à la fois sur le serveur. Le serveur peut faire jouer un nombre de clients limité.

## Dossier clientsMultiples

Dans cette version, plusieurs clients peuvent jouer en simultané sur le serveur. Le serveur peut faire jouer un nombre de clients limité.

## Dossier clientsDuels

Dans cette version, plusieurs clients peuvent jouer en simultané en 1 contre 1 sur le serveur. Le serveur peut organiser un nombre de duels limité. Lors d'un duel les deux clients jouent chacun leur tour et le premier à avoir deviné le mot gagne la partie. Par soucis d'équité si le premier joueur trouve le mot, le second a le droit a un dernier essai.
