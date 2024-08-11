---
published: true
---

L'objectif de ce puzzle est d'anéantir des géants sur une carte en 2D en controlant un personnage qui peut envoyer des eclairs autour de lui.

<div class="is-flex is-justify-content-center">
<figure>
  <img src="/content/puzzles/powerofthor2_1.png" 
       alt="Capture d'écran du problème Power of Thor 2" width="1276" height="638">
    <figcaption>Capture d'écran du problème Power of Thor 2</figcaption>
</figure>
</div>

Le nombre d'éclairs étant limité, la première version de la solution implémentée cherche à se rendre au barycentre des géants et à n'envoyer des éclairs que lorsque le personnage se retrouve pris au piège par les géants.

Cette solution a des limites, notamment lorsque les géants sont alignés. Pour traiter ce cas particulier, le personnage contourne les géants pour les forcer à se regrouper.

<div class="is-flex is-justify-content-center">
<figure>
  <img src="/content/puzzles/powerofthor2_2.png" 
       alt="Cas particulier des géants alignés" width="1276" height="638">
    <figcaption>Cas particulier des géants alignés</figcaption>
</figure>
</div>
