---
published: true
---

## Contexte du projet

Cette application web a été développée pour la Fondation de France. [Premier réseau de philanthropie en France](https://www.fondationdefrance.org/fr/la-fondation-de-france-premier-reseau-de-philanthropie-en-france), la Fondation de France réunit ainsi, sur tous les territoires, des donateurs, des fondateurs, des bénévoles et des acteurs de terrain. A chacun, elle apporte l’accompagnement dont il a besoin pour que son  action soit la plus efficace possible. Et ce dans tous les domaines de  l’intérêt général : aide aux personnes vulnérables, recherche médicale,  environnement, culture, éducation...

## Objectif et solution implémentée

L'objectif de l'application développée est de pouvoir identifier les donateurs les plus susceptibles de participer à une collecte de dons. Les donateurs sont identifiés en fonction de leur correspondance à certains critères ou de leur proximité par rapport au lieu dans lequel est organisée la collecte de dons.

<div class="is-flex is-justify-content-center">
<figure>
   <img src="/content/projects/geolocalisation_1.png" 
        alt="Aperçu de l'interface de l'application" width="1280" height="459">
   <figcaption>Aperçu de l'interface de l'application</figcaption>
</figure>
</div>

Pour ce faire, l'utilisateur de l'application doit suivre la procédure suivante&nbsp;:

1. Importer les informations concernant les donateurs au format CSV.
2. Filtrer les donateurs sur des critères textuels, numériques et booléens.
3. Renseigner la position du lieu dans lequel il souhaite organiser une collecte de dons.
4. Renseigner la durée maximale en voiture qu'un donateur devra faire pour se rendre de son domicile vers le lieu cible.
5. Exporter la liste des donateurs filtrés selon les critères choisis au préalable, et les plus proches du lieu de collecte de dons.

> N.B. : par soucis de respect de la vie privée, les donateurs sont localisés uniquement en fonction de leur ville et code postal.
