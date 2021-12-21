---
published: true
---

## Objectif du puzzle
L'objectif de ce puzzle est d'écrire un programme capable de contrôler les déplacements d'un personnage le long d'une façade d'un bâtiment. Le personnage peut sauter de fenêtre en fenêtre jusqu'à atteindre son objectif.

Le personnage peut sauter sur n'importe quelle fenêtre mais il ne connaît pas exactement la position de son objectif, seulement sa direction par rapport à sa position actuelle. De plus, le nombre de sauts disponibles est limité. 

## Algorithme implémenté
L'algorithme implémenté effectue une recherche dichotomique dans un tableau à deux dimensions pour minimiser le nombres de sauts effectués.

<div class="is-flex is-justify-content-center">
<figure>
  <img src="/assets/content/puzzles/shadowsoftheknight1_1.png" 
       alt="Exemple d'une recherche dichotomique" width="638" height="359">
    <figcaption>Exemple d'une recherche dichotomique - 31 tours restants</figcaption>
</figure>
</div>

<div class="is-flex is-justify-content-center">
<figure>
  <img src="/assets/content/puzzles/shadowsoftheknight1_2.png" 
       alt="Exemple d'une recherche dichotomique (2)" width="638" height="359">
    <figcaption>Exemple d'une recherche dichotomique - 30 tours restants</figcaption>
</figure>
</div>
