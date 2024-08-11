---
published: true
---

## Présentation du projet
Ce projet est un prototype d'une Single Page Application développé pour la faculté des Sciences d’Aix-Marseille. L'objectif est de proposer une amélioration de l'application existante : l'Atelier des Métiers. 

Cette application est un moteur de recherche inversé : elle permet de trouver les formations qui mènent à des métiers (choisis au préalable).

## Responsabilités au sein de l'équipe
Mes responsabilités au sein de ce projet ont été les suivantes&nbsp;:

- Contribuer à l'identification des besoins et à la rédaction du cahier des charges.
- Concevoir l'architecture logicielle du prototype.
- Concevoir le Modèle Conceptuel des Données, autrement dit le schéma des entités persistantes et leurs relations.
- Développer la quasi-totalité de la partie serveur de l'application (l'API REST).
- Développer l'interface publique (le front-office) du moteur de recherche.

## Solution implémentée

<div class="is-flex is-justify-content-center">
<figure>
  <img src="/content/projects/adm_1.png" 
        alt="Capture d'écran de l'interface du front-office" width="1200" height="1038">
  <figcaption>Capture d'écran de l'interface du front-office</figcaption>
</figure>
</div>

L'interface destinée aux étudiants est, d'un point de vue fonctionnel, relativement proche de l'existante. Ainsi, pour qu'un utilisateur se voit proposer des formations, il doit&nbsp;:
1. Sélectionner un secteur professionnel
2. Sélectionner un sous-secteur professionnel
3. Sélectionner un ou plusieurs critères de filtrage (modalités d'enseignement, sites d'enseignement, type de diplôme, etc.)

Les améliorations proposées sont de l'ordre de l'expérience utilisateur&nbsp;:
- Plus de "flashs blancs" lorsqu'on navigue de page en page.
- Les composants de l'interface sont animés pour réduire leur aspect "mécanique".
- L'utilisateur est accompagné : 
  - chaque étape du processus, métier, formation, critère de filtrage est décrit et accompagné d'exemples.
  - une page d'accueil explique le processus complet.
  - une barre d'étapes indique la progression de l'utilisateur.

L'application dispose également désormais d'un back-office qui permet principalement d'intégrer les données des logiciels de la Faculté des Sciences au prototype développé.

Le prototype est également sécurisé à l'aide de Spring Security. Les utilisateurs sont authentifiés auprès du système d'authentification unique (SSO) de la Faculté à l'aide de jetons JWT. Les accès sont également retreints à l'aide d'un mécanisme d'autorisation basé sur des rôles et privilèges (RBAC).
