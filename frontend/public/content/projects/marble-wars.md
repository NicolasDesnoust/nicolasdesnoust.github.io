---
published: true
---

## Présentation du projet
Ce jeu est réalisé dans le cadre du cours intitulé "Interfaces Graphiques". Il s'agit d'un jeu dans le style de “Zuma Revenge”. 

Le fonctionnement est le suivant&nbsp;: le joueur contrôle un canon à billes et doit les tirer sur une file de billes en mouvement en les groupant par couleur. Lorsque le joueur crée une suite de trois billes de même couleur, celles-ci sont détruites. Le but du jeu est de détruire toutes les billes de la file avant qu'elles n'atteignent leur objectif.

Le jeu est implémenté en C avec la librairie graphique GTK.

## Déroulement du projet
Le développement du projet s'est déroulé sur une année en deux temps&nbsp;:
1. Implémentation d'un éditeur de niveaux pendant des travaux pratiques encadrés.
2. Finalisation de l'éditeur de niveau et implémentation du jeu en autonomie.

## Présentation de l'éditeur de niveaux
L'éditeur de niveaux permet de placer le canon à billes, de définir le nombre de billes initial et total et de tracer la trajectoire des billes. Pour affiner la trajectoire, cette dernière est représentée à l'aide de courbes de Bézier.

<div class="is-flex is-justify-content-center">
<figure>
  <img src="/content/projects/marble-wars_2.png" 
        alt="Capture d'écran de l'éditeur de niveaux" width="1063" height="555">
  <figcaption>Capture d'écran de l'éditeur de niveaux</figcaption>
</figure>
</div>

## Présentation du jeu
Le jeu final propose plus d'une dizaine de niveaux différents, avec une difficulté croissante (plus de billes, plusieurs files de billes).

Etant donné que ce projet n'a pas de but commercial mais uniquement d'apprentissage, j'ai eu carte blanche pour la partie design. Je me suis donc inspiré de l'univers de Star Wars. Les illustrations des personnages du jeu ont été empruntées au talentueux [Derek Laufman](https://www.dereklaufman.com/).

<div class="is-flex is-justify-content-center">
<figure>
  <img src="/content/projects/marble-wars_1.png" 
        alt="Capture d'écran d'un niveau du jeu" width="799" height="556">
  <figcaption>Capture d'écran d'un niveau du jeu</figcaption>
</figure>
</div>
