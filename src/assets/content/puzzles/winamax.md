---
published: true
---

## Objectif du challenge
L'objectif de ce challenge est d'écrire un programme capable de
simuler les coups à effectuer sur un parcours de golf afin d'économiser
au mieux le temps et l'effort à dépenser pendant la partie.

<div class="is-flex is-justify-content-center">
<figure>
  <img src="http://localhost:4200/assets/content/puzzles/winamax_1.png" 
       alt="Schématisation du problème Mars Lander" width="500" height="327">
    <figcaption>Exemple d'un parcours de golf Winamax</figcaption>
</figure>
</div>

Sur chaque parcours se trouve une certaine quantité de balles et une quantité égale de trous. L'objectif est de tracer le trajet de chaque balle vers un trou différent sans que les trajets ne se croisent. Le challenge a également d'autres contraintes, consultables en cliquant sur le lien vers le sujet complet ci-dessous.

<div class="is-flex is-justify-content-center">
<figure>
  <img src="http://localhost:4200/assets/content/puzzles/winamax_2.png" 
       alt="Schématisation du problème Mars Lander" width="500" height="327">
    <figcaption>Solution de l'exemple précédent</figcaption>
</figure>
</div>

## Algorithme implémenté
Ce problème appartient à la famille des problèmes NP-Complet. Il n'est donc pas possible de lui trouver une solution efficacement, il est nécessaire de parcourir l'ensemble des solutions potentielles jusqu'à trouver la bonne. L'algorithme implémenté utilise le concept de Back-tracking&nbsp;: il tente de taper des balles jusqu'à ce que la solution soit trouvée ou jusqu'à ce qu'il soit bloqué. Si l'algorithme est bloqué, il revient un coup en arrière et continue d'explorer l'espace des solutions au problème.

### Optimisation de l'algorithme
Etant donné les limites de temps imposées par Codingame, la recherche de la solution doit être optimisée pour la trouver dans le temps imparti.
Il y a principalement deux types d'optimisations. Celles qui se concentrent sur le choix du meilleur coup à jouer&nbsp;: 
- Les balles qui ne peuvent aller que dans une seule direction sont tapées en premier.
- Les balles qui n'ont qu'un mouvement possible les menant à un trou sont tapées en premier.
- Les balles qui ont le moins de directions disponibles sont tapées en priorité.
- Les balles qui ne peuvent être tapées qu'un petit nombre de fois sont tapées en priorité.
- Les balles qui peuvent rejoindre un grand nombre de trous sont tapées en priorité.

Et il y a les optimisations qui améliorent globalement la vitesse de l'algorithme&nbsp;:
- Représentation d'un parcours de golf sous forme de couches (couche dynamique / couche statique).
- Réduction du nombre de parcours de golf clonés par l'algorithme de back-tracking.
- Calcul en amont des trajectoires des balles sur un parcours de golf. 
