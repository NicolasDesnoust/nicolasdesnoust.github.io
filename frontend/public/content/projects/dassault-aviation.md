---
published: true
---

Stage de fin d’études chez Dassault Aviation. Le stage s'est déroulé en deux phases&nbsp;:

1. Étude du backend NodeJS Kuzzle.
2. Développement d’un Proof of Concept d’une plateforme IoT, basé sur Kuzzle.

## Objectif du stage

L'objectif final étant de vérifier si le backend Kuzzle est une solution viable sur le long terme, en vérifiant plusieurs conditions&nbsp;:

- Kuzzle doit posséder tout ce que l'on peut attendre d'une plateforme IoT, ou permettre de rajouter les fonctionnalités manquantes facilement.
- Kuzzle doit couvrir les cas d'usages de Dassault Aviation, identifiés en amont du stage.

## Étude du backend Kuzzle

La première phase du stage a permit d'identifier et de tester les services fourni par le backend Kuzzle, à savoir&nbsp;:

- Des kits de développement,
- Une API REST,
- Un mécanisme d'autorisation et d'authentification,
- Un mécanisme d'extension du backend via le développement de plugins,
- Deux bases de données NoSQL,
- etc.

Le backend ne fournissant pas toutes les fonctionnalités attendues d'une plateforme IoT, il a été nécessaire de vérifier s'il pouvait être étendu.

## Extension du backend et développement d'un cas d'usage

Dans la seconde phase du stage, plusieurs plugins ont été développés afin de permettre à Kuzzle de fonctionner comme un ETL. Les plugins ont permit&nbsp;:

- La récupération de messages d'objets connectés depuis un serveur LoRa.
- Le décodage de messages encryptés.
- La standardisation des messages.
- L'enrichissement des messages pour leur exploitation future.

Afin de valider ces plugins, une Single Page Application (SPA) a également été développée avec le framework Angular afin d'offrir une interface répondant au cas d'usage du monitoring de températures de réfrigérateurs connectés.

Le développement de cette SPA s'est articulé autour des grands axes suivants :

- L'alerting en cas d'anomalies.
- L'historisation de températures.
- La gestion d'objets connectés et de leur hiérarchie.
- L'extension du mécanisme d'autorisation par défaut.

## Etude d'outils pendant le stage

Etant donné que Kuzzle repose fortement sur Elasticsearch, Redis et Docker, ils ont été étudiés pendant le stage afin de comprendre leur fonctionnement et leur cas d'usages.

Les outils de visualisation de données Kibana et Grafana ont également été étudiés afin de vérifier s'ils pouvaient être utilisés à la place ou en complément de la SPA, mais aussi pour aider à répondre à des problématiques concernant d'autres sujet que celui du stage.
