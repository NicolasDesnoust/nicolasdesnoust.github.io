---
published: true
---

## Objectif du puzzle
L'objectif de ce puzzle est d'anticiper les déplacements d'un personnage sur une carte en 2D et d'indiquer comment il atteindra son objectif, ou s'il tournera en rond sans jamais l'atteindre.

Le personnage se déplace selon un schéma connu (SUD, EST, NORD ou OUEST), mais ce schéma varie en fonction de la case sur laquelle le personnage se trouve sur la carte.

Voici un aperçu des cases pouvant affecter le déplacement du personnage&nbsp;:
- Le personnage peut rencontrer des obstacles incassables, et devra alors les contourner selon son schéma de déplacement actuel.
- Le personnage peut rencontrer des "bières" lui permettant d'être invincible et de casser certains obstacles.
- Le personnage peut rencontrer des modificateurs de direction (SUD, EST, NORD ou OUEST).
- Le personnage peut rencontrer des inverseurs de schéma, qui changent les priorités de déplacement du personnage.
- Le personnage peut rencontrer des téléporteurs, qui l'amènent automatiquement sur une autre case de la carte.

## Solution implémentée
L'algorithme est implémenté sous forme d'un automate classique qui pour chaque tour&nbsp;:
1. Applique l'effet de la case courante sur le personnage.
2. Détermine le déplacement du personnage compte tenu de son état actuel et des cases environnantes.

L'algorithme implémenté incorpore également un mécanisme de suivi d'historique pour pouvoir le débugger facilement en retraçant l'intégralité des déplacements du personnage dans le temps mais aussi ses changements d'état (schéma inversé, invincible, etc.).

## Perspectives

Ce puzzle est le premier d'une série de trois puzzles permettant de travailler les thèmes suivants&nbsp;:
- Automates
- Recherche de chemins
- Mémoïsation
- Programmation dynamique
- Régression
- Complexité algorithmique
