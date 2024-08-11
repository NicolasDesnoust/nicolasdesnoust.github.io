---
published: true
---

## Objectif du puzzle
L'objectif de ce puzzle est de déplacer un personnage dans un labyrinthe en 2D jusqu'à une case donnée (la salle de contrôle) et de le faire revenir à son point de départ. Le nombre de mouvements du personnage a deux limites&nbsp;:
- Une sur le nombre total de déplacements.
- Une sur le nombre de déplacement au retour, après avoir atteint son objectif. 

De plus, la carte est masquée, seules les cases autour du personnage sont visibles.

<div class="is-flex is-justify-content-center">
<figure>
   <img src="/content/puzzles/labyrinthe_1.png" 
        alt="Capture d'écran du problème Le Labyrinthe" width="638" height="319">
    <figcaption>Capture d'écran du problème Le Labyrinthe</figcaption>
</figure>
</div>

## Algorithme implémenté
L'algorithme implémenté explore le labyrinthe en direction de la salle de contrôle en s'assurant que le chemin au retour peut être emprunté dans le temps imparti.

Le labyrinthe est représenté sous forme d'un graphe (listes d'adjacence). A chaque tour, le graphe est mis à jour en fonction des nouvelles cases découvertes par le personnage. L'algorithme détermine ensuite la case cible du personnage parmi&nbsp;:
- La salle de contrôle.
- Le point de départ.
- La case inexplorée la plus proche.

L'algorithme trouve la prochaine case où emmener le personnage, c'est-à-dire la plus proche de son objectif. Pour cela, l'algorithme effectue un parcours en largeur du graphe en retenant la case qui précède chaque case atteinte.
