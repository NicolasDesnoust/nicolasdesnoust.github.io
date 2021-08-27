---
published: true
---

## Objectif du puzzle
L'objectif de ce puzzle est de calculer l'encodage de paire d'octets d'une chaîne de caractère fournie en entrée.

L'encodage de paires d'octets est un algorithme basique de compression de données. À partir d'une chaîne d'entrée, on remplaçe de manière répétée la paire d'octets (caractères) consécutifs la plus courante par un nouvel octet inutilisé. Ces octets de remplacement sont appelés des octets non terminaux (représentés par des lettres majuscules) et les octets de la chaîne d'entrée originale des octets terminaux (représentés par des lettres minuscules).

L'algorithme se termine lorsqu'aucune paire d'octets consécutifs n'est répétée dans la chaîne modifiée.

## Exemple
chaîne d'entrée&nbsp;: `aaabdaaabac`

### Étape 1
1. La paire d'octets la plus fréquente est `aa` (note: on compte (et remplace) les répétitions qui ne se chevauchent pas, donc il n'y a que 2 occurences de cette paire).
2. Le premier caractère non-terminal est `Z` => on remplace toutes les instances de `aa` par `Z`.
3. On enregistre la nouvelle règle de remplacement&nbsp;: `Z = aa`.
4. On met à jour la chaîne&nbsp;: `ZabdZabac`.

### Étape 2
1. La paire d'octets la plus fréquente est `Za` (note: `Za` et `ab` apparaissent toutes les deux deux fois, donc on choisi celle qui est le plus à gauche).
2. Le second caractère non-terminal est `Y` => on remplace toutes les instances de `Za` par `Y`.
3. On enregistre la nouvelle règle de remplacement&nbsp;: `Y = Za`.
4. On met à jour la chaîne&nbsp;: `YbdYbac`.

### Étape 3
1. La paire d'octets la plus fréquente est `Yb` (2 occurrences).
2. Le troisième caractère non-terminal est `X` => on remplace toutes les instances de `Yb` par `X`.
3. On enregistre la nouvelle règle de remplacement&nbsp;: `X = Yb`.
4. On met à jour la chaîne&nbsp;: `XdXac`.

Il n'y a plus de paires d'octets qui se répètent, donc l'algorithme termine.
La chaîne de caractères finale est `XdXac`, et les règles de remplacement sont les suivantes&nbsp;:
```bash
Z = aa
Y = Za
X = Yb
```

## Algorithme implémenté
L'algorithme implémenté est la version récursive de l'encodage de paires d'octets, dans laquelle les paires remplacées incluent des caractères non-terminaux.

Si lors d'une itération de l'algorithme, il y a plus qu'une paire d'octets avec la plus haute fréquence, on choisi celle qui apparait la plus à gauche.

Pour les caractères non-terminaux, on commençe avec `Z` et on remonte à l'envers dans l'alphabet.

Les règles de remplacement des paires sont également conservées (et leur ordre) pour que la chaîne de caractères originale puisse être reconstruite.
