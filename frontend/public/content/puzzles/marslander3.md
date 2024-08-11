---
published: true
---

## Objectif du challenge

L'objectif de ce puzzle est de faire atterrir, sans crash, une capsule sur Mars. Le joueur peut agir sur l'angle de rotation de la capsule et la puissance de ses fusées.

<div class="is-flex is-justify-content-center">
<figure>
  <img src="/content/puzzles/marslander3_1.png" 
       alt="Schématisation du problème Mars Lander" width="468" height="265">
    <figcaption>Schématisation du problème Mars Lander</figcaption>
</figure>
</div>

Le joueur doit néamoins atterrir avec des vitesses horizontale et verticale faibles et un angle de rotation de 0 degrés. Il doit également minimiser la quantité de fuel utilisée par la capsule.

## Algorithme implémenté

L'algorithme implémenté est un algorithme génétique qui génère un ensemble de trajectoires aléatoires et les raffine au fur et à mesure jusqu'à en trouver une optimale.

L'algorithme génétique génére un premier ensemble de trajectoires potentielles. ces trajectoires sont évaluées sur plusieurs critères&nbsp;:

- La distance du lieu du crash de la capsule vers la zone d'atterissage.
- La quantité de fuel restante.
- La vitesse au moment du crash.

<div class="is-flex is-justify-content-center">
<figure>
  <img src="/content/puzzles/marslander3_2.png" 
       alt="Distance entre la capsule et la zone d'atterissage" width="3000" height="1731">
    <figcaption>Distance entre la capsule et la zone d'atterissage</figcaption>
</figure>
</div>

Les meilleures trajectoires sont conservées. De nouvelles trajectoires sont créées en couplant et mutant les anciennes. Au fur et à mesure que ce processus est répété, l'ensemble des trajectoires fini par tendre vers la solution optimale.

Pour pouvoir anticiper le déplacement de la capsule et évaluer les trajectoires, il a été nécessaire de ré-implémenter le moteur du jeu et la physique derrière le déplacement de la capsule.

Pour vérifier que l'algorithme génétique explore suffisamment l'espace des trajectoires possibles, une interface a été développée avec le framework Angular. Les données de la surface de Mars et les trajectoires de la capsule sont loggées, déversées dans une base de données Elasticsearch et exposées à l'interface via une API REST. Cette solution offre un faible couplage entre l'algorithme (qui ne doit pas contenir de librairies tierces) et le code développé autour (moteur du jeu, interface graphique).

## Optimisations

Comme pour tous les challenges sur Codingame, une limite de temps est imposée (1 seconde pour le premier tour et 100 ms pour les suivants). Cette limite impose au joueur d'optimiser son algorithme. Voici un aperçu des optimisations qui ont pu être réalisées&nbsp;:

- Groupement des points de la surface de Mars pour réduire le nombre de tests de collision effectués.
- Mise en cache des calculs réutilisables.
- Réutilisation d'instances de classes (+ de 2 million sans réutilisation) via des Factories.

L'algorithme génétique est également relancé plusieurs fois tant que la capsule n'a pas atteri. Cela permet d'éviter que l'algorithme ne soit bloqué sur un optimum local.

> NB: pour garantir que l'optimisation de certaines parties de l'algorithme n'est pas prématurée, ces dernières ont  été identifiées à l'aide du profiler VisualVM.

## Résultats

L'algorithme génétique trouve une solution proche de celle optimale pour tous les cas de tests proposés par la plateforme. Il s'agit d'un des problèmes les plus difficiles de Codingame, ce qui explique l'investissement nécessaire pour implémenter une solution (quelques mois). Après bon nombre d'optimisations et de débuggage, l'algorithme implémenté se classe 40ème mondial dans la catégorie optimisation du fuel, et 6ème ex-aequo des solutions implémentées en Java sur les 11000+ développeurs qui ont démarré ce puzzle&nbsp;!

<div class="is-flex is-justify-content-center">
<figure>
   <img src="/content/puzzles/marslander3_3.png" 
        alt="Classement des développeurs en Java" width="1075" height="754">
    <figcaption>Classement des développeurs en Java</figcaption>
</figure>
</div>
